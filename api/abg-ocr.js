module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured in Vercel environment variables.' });
  }

  const { imageBase64, mimeType } = req.body || {};
  if (!imageBase64) return res.status(400).json({ error: 'No image data provided.' });

  const prompt = `You are a medical ABG (Arterial Blood Gas) report reader.
Extract ALL values visible in this ABG report image.
Return ONLY a valid JSON object — nothing else, no explanation, no markdown.

Extract these fields (use null if not found or not visible):
{
  "pH": number,
  "pco2": number,
  "hco3": number,
  "pao2": number,
  "fio2": number,
  "spo2": number,
  "na": number,
  "cl": number,
  "k": number,
  "albumin": number,
  "lactate": number,
  "glucose": number,
  "bun": number,
  "osm": number,
  "be": number,
  "notes": "string with any other relevant values or observations visible"
}

Important rules:
- pH is typically between 6.8 and 7.8
- PaCO2 (PCO2) is typically 20-100 mmHg
- HCO3 (bicarbonate) is typically 5-45 mEq/L
- PaO2 (PO2) is typically 40-600 mmHg
- FiO2 is 0.21-1.0 (if written as percentage like 21%, convert to 0.21)
- Sodium (Na) is typically 120-160 mEq/L
- Chloride (Cl) is typically 90-115 mEq/L
- Potassium (K) is typically 2.5-7.0 mEq/L
- Lactate is typically 0.5-20 mmol/L
- BE (Base Excess) is typically -20 to +20

Return ONLY the JSON object.`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            {
              inline_data: {
                mime_type: mimeType || 'image/jpeg',
                data: imageBase64
              }
            },
            { text: prompt }
          ]
        }],
        generationConfig: {
          temperature: 0.1,
          maxOutputTokens: 512
        }
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(502).json({ error: 'Gemini API error: ' + err });
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Extract JSON from response (remove any markdown code fences if present)
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(422).json({
        error: 'Could not extract values from image. Please ensure the image is clear and contains an ABG report.',
        rawResponse: rawText.slice(0, 200)
      });
    }

    const values = JSON.parse(jsonMatch[0]);

    // Validate and sanitise extracted values
    const sanitised = {};
    const numFields = ['pH','pco2','hco3','pao2','fio2','spo2','na','cl','k','albumin','lactate','glucose','bun','osm','be'];
    numFields.forEach(f => {
      if (values[f] !== null && values[f] !== undefined && !isNaN(values[f])) {
        sanitised[f] = parseFloat(values[f]);
      }
    });
    if (values.notes) sanitised.notes = String(values.notes).slice(0, 300);

    return res.json({
      success: true,
      values: sanitised,
      fieldsFound: Object.keys(sanitised).filter(k => k !== 'notes').length
    });

  } catch (err) {
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
