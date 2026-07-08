// ============================================================
// CritCare.in — MCQ Bank (question data)
// ------------------------------------------------------------
// Pilot set: Critical Care Medicine, NEET-SS oriented.
// Content triangulated from Marino's ICU Book, The Washington
// Manual of Critical Care, and Irwin & Rippe's Intensive Care
// Medicine (+ current society guidelines). Original wording.
//
// Schema (window.MCQ_BANK = [ ... ]):
//   id        unique string
//   spec      'ccm' | 'em' | 'anaes'
//   topic     display topic name (used for the topic filter)
//   difficulty'easy' | 'moderate' | 'severe'
//   type      'direct' | 'case'
//   stem      case scenario (HTML) — '' for direct questions
//   q         the question stem (HTML)
//   o         array of 4 option strings (HTML allowed)
//   a         index (0-3) of the correct option
//   e         explanation (HTML) — NEET-SS oriented
//   pearl     clickable clinical pearl (HTML, may include a mini table)
//   src       short source label
//
// To scale toward 500–1000: append objects below. The engine
// auto-discovers topics, difficulties and types from this array.
// ============================================================
window.MCQ_BANK = [

/* ==========================================================
   SEPSIS & SEPTIC SHOCK
   ========================================================== */
{
  id: 'ccm-sep-001', spec: 'ccm', topic: 'Sepsis', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Per the Sepsis-3 (2016) consensus, sepsis is defined as:',
  o: [
    'Two or more SIRS criteria in a patient with suspected infection',
    'Life-threatening organ dysfunction caused by a dysregulated host response to infection',
    'Bacteraemia with fever and leucocytosis',
    'Hypotension requiring vasopressors of any cause'
  ],
  a: 1,
  e: 'Sepsis-3 abandoned SIRS as the defining criterion. Sepsis = infection + <strong>organ dysfunction</strong>, operationalised as an acute rise in <strong>SOFA ≥2 points</strong>. SIRS was dropped because it was too sensitive and non-specific.',
  pearl: 'qSOFA (bedside screen, ≥2 = worse prognosis): <table class="mcq-mini"><tr><td>Respiratory rate</td><td>≥22/min</td></tr><tr><td>Altered mentation</td><td>GCS &lt;15</td></tr><tr><td>Systolic BP</td><td>≤100 mmHg</td></tr></table>qSOFA is a <em>prompt-to-escalate</em>, not a diagnostic rule.',
  src: 'Sepsis-3 / Washington Manual'
},
{
  id: 'ccm-sep-002', spec: 'ccm', topic: 'Sepsis', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Septic shock (Sepsis-3) is defined as sepsis with:',
  o: [
    'Any lactate above the normal range',
    'Vasopressor requirement to keep MAP ≥65 mmHg AND lactate >2 mmol/L despite adequate fluid resuscitation',
    'Systolic BP <90 mmHg on presentation',
    'A positive blood culture plus hypotension'
  ],
  a: 1,
  e: 'Septic shock is a subset with profound circulatory and cellular/metabolic derangement carrying higher mortality. It requires <strong>both</strong> a vasopressor need (MAP ≥65) <strong>and</strong> lactate >2 mmol/L <strong>after</strong> adequate fluid resuscitation.',
  pearl: 'The hospital mortality of septic shock (Sepsis-3) is <strong>&gt;40%</strong>, versus ~10% for sepsis without shock — the reason the two are defined separately.',
  src: 'Sepsis-3'
},
{
  id: 'ccm-sep-003', spec: 'ccm', topic: 'Sepsis', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The first-line vasopressor in septic shock is:',
  o: ['Dopamine', 'Adrenaline (epinephrine)', 'Noradrenaline (norepinephrine)', 'Phenylephrine'],
  a: 2,
  e: 'Noradrenaline is the first-line vasopressor (Surviving Sepsis Campaign, strong recommendation). Dopamine is avoided — it causes more tachyarrhythmias and showed a mortality signal in cardiogenic subgroups (SOAP II).',
  pearl: 'Add-on order in refractory septic shock:<table class="mcq-mini"><tr><td>1st</td><td>Noradrenaline</td></tr><tr><td>2nd (NA ~0.25–0.5 µg/kg/min)</td><td>Add vasopressin 0.03 U/min</td></tr><tr><td>3rd</td><td>Add hydrocortisone 200 mg/day</td></tr><tr><td>Consider</td><td>Adrenaline / angiotensin II</td></tr></table>',
  src: 'SSC 2021 / Marino'
},
{
  id: 'ccm-sep-004', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In the Surviving Sepsis Campaign "hour-1 bundle", the recommended initial crystalloid volume for sepsis-induced hypoperfusion is:',
  o: ['10 mL/kg', '20 mL/kg', '30 mL/kg', '50 mL/kg'],
  a: 2,
  e: 'The hour-1 bundle recommends <strong>≥30 mL/kg IV balanced crystalloid</strong> for hypotension or lactate ≥4 mmol/L, ideally within the first 3 hours, then reassess with dynamic measures. This is a weak recommendation (low-quality evidence) — individualise in cardiac/renal failure.',
  pearl: 'Hour-1 bundle (5 elements): measure <strong>lactate</strong>; obtain <strong>blood cultures</strong> before antibiotics; give <strong>broad-spectrum antibiotics</strong>; start <strong>30 mL/kg crystalloid</strong> for hypotension/lactate ≥4; add <strong>vasopressors</strong> during/after fluids to keep MAP ≥65.',
  src: 'SSC 2021'
},
{
  id: 'ccm-sep-005', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Regarding antibiotic timing in sepsis, current guidance is to administer antimicrobials:',
  o: [
    'Within 1 hour for septic shock and possible sepsis without shock',
    'Only after blood cultures resulted, regardless of delay',
    'Within 24 hours for all patients',
    'Immediately for shock, but delay is acceptable up to 3 hours if sepsis is only "possible" and shock is absent'
  ],
  a: 3,
  e: 'SSC 2021 refined timing: for <strong>definite sepsis or septic shock</strong>, give antibiotics <strong>within 1 hour</strong>. For <strong>possible sepsis without shock</strong>, a period of rapid investigation is permitted with antibiotics within <strong>3 hours</strong> if concern persists — reducing unnecessary broad-spectrum exposure.',
  pearl: 'Each hour of delay to effective antibiotics in septic shock is associated with a measurable rise in mortality — but reflexive broad-spectrum use in non-infective mimics drives resistance and <em>C. difficile</em>. Balance is the 2021 theme.',
  src: 'SSC 2021 / Irwin & Rippe'
},
{
  id: 'ccm-sep-006', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Which resuscitation target has the best evidence for guiding therapy in septic shock?',
  o: [
    'Central venous pressure (CVP) 8–12 mmHg',
    'Lactate clearance / normalisation and capillary refill time',
    'ScvO₂ ≥70% via protocolised EGDT',
    'Pulmonary capillary wedge pressure'
  ],
  a: 1,
  e: 'Protocolised EGDT with CVP/ScvO₂ targets did <strong>not</strong> improve mortality (ProCESS, ARISE, ProMISe). Guidance now favours <strong>lactate-guided resuscitation</strong>; ANDROMEDA-SHOCK showed <strong>capillary refill time</strong>–guided resuscitation was at least as good and possibly better. CVP is a static measure that does not predict fluid responsiveness.',
  pearl: 'Static vs dynamic: <table class="mcq-mini"><tr><td>Static (poor)</td><td>CVP, PCWP</td></tr><tr><td>Dynamic (better)</td><td>PPV/SVV, passive leg raise + CO, IVC variation</td></tr></table>Use dynamic measures + perfusion markers, not a single CVP number.',
  src: 'ANDROMEDA-SHOCK / Marino'
},
{
  id: 'ccm-sep-007', spec: 'ccm', topic: 'Sepsis', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'A patient in septic shock on noradrenaline 0.4 µg/kg/min and vasopressin 0.03 U/min remains hypotensive. Random cortisol is not available. The next evidence-based step most likely to reduce time on vasopressors is:',
  o: [
    'High-dose methylprednisolone 30 mg/kg',
    'IV hydrocortisone 200 mg/day (e.g. 50 mg q6h or infusion)',
    'Fludrocortisone alone',
    'Await an ACTH stimulation test before any steroid'
  ],
  a: 1,
  e: 'In vasopressor-refractory septic shock, <strong>hydrocortisone 200 mg/day</strong> shortens time to shock reversal (APROCCHSS, ADRENAL). An ACTH stimulation test is <strong>not required</strong> before starting. High-dose short-course methylprednisolone (as in ARDS) is not the septic-shock regimen; supraphysiological "stress" pulse steroids are harmful.',
  pearl: 'APROCCHSS added <strong>fludrocortisone</strong> to hydrocortisone and showed a mortality benefit; ADRENAL (hydrocortisone infusion alone) showed faster shock reversal without a clear mortality benefit. Either way — start steroid when shock is vasopressor-dependent.',
  src: 'APROCCHSS / ADRENAL / SSC 2021'
},
{
  id: 'ccm-sep-008', spec: 'ccm', topic: 'Sepsis', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'Which fluid is specifically recommended AGAINST resuscitation in sepsis because of increased AKI and mortality?',
  o: ['Balanced crystalloid (Ringer\'s lactate/Plasma-Lyte)', 'Hydroxyethyl starch (HES)', '0.9% saline', '4–5% human albumin'],
  a: 1,
  e: '<strong>Hydroxyethyl starch</strong> increased renal replacement therapy and mortality (VISEP, 6S, CHEST) and is contraindicated. Balanced crystalloids are preferred over saline (less hyperchloraemic acidosis; SMART/BaSICS). Albumin is a reasonable adjunct when large crystalloid volumes are needed.',
  pearl: 'The chloride story: large-volume 0.9% saline → hyperchloraemic metabolic acidosis → renal vasoconstriction. Balanced solutions (RL, Plasma-Lyte) avoid this and are first choice in sepsis.',
  src: 'SSC 2021 / SMART'
},
{
  id: 'ccm-sep-009', spec: 'ccm', topic: 'Sepsis', difficulty: 'easy', type: 'case',
  stem: 'A 58-year-old man with community-acquired pneumonia presents with temperature 38.9 °C, HR 118, RR 26, BP 96/54 mmHg and confusion. Lactate is 3.2 mmol/L.',
  q: 'Which single feature here best distinguishes SEPSIS from an uncomplicated infection?',
  o: ['Fever of 38.9 °C', 'Heart rate of 118', 'New confusion (organ dysfunction)', 'Respiratory rate of 26'],
  a: 2,
  e: 'Fever, tachycardia and tachypnoea are SIRS features present in many simple infections. What defines <strong>sepsis</strong> is <strong>organ dysfunction</strong> — here, new <strong>altered mentation</strong> (a SOFA/qSOFA element). The raised lactate and hypotension further mark tissue hypoperfusion.',
  pearl: 'This patient meets <strong>all three qSOFA</strong> criteria (RR ≥22, altered mentation, SBP ≤100) — a red flag to escalate to senior review and start the sepsis bundle now.',
  src: 'Sepsis-3'
},
{
  id: 'ccm-sep-010', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'case',
  stem: 'A 65-year-old woman with urosepsis receives 30 mL/kg balanced crystalloid. BP is now 82/48 mmHg (MAP 59), lactate has risen from 3.0 to 4.5 mmol/L, and she is anuric. She has no central access yet.',
  q: 'What is the most appropriate next step?',
  o: [
    'Give a further 30 mL/kg crystalloid before any vasopressor',
    'Start noradrenaline (via a large peripheral cannula if needed) while securing central access',
    'Start dopamine peripherally',
    'Withhold vasopressors until a central line is placed'
  ],
  a: 1,
  e: 'After adequate initial fluids she remains hypotensive with rising lactate — she needs a <strong>vasopressor now</strong> to restore MAP ≥65. Noradrenaline can be started through a <strong>good peripheral line</strong> for a short period rather than delaying while a central line is placed. Reflexive further large fluid boluses risk pulmonary oedema without addressing vasoplegia.',
  pearl: 'Peripheral noradrenaline is acceptable short-term via a large, proximal (antecubital or above) cannula with close monitoring for extravasation; convert to central access when feasible. Delaying pressors to "get a central line first" costs perfusion time.',
  src: 'SSC 2021 / Marino'
},
{
  id: 'ccm-sep-011', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'case',
  stem: 'A 72-year-old man with septic shock from a perforated viscus is on noradrenaline. Source control is being planned. Blood cultures are pending; he received piperacillin-tazobactam 40 minutes after recognition.',
  q: 'Which principle of management is he MOST at risk of missing?',
  o: [
    'Early antibiotics',
    'Timely source control (surgical/interventional)',
    'Lactate measurement',
    'Vasopressor support'
  ],
  a: 1,
  e: 'Antibiotics, lactate and vasopressors are addressed. In an intra-abdominal catastrophe, <strong>source control</strong> (drainage/surgery/removal of infected device) is the intervention most likely to be forgotten or delayed — and antibiotics alone rarely rescue an undrained source. Aim for source control as soon as logistically feasible, ideally within 6–12 hours.',
  pearl: 'Source control examples: drain an abscess, remove an infected line/prosthesis, debride necrotic tissue, relieve obstruction (e.g. obstructed infected ureter → nephrostomy/stent). No amount of antibiotic replaces it.',
  src: 'SSC 2021 / Irwin & Rippe'
},
{
  id: 'ccm-sep-012', spec: 'ccm', topic: 'Sepsis', difficulty: 'severe', type: 'case',
  stem: 'A 44-year-old woman with septic shock is on noradrenaline 0.6 µg/kg/min and vasopressin 0.03 U/min with hydrocortisone started. Echocardiography shows a hyperdynamic left ventricle, IVC is non-collapsing, and lactate is falling. MAP is 62 mmHg. She has a history of well-controlled hypertension.',
  q: 'Which is the most appropriate consideration for her persistent vasoplegia?',
  o: [
    'Add adrenaline or angiotensin II as a further vasopressor',
    'Give another 2 L crystalloid bolus',
    'Start dobutamine for inotropy',
    'Aim for a higher MAP target of 85–90 mmHg in all patients'
  ],
  a: 0,
  e: 'She has <strong>vasoplegic (distributive) shock</strong> with a hyperdynamic LV and no volume deficit — the problem is vasodilatation, not pump failure or hypovolaemia. Adding a <strong>third vasopressor (adrenaline or angiotensin II)</strong> is appropriate. Further fluids in a non-collapsing IVC risk harm; dobutamine would worsen vasodilatation in a hyperdynamic heart. A universal MAP of 85–90 is not beneficial (SEPSISPAM) except perhaps in chronic hypertensives — but the immediate issue is refractory vasoplegia.',
  pearl: 'SEPSISPAM: a higher MAP target (80–85) reduced RRT in <em>chronic hypertensives</em> but increased atrial fibrillation overall. Default MAP target is <strong>65 mmHg</strong>; individualise upward only for selected chronic-hypertensive patients.',
  src: 'ATHOS-3 / SEPSISPAM'
},

/* ==========================================================
   ARDS
   ========================================================== */
{
  id: 'ccm-ards-001', spec: 'ccm', topic: 'ARDS', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'By the Berlin definition, ARDS severity is graded using:',
  o: ['PaO₂ alone', 'The PaO₂/FiO₂ (P/F) ratio on PEEP ≥5 cmH₂O', 'SpO₂/FiO₂ only', 'Chest X-ray appearance alone'],
  a: 1,
  e: 'Berlin grades ARDS by <strong>P/F ratio with PEEP ≥5 cmH₂O</strong>: mild 200–300, moderate 100–200, severe ≤100. It also requires acute onset (≤1 week), bilateral opacities not fully explained by effusions/collapse/nodules, and respiratory failure not fully explained by cardiac failure/fluid overload.',
  pearl: 'Berlin severity bands: <table class="mcq-mini"><tr><td>Mild</td><td>P/F 200–300</td></tr><tr><td>Moderate</td><td>P/F 100–200</td></tr><tr><td>Severe</td><td>P/F ≤100</td></tr></table>All measured on PEEP/CPAP ≥5 cmH₂O.',
  src: 'Berlin definition'
},
{
  id: 'ccm-ards-002', spec: 'ccm', topic: 'ARDS', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The cornerstone ventilatory strategy proven to reduce mortality in ARDS (ARMA/ARDSNet) is:',
  o: [
    'Tidal volume 10–12 mL/kg actual body weight',
    'Tidal volume 6 mL/kg predicted body weight with plateau pressure <30 cmH₂O',
    'High tidal volumes to normalise PaCO₂',
    'Pressure support ventilation only'
  ],
  a: 1,
  e: 'Low-tidal-volume <strong>lung-protective ventilation</strong> — <strong>6 mL/kg predicted body weight</strong> (calculated from height/sex) with <strong>plateau pressure &lt;30 cmH₂O</strong> — reduced mortality in the ARDSNet ARMA trial. Permissive hypercapnia (pH >7.20) is accepted.',
  pearl: 'Predicted body weight (PBW) uses <strong>height</strong>, not actual weight:<table class="mcq-mini"><tr><td>Male</td><td>50 + 0.91 × (height cm − 152.4)</td></tr><tr><td>Female</td><td>45.5 + 0.91 × (height cm − 152.4)</td></tr></table>Setting V<sub>T</sub> on actual weight over-distends the lung.',
  src: 'ARDSNet / Marino'
},
{
  id: 'ccm-ards-003', spec: 'ccm', topic: 'ARDS', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In moderate-to-severe ARDS, which intervention reduced mortality when applied ≥16 hours/day for P/F <150?',
  o: ['Routine recruitment manoeuvres', 'Prone positioning', 'High-frequency oscillatory ventilation (HFOV)', 'Inhaled nitric oxide'],
  a: 1,
  e: '<strong>Prone positioning</strong> for ≥16 h/day in P/F &lt;150 reduced mortality in <strong>PROSEVA</strong> (NNT ~6). HFOV was harmful/neutral (OSCAR, OSCILLATE). Inhaled NO improves oxygenation transiently but does not improve survival and may increase renal injury.',
  pearl: 'Proning works by improving V/Q matching, reducing dorsal atelectasis and making trans-pulmonary pressure more uniform — reducing ventilator-induced lung injury. Benefit is greatest when started <strong>early</strong> in severe ARDS.',
  src: 'PROSEVA'
},
{
  id: 'ccm-ards-004', spec: 'ccm', topic: 'ARDS', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Which parameter is the strongest ventilator-derived predictor of mortality in ARDS and a key target of lung-protective ventilation?',
  o: ['Peak airway pressure', 'Driving pressure (plateau pressure − PEEP)', 'Minute ventilation', 'Respiratory rate'],
  a: 1,
  e: '<strong>Driving pressure (ΔP = Pplat − PEEP)</strong>, which reflects tidal volume normalised to the compliance of aerated lung, is the ventilator variable most strongly associated with mortality (Amato 2015). Aim for <strong>ΔP &lt;15 cmH₂O</strong>. Peak pressure is confounded by airway resistance.',
  pearl: 'ΔP = V<sub>T</sub> ÷ respiratory-system compliance. A low V<sub>T</sub> can still generate a high ΔP if the "baby lung" is very small — check ΔP, not just V<sub>T</sub>.',
  src: 'Amato 2015 / Irwin & Rippe'
},
{
  id: 'ccm-ards-005', spec: 'ccm', topic: 'ARDS', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'Regarding neuromuscular blockade in early moderate-severe ARDS, the current best interpretation of ACURASYS and ROSE is:',
  o: [
    'Routine 48-hour cisatracurium infusion improves mortality in all ARDS',
    'Early NMB does not confer a routine mortality benefit; reserve it for severe ARDS with ventilator dyssynchrony/high plateau pressures',
    'NMB is contraindicated in ARDS',
    'NMB should be continued for at least 7 days'
  ],
  a: 1,
  e: 'ACURASYS suggested a benefit, but the larger <strong>ROSE</strong> trial (with lighter sedation in controls) showed <strong>no mortality benefit</strong> from routine early cisatracurium. Current practice: NMB is <strong>not routine</strong> but is reasonable for <strong>severe ARDS</strong> with refractory dyssynchrony, high plateau/driving pressures, or during proning.',
  pearl: 'Before reaching for paralysis, optimise: deepen sedation, correct pain/agitation, adjust ventilator flow/trigger to reduce dyssynchrony. NMB masks — it does not treat — the underlying drive.',
  src: 'ACURASYS / ROSE'
},
{
  id: 'ccm-ards-006', spec: 'ccm', topic: 'ARDS', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'Based on EOLIA and its post-hoc Bayesian analysis, VV-ECMO in very severe ARDS is best regarded as:',
  o: [
    'Proven to have no role in ARDS',
    'A reasonable rescue therapy for refractory hypoxaemia in experienced centres, with a probable mortality benefit',
    'First-line therapy before lung-protective ventilation',
    'Indicated only after 14 days of ventilation'
  ],
  a: 1,
  e: 'EOLIA was stopped early and formally "negative", but crossover was high and a <strong>post-hoc Bayesian analysis</strong> plus meta-analysis support a <strong>probable mortality benefit</strong>. VV-ECMO is a <strong>rescue</strong> option for refractory severe hypoxaemia (e.g. P/F &lt;80, or uncontrolled hypercapnic acidosis) in experienced centres after optimising conventional therapy including proning.',
  pearl: 'Consider ECMO referral criteria (EOLIA-like): P/F &lt;50 for &gt;3 h; P/F &lt;80 for &gt;6 h; or pH &lt;7.25 with PaCO₂ ≥60 for &gt;6 h — despite optimised ventilation, proning and NMB.',
  src: 'EOLIA'
},
{
  id: 'ccm-ards-007', spec: 'ccm', topic: 'ARDS', difficulty: 'moderate', type: 'case',
  stem: 'A 40-year-old man (height 175 cm, weight 95 kg) with severe pneumonia is intubated for ARDS. P/F is 140. The trainee has set V<sub>T</sub> 600 mL, PEEP 5, RR 16.',
  q: 'What is the most important immediate ventilator change?',
  o: [
    'Reduce tidal volume toward ~420 mL (6 mL/kg PBW)',
    'Increase tidal volume to normalise PaCO₂',
    'Switch to pressure support ventilation',
    'Reduce PEEP to 0'
  ],
  a: 0,
  e: 'PBW for a 175 cm man ≈ 50 + 0.91 × (175 − 152.4) ≈ <strong>71 kg</strong>, so 6 mL/kg ≈ <strong>~420 mL</strong>. The current 600 mL is being set on actual weight (~6.3 mL/kg <em>actual</em> but far too high per PBW), risking volutrauma. Lung-protective V<sub>T</sub> is set on <strong>PBW (height), not actual weight</strong>.',
  pearl: 'Obese patients have normal-sized lungs — their extra weight is not lung. Always compute V<sub>T</sub> from predicted (height-based) body weight, or you will systematically over-distend heavier patients.',
  src: 'ARDSNet'
},
{
  id: 'ccm-ards-008', spec: 'ccm', topic: 'ARDS', difficulty: 'severe', type: 'case',
  stem: 'A 52-year-old woman with COVID-related ARDS is on V<sub>T</sub> 6 mL/kg PBW, PEEP 12, FiO₂ 0.9, RR 30. P/F is 85. Plateau pressure 28, driving pressure 16. She is deeply sedated and already proned for 18 h/day. ABG: pH 7.22.',
  q: 'Which is the most appropriate next escalation?',
  o: [
    'Increase tidal volume to lower PaCO₂',
    'Add neuromuscular blockade and refer/consider VV-ECMO if no improvement',
    'Start inhaled nitric oxide as definitive therapy',
    'Reduce PEEP to improve venous return'
  ],
  a: 1,
  e: 'She has <strong>refractory severe ARDS</strong> despite optimised lung-protective ventilation and proning. Reasonable escalation is <strong>NMB</strong> for dyssynchrony and to reduce driving pressure, plus early <strong>VV-ECMO referral</strong> given P/F &lt;80–85 with acidosis. Raising V<sub>T</sub> violates lung protection; inhaled NO is only a temporising oxygenation adjunct without survival benefit; dropping PEEP would worsen derecruitment/hypoxaemia.',
  pearl: 'Rescue ladder in refractory ARDS: optimise low-V<sub>T</sub> + ΔP → PEEP titration → <strong>proning</strong> → <strong>NMB</strong> → (inhaled pulmonary vasodilator as temporiser) → <strong>VV-ECMO</strong>. Escalate early rather than late.',
  src: 'PROSEVA / EOLIA / Marino'
},

/* ==========================================================
   SHOCK & HAEMODYNAMICS
   ========================================================== */
{
  id: 'ccm-shk-001', spec: 'ccm', topic: 'Shock', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'A "warm" periphery with bounding pulses, low SVR and high cardiac output is most typical of which shock category?',
  o: ['Hypovolaemic', 'Cardiogenic', 'Obstructive', 'Distributive'],
  a: 3,
  e: '<strong>Distributive</strong> shock (sepsis, anaphylaxis, neurogenic) is characterised by <strong>vasodilatation (low SVR)</strong>, warm peripheries and a compensatory high cardiac output. Hypovolaemic, cardiogenic and obstructive shock are typically "cold" with low CO and high SVR.',
  pearl: 'Haemodynamic fingerprints: <table class="mcq-mini"><tr><td></td><td>CO</td><td>SVR</td><td>CVP</td></tr><tr><td>Hypovolaemic</td><td>↓</td><td>↑</td><td>↓</td></tr><tr><td>Cardiogenic</td><td>↓</td><td>↑</td><td>↑</td></tr><tr><td>Obstructive</td><td>↓</td><td>↑</td><td>↑</td></tr><tr><td>Distributive</td><td>↑/↔</td><td>↓</td><td>↓/↔</td></tr></table>',
  src: 'Marino'
},
{
  id: 'ccm-shk-002', spec: 'ccm', topic: 'Shock', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Which of the following is a classic cause of OBSTRUCTIVE shock?',
  o: ['Massive gastrointestinal bleeding', 'Acute myocardial infarction', 'Cardiac tamponade', 'Anaphylaxis'],
  a: 2,
  e: 'Obstructive shock results from a mechanical barrier to filling or ejection: <strong>cardiac tamponade</strong>, <strong>tension pneumothorax</strong> and <strong>massive pulmonary embolism</strong>. GI bleeding is hypovolaemic, MI is cardiogenic, anaphylaxis is distributive.',
  pearl: 'The three "must-not-miss" obstructive causes each have an immediate mechanical fix: tamponade → pericardiocentesis; tension pneumothorax → needle/finger decompression; massive PE → thrombolysis/embolectomy.',
  src: 'Washington Manual'
},
{
  id: 'ccm-shk-003', spec: 'ccm', topic: 'Shock', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Which bedside test best predicts fluid responsiveness in a spontaneously breathing OR arrhythmic patient?',
  o: [
    'Central venous pressure',
    'Pulse pressure variation (PPV)',
    'Passive leg raise with real-time cardiac output/stroke volume measurement',
    'Static IVC diameter'
  ],
  a: 2,
  e: '<strong>Passive leg raise (PLR)</strong> acts as a reversible ~300 mL "auto-bolus"; a rise in stroke volume/CO of ≥10% predicts fluid responsiveness and remains valid in <strong>spontaneous breathing and arrhythmia</strong>. PPV/SVV require a passive, regular-rhythm, mechanically ventilated patient with adequate tidal volume. CVP does not predict responsiveness.',
  pearl: 'PPV/SVV are unreliable when: spontaneous breathing effort, arrhythmia (e.g. AF), low tidal volume (&lt;8 mL/kg), open chest, right-heart failure, or very high PEEP. In those, use PLR + a real CO measure, or a mini-fluid-challenge.',
  src: 'Marino / Irwin & Rippe'
},
{
  id: 'ccm-shk-004', spec: 'ccm', topic: 'Shock', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'A rising serum lactate in shock most commonly reflects:',
  o: [
    'Always tissue hypoxia from anaerobic metabolism only',
    'Tissue hypoperfusion and/or adrenergic-driven (aerobic) glycolysis; a marker of illness severity and a resuscitation target',
    'Hepatic failure exclusively',
    'A benign finding of no prognostic value'
  ],
  a: 1,
  e: 'Lactate in shock reflects <strong>hypoperfusion</strong> but also <strong>β-adrenergic stimulation of aerobic glycolysis</strong>, reduced clearance and other mechanisms. Regardless of mechanism, elevated and <strong>persistently rising</strong> lactate is a powerful prognostic marker, and <strong>lactate clearance</strong> is a validated resuscitation target.',
  pearl: 'Type A lactic acidosis = hypoperfusion/hypoxia. Type B = non-hypoxic (drugs — metformin, adrenaline; liver failure; malignancy; thiamine deficiency). In shock the two often coexist — don\'t assume a lactate is purely perfusion-related.',
  src: 'Marino'
},
{
  id: 'ccm-shk-005', spec: 'ccm', topic: 'Shock', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'In cardiogenic shock complicating acute MI, which statement reflects current evidence (IABP-SHOCK II, CULPRIT-SHOCK)?',
  o: [
    'Routine intra-aortic balloon pump improves mortality',
    'Routine IABP does not improve mortality; culprit-lesion-only PCI is preferred over immediate multivessel PCI',
    'Immediate complete multivessel revascularisation is superior',
    'Thrombolysis is preferred over PCI in cardiogenic shock'
  ],
  a: 1,
  e: '<strong>IABP-SHOCK II</strong> showed no mortality benefit from routine IABP. <strong>CULPRIT-SHOCK</strong> showed <strong>culprit-lesion-only PCI</strong> reduced death/RRT compared with immediate multivessel PCI. Early revascularisation of the culprit remains the cornerstone (SHOCK trial).',
  pearl: 'Mechanical circulatory support in cardiogenic shock (Impella, VA-ECMO) has not shown a clear routine mortality benefit in trials to date and carries vascular/bleeding risk — use selectively in experienced centres.',
  src: 'IABP-SHOCK II / CULPRIT-SHOCK'
},
{
  id: 'ccm-shk-006', spec: 'ccm', topic: 'Shock', difficulty: 'easy', type: 'case',
  stem: 'A 24-year-old man is brought in after a road traffic collision. He is cool and clammy, HR 130, BP 88/64, with a distended, tender abdomen. Neck veins are flat.',
  q: 'The most likely shock category and immediate priority are:',
  o: [
    'Distributive shock — start noradrenaline',
    'Hypovolaemic (haemorrhagic) shock — control bleeding and give blood',
    'Cardiogenic shock — start dobutamine',
    'Obstructive shock — needle decompression'
  ],
  a: 1,
  e: 'Trauma + cool periphery + tachycardia + narrow pulse pressure + <strong>flat neck veins</strong> + tender distended abdomen = <strong>haemorrhagic (hypovolaemic) shock</strong> from intra-abdominal bleeding. Priority is <strong>haemorrhage control</strong> (damage-control surgery/interventional) and <strong>balanced blood-product resuscitation</strong>, not crystalloid-heavy or vasopressor-first strategies.',
  pearl: 'Flat/collapsed neck veins point away from obstructive (tamponade/tension pneumothorax cause <em>distended</em> veins) and toward hypovolaemia. In trauma, treat for bleeding until proven otherwise.',
  src: 'ATLS / Marino'
},
{
  id: 'ccm-shk-007', spec: 'ccm', topic: 'Shock', difficulty: 'moderate', type: 'case',
  stem: 'A 60-year-old woman, 3 days post large anterior STEMI, becomes hypotensive (BP 84/60), with cool peripheries, raised JVP, bibasal crackles and oliguria. Bedside echo shows a severely impaired LV.',
  q: 'Which is the most appropriate initial pharmacological support?',
  o: [
    'Large crystalloid boluses',
    'Noradrenaline ± dobutamine (ino-pressor support) with urgent revascularisation assessment',
    'Pure vasodilator therapy (GTN infusion) alone',
    'Beta-blocker to control heart rate'
  ],
  a: 1,
  e: 'This is <strong>cardiogenic shock</strong> — a failing pump with congestion (raised JVP, crackles). She needs perfusion support with <strong>noradrenaline</strong> (to maintain coronary perfusion pressure) <strong>± dobutamine</strong> for inotropy, plus urgent <strong>revascularisation</strong>. Fluid boluses worsen pulmonary oedema; vasodilators and β-blockers can precipitate collapse in shock.',
  pearl: 'Noradrenaline is generally preferred over adrenaline as the first vasopressor in cardiogenic shock (adrenaline caused more refractory shock/lactataemia in a randomised comparison). Add an inotrope (dobutamine/milrinone) for low output.',
  src: 'Washington Manual / OptimaCC'
},
{
  id: 'ccm-shk-008', spec: 'ccm', topic: 'Shock', difficulty: 'severe', type: 'case',
  stem: 'A 30-year-old woman, 2 days post-partum, suddenly develops severe dyspnoea, syncope, BP 70/40, HR 130 and hypoxaemia. Neck veins are distended; the chest is clear with no wheeze. Bedside echo shows a dilated, poorly contracting right ventricle with septal flattening.',
  q: 'What is the most appropriate immediate management?',
  o: [
    'Aggressive crystalloid loading to fill the right ventricle',
    'Systemic thrombolysis (unless contraindicated) for high-risk pulmonary embolism',
    'Start dobutamine and observe',
    'Immediate needle decompression of the chest'
  ],
  a: 1,
  e: 'Distended neck veins + acute RV dilatation/failure + obstructive shock + clear chest in a high-risk (post-partum) patient = <strong>high-risk (massive) pulmonary embolism</strong>. With haemodynamic instability and no contraindication, <strong>systemic thrombolysis</strong> is indicated (or catheter/surgical embolectomy). <strong>Aggressive fluids can over-distend and worsen a failing RV.</strong> The clear chest with distended veins argues against tension pneumothorax.',
  pearl: 'The failing RV is preload-sensitive but easily over-filled — give <strong>cautious</strong> fluid (≤250–500 mL) only if under-filled, support with noradrenaline, and treat the obstruction. Over-resuscitating the RV bows the septum into the LV and drops cardiac output further.',
  src: 'ESC PE guideline / Marino'
},

/* ==========================================================
   ACID–BASE
   ========================================================== */
{
  id: 'ccm-ab-001', spec: 'ccm', topic: 'Acid–Base', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The anion gap is calculated as:',
  o: ['Na − (Cl + HCO₃)', '(Na + K) − Cl', 'Na − Cl', 'Cl − (Na + HCO₃)'],
  a: 0,
  e: 'Anion gap (AG) = <strong>Na⁺ − (Cl⁻ + HCO₃⁻)</strong>, normal ~8–12 mmol/L. It represents unmeasured anions. Always <strong>correct for albumin</strong>: add ~2.5 to the AG for every 1 g/dL the albumin falls below 4, because albumin is the major unmeasured anion.',
  pearl: 'Albumin correction matters in the ICU: a "normal" AG in a hypoalbuminaemic critically ill patient can hide a significant high-AG acidosis. Corrected AG = measured AG + 2.5 × (4.0 − albumin g/dL).',
  src: 'Marino'
},
{
  id: 'ccm-ab-002', spec: 'ccm', topic: 'Acid–Base', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Winter\'s formula predicts the expected respiratory compensation in a metabolic acidosis. It is:',
  o: [
    'Expected PaCO₂ = (1.5 × HCO₃) + 8 ± 2',
    'Expected PaCO₂ = HCO₃ + 15',
    'Expected PaCO₂ = (0.7 × HCO₃) + 20',
    'Expected HCO₃ = (1.5 × PaCO₂) + 8'
  ],
  a: 0,
  e: 'Winter\'s formula: <strong>expected PaCO₂ = 1.5 × HCO₃ + 8 ± 2</strong>. If the measured PaCO₂ is <em>higher</em> than expected → a concurrent respiratory acidosis (inadequate compensation); if <em>lower</em> → a concurrent respiratory alkalosis.',
  pearl: 'Compensation never fully corrects the pH and never over-corrects. If the "compensation" looks perfect or reversed, suspect a second, mixed disorder.',
  src: 'Marino / Washington Manual'
},
{
  id: 'ccm-ab-003', spec: 'ccm', topic: 'Acid–Base', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Which mnemonic best captures the causes of a HIGH anion gap metabolic acidosis?',
  o: ['GOLD MARK / MUDPILES', 'USED CARP', 'HARDUPS', 'ABCDE'],
  a: 0,
  e: 'High-AG metabolic acidosis: <strong>GOLD MARK</strong> — Glycols (ethylene/propylene), Oxoproline (paracetamol), L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis (the modern update of MUDPILES). Normal-AG (hyperchloraemic) acidosis is captured by <strong>USED CARP</strong>/HARDUPS.',
  pearl: 'Normal-AG (hyperchloraemic) acidosis — USED CARP: Ureteroenterostomy, Small-bowel fistula, Extra chloride (saline), Diarrhoea, Carbonic anhydrase inhibitors, Adrenal insufficiency, Renal tubular acidosis, Pancreatic fistula.',
  src: 'Irwin & Rippe'
},
{
  id: 'ccm-ab-004', spec: 'ccm', topic: 'Acid–Base', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The delta ratio (ΔAG/ΔHCO₃) is used to detect a mixed disorder. A delta ratio >2 suggests:',
  o: [
    'A coexisting normal-AG metabolic acidosis',
    'A pure high-AG metabolic acidosis',
    'A coexisting metabolic alkalosis (or pre-existing high HCO₃)',
    'A respiratory acidosis'
  ],
  a: 2,
  e: 'Delta ratio = ΔAG ÷ ΔHCO₃. <strong>&lt;1</strong> → coexisting normal-AG (hyperchloraemic) acidosis; <strong>1–2</strong> → pure high-AG acidosis; <strong>&gt;2</strong> → the HCO₃ is "higher than it should be" → coexisting <strong>metabolic alkalosis</strong> or a pre-existing high HCO₃ (e.g. chronic respiratory acidosis).',
  pearl: 'Delta ratio quick read: <table class="mcq-mini"><tr><td>&lt;1</td><td>+ normal-AG acidosis</td></tr><tr><td>1–2</td><td>pure high-AG acidosis</td></tr><tr><td>&gt;2</td><td>+ metabolic alkalosis</td></tr></table>',
  src: 'Marino'
},
{
  id: 'ccm-ab-005', spec: 'ccm', topic: 'Acid–Base', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'A raised OSMOLAR gap together with a high-anion-gap metabolic acidosis should immediately raise suspicion of:',
  o: [
    'Diabetic ketoacidosis',
    'Toxic alcohol ingestion (methanol or ethylene glycol)',
    'Uraemic acidosis',
    'Lactic acidosis from sepsis'
  ],
  a: 1,
  e: 'A high <strong>osmolar gap</strong> (measured − calculated osmolality >10) with a high-AG acidosis is the classic signature of <strong>toxic alcohols — methanol or ethylene glycol</strong>. Early, the osmolar gap is high and AG normal; as the parent alcohol is metabolised to acids, the osmolar gap falls and the AG rises. Treat with <strong>fomepizole</strong> (or ethanol) ± haemodialysis.',
  pearl: 'Calculated osmolality = 2×Na + glucose(mmol/L) + urea(mmol/L). Osmolar gap = measured − calculated (normal &lt;10). Ethylene glycol → oxalate crystals + AKI; methanol → visual loss/optic disc changes.',
  src: 'Washington Manual / Marino'
},
{
  id: 'ccm-ab-006', spec: 'ccm', topic: 'Acid–Base', difficulty: 'moderate', type: 'case',
  stem: 'A 26-year-old with type 1 diabetes presents unwell. ABG: pH 7.18, PaCO₂ 22 mmHg, HCO₃ 8 mmol/L. Na 134, Cl 98, glucose 26 mmol/L, ketones positive.',
  q: 'Interpret the primary disorder and the adequacy of compensation.',
  o: [
    'High-AG metabolic acidosis with appropriate respiratory compensation',
    'Normal-AG metabolic acidosis, uncompensated',
    'Respiratory acidosis',
    'Metabolic alkalosis with respiratory compensation'
  ],
  a: 0,
  e: 'AG = 134 − (98 + 8) = <strong>28</strong> (high). Primary <strong>high-AG metabolic acidosis</strong> (DKA). Expected PaCO₂ by Winter\'s = 1.5×8 + 8 = <strong>20 ± 2</strong>; measured 22 is within range → <strong>appropriate respiratory compensation</strong>. Treat DKA with fluids, fixed-rate insulin and potassium replacement.',
  pearl: 'In DKA, check potassium BEFORE starting insulin: hold insulin until <strong>K⁺ ≥3.5 mmol/L</strong>, because insulin drives K⁺ intracellularly and can precipitate fatal hypokalaemia. Total-body K⁺ is always depleted even if the serum level looks normal/high.',
  src: 'JBDS / Marino'
},
{
  id: 'ccm-ab-007', spec: 'ccm', topic: 'Acid–Base', difficulty: 'severe', type: 'case',
  stem: 'A 55-year-old with vomiting and COPD presents. ABG: pH 7.38, PaCO₂ 60 mmHg, HCO₃ 35 mmol/L. Na 140, Cl 88, K 3.0. He also has a lactate of 4 mmol/L from hypotension.',
  q: 'Which combination of disorders best fits this "triple" picture?',
  o: [
    'Pure respiratory acidosis',
    'Metabolic alkalosis + respiratory acidosis + high-AG metabolic acidosis',
    'Pure metabolic alkalosis',
    'Respiratory alkalosis + metabolic acidosis'
  ],
  a: 1,
  e: 'The near-normal pH hides a mixed disorder. AG = 140 − (88 + 35) = <strong>17</strong> (raised — lactic acidosis). HCO₃ 35 with hypochloraemia and vomiting = <strong>metabolic alkalosis</strong>. PaCO₂ 60 in a COPD patient = <strong>respiratory acidosis</strong>. So three processes coexist: metabolic alkalosis (vomiting) + chronic respiratory acidosis (COPD) + high-AG metabolic acidosis (lactate). A normal pH does NOT exclude severe mixed derangement.',
  pearl: 'Always calculate the AG and delta ratio even when the pH is normal — a normal pH is the classic trap for a triple acid–base disorder. Here the delta ratio would be &gt;2, flagging the coexisting alkalosis.',
  src: 'Irwin & Rippe / Marino'
},
{
  id: 'ccm-ab-008', spec: 'ccm', topic: 'Acid–Base', difficulty: 'severe', type: 'case',
  stem: 'A 4-year-old ingested antifreeze 6 hours ago. ABG shows pH 7.10, HCO₃ 6, high AG. Osmolar gap is 28. Urine microscopy shows envelope-shaped crystals; the child is developing oliguria.',
  q: 'Besides supportive care, the most appropriate specific therapy is:',
  o: [
    'Sodium bicarbonate alone',
    'Fomepizole (alcohol dehydrogenase inhibitor) and consideration of haemodialysis',
    'Activated charcoal only',
    'N-acetylcysteine'
  ],
  a: 1,
  e: 'Envelope-shaped (calcium oxalate) crystals + AKI + high osmolar/anion gap = <strong>ethylene glycol</strong> (antifreeze) poisoning. Specific therapy is <strong>fomepizole</strong> (blocks alcohol dehydrogenase, preventing formation of toxic metabolites) — ethanol is the alternative. <strong>Haemodialysis</strong> is indicated for severe acidosis, high levels, or renal failure. Bicarbonate and charcoal are adjuncts only.',
  pearl: 'Fomepizole/ethanol stop <em>further</em> toxic metabolite formation; dialysis <em>removes</em> the parent alcohol and metabolites and corrects acidosis. Start the ADH blocker on suspicion — do not wait for confirmatory levels.',
  src: 'Washington Manual'
}

];
