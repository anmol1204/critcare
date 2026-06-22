export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: 'No message provided' });

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'API key not configured. Add ANTHROPIC_API_KEY to Vercel environment variables.' });
  }

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
        max_tokens: 1024,
        system: `You are CritCare AI, an ICU clinical decision support assistant designed for intensivists and emergency physicians in Indian hospitals.

When given a patient clinical summary, respond with a concise, structured, evidence-based management plan using this format:

**Assessment:** [1–2 sentence clinical summary of the most likely diagnosis and severity]

**1. Immediate priorities:** [Stabilisation steps — airway, haemodynamics, monitoring]

**2. Drug therapy:** [Specific drugs with doses, adjusted for renal/hepatic function if relevant]

**3. Investigations:** [Key tests needed and why]

**4. Monitoring targets:** [Specific numbers — MAP, lactate, UO, SpO2, glucose, etc.]

**5. Further management:** [Source control, specialist consult, escalation triggers]

Be concise, practical, and adapted for resource-limited settings. Cite relevant guidelines (SSC, KDIGO, ARDSNet) briefly when applicable.

Always end with: ⚠️ This is clinical decision support only — always apply your own clinical judgement.`,
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(502).json({ error: 'AI API error', detail: errorText });
    }

    const data = await response.json();
    const reply = data.content[0].text;
    return res.json({ reply });
  } catch (err) {
    return res.status(500).json({ error: 'Server error', detail: err.message });
  }
}
