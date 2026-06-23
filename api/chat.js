module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'No message provided' });

  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({ error: 'GROQ_API_KEY is not set in Vercel environment variables.' });
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
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.GROQ_API_KEY,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        max_tokens: 1024,
        temperature: 0.3,
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      let detail = responseText;
      try {
        const parsed = JSON.parse(responseText);
        detail = parsed.error && parsed.error.message ? parsed.error.message : responseText;
      } catch (_) {}
      return res.status(502).json({ error: 'Groq API error (status ' + response.status + '): ' + detail });
    }

    const data = JSON.parse(responseText);
    const reply = data.choices[0].message.content;
    return res.json({ reply });
  } catch (err) {
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
};
