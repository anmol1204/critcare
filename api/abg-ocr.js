module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured in Vercel environment variables.' });
  }

  const { imageBase64, mimeType } = req.body || {};
  if (!imageBase64) return res.status(400).json({ error: 'No image data provided.' });

  const validMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const safeMimeType = validMimeTypes.includes(mimeType) ? mimeType : 'image/jpeg';

  const prompt = `You are reading an ABG (Arterial Blood Gas) report. Extract ALL numeric values visible in this image.

Return ONLY a valid JSON object with no explanation or markdown. Use null for any value not found.

{
  "pH": number or null,
  "pco2": number or null,
  "hco3": number or null,
  "pao2": number or null,
  "fio2": number or null,
  "spo2": number or null,
  "na": number or null,
  "cl": number or null,
  "k": number or null,
  "albumin": number or null,
  "lactate": number or null,
  "glucose": number or null,
  "bun": number or null,
  "osm": number or null,
  "be": number or null,
  "notes": "any other relevant info or values visible"
}

Rules:
- pH: 6.8–7.8
- PaCO2 (PCO2): 20–100 mmHg
- HCO3 (bicarbonate, HCO3-): 5–45 mEq/L
- PaO2 (PO2): 40–600 mmHg
- FiO2: if shown as % (e.g. 21%), convert to decimal (0.21)
- Na (sodium): 120–160 mEq/L
- Cl (chloride): 80–120 mEq/L
- K (potassium): 2.0–8.0 mEq/L
- Lactate: 0.1–20 mmol/L
- BE (base excess): -25 to +25
- Return ONLY the JSON object, nothing else.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: safeMimeType,
                data: imageBase64,
              },
            },
            {
              type: 'text',
              text: prompt,
            },
          ],
        }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      let msg = err;
      try { msg = JSON.parse(err).error?.message || err; } catch (_) {}
      return res.status(502).json({ error: 'Claude API error: ' + msg });
    }

    const data = await response.json();
    const rawText = data.content?.[0]?.text || '';

    // Extract JSON from response
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(422).json({
        error: 'Could not read values from this image. Please ensure the ABG report is clearly visible and well-lit.',
        rawResponse: rawText.slice(0, 200),
      });
    }

    const values = JSON.parse(jsonMatch[0]);

    // Sanitise and validate
    const sanitised = {};
    const numFields = ['pH','pco2','hco3','pao2','fio2','spo2','na','cl','k','albumin','lactate','glucose','bun','osm','be'];
    numFields.forEach(f => {
      const v = values[f];
      if (v !== null && v !== undefined && !isNaN(parseFloat(v))) {
        sanitised[f] = parseFloat(v);
      }
    });
    if (values.notes) sanitised.notes = String(values.notes).slice(0, 400);

    return res.json({
      success: true,
      values: sanitised,
      fieldsFound: Object.keys(sanitised).filter(k => k !== 'notes').length,
    });

  } catch (err) {
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
