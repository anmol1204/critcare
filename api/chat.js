module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'No message provided' });

  // Debug: show which env vars are present (names only, not values)
  const envKeys = Object.keys(process.env).filter(k =>
    k.includes('GEMINI') || k.includes('ANTHROPIC') || k.includes('API')
  );

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY not found.',
      hint: 'Env vars containing GEMINI/API/ANTHROPIC found: ' + (envKeys.join(', ') || 'none'),
    });
  }

  const systemPrompt = `You are CritCare AI, an ICU clinical decision support assistant designed for intensivists and emergency physicians in Indian hospitals.

When given a patient clinical summary, respond with a concise, structured, evidence-based management plan using this format:

**Assessment:** [1-2 sentence clinical summary of the most likely diagnosis and severity]

**1. Immediate priorities:** [Stabilisation steps - airway, haemodynamics, monitoring]

**2. Drug therapy:** [Specific drugs with doses, adjusted for renal/hepatic function if relevant]

**3. Investigations:** [Key tests needed and why]

**4. Monitoring targets:** [Specific numbers - MAP, lactate, UO, SpO2, glucose, etc.]

**5. Further management:** [Source control, specialist consult, escalation triggers]

Be concise, practical, and adapted for resource-limited settings. Cite relevant guidelines (SSC, KDIGO, ARDSNet) briefly when applicable.

Always end with: This is clinical decision support only - always apply your own clinical judgement.`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: message }] }],
        generationConfig: { maxOutputTokens: 1024, temperature: 0.3 },
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      let detail = responseText;
      try {
        const parsed = JSON.parse(responseText);
        detail = parsed.error && parsed.error.message ? parsed.error.message : responseText;
      } catch (_) {}
      return res.status(502).json({ error: 'Gemini API error (status ' + response.status + '): ' + detail });
    }

    const data = JSON.parse(responseText);
    const reply = data.candidates[0].content.parts[0].text;
    return res.json({ reply });
  } catch (err) {
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
