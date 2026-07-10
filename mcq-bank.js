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
},

/* ==========================================================
   ACUTE KIDNEY INJURY
   ========================================================== */
{
  id: 'ccm-aki-001', spec: 'ccm', topic: 'Acute Kidney Injury', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'By KDIGO criteria, Stage 1 AKI is defined by a rise in serum creatinine of:',
  o: ['≥0.3 mg/dL within 48 h, or 1.5–1.9× baseline within 7 days', '≥1.0 mg/dL within 24 h', '≥3× baseline', 'Any rise with anuria'],
  a: 0,
  e: 'KDIGO Stage 1 = creatinine rise of <strong>≥0.3 mg/dL (26.5 µmol/L) within 48 h</strong>, or <strong>1.5–1.9× baseline</strong> within 7 days, or urine output &lt;0.5 mL/kg/h for 6–12 h. Staging drives monitoring and nephrotoxin review.',
  key: 'AKI staging is by the WORST of either creatinine or urine-output criteria.',
  pearl: 'KDIGO stages: <table class="mcq-mini"><tr><th>Stage</th><th>Creatinine</th><th>Urine</th></tr><tr><td>1</td><td>1.5–1.9× or +0.3</td><td>&lt;0.5 mL/kg/h ×6–12h</td></tr><tr><td>2</td><td>2.0–2.9×</td><td>&lt;0.5 ×≥12h</td></tr><tr><td>3</td><td>≥3× or RRT</td><td>&lt;0.3 ×≥24h / anuria ×12h</td></tr></table>',
  src: 'KDIGO AKI'
},
{
  id: 'ccm-aki-002', spec: 'ccm', topic: 'Acute Kidney Injury', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'Large trials (STARRT-AKI, AKIKI, IDEAL-ICU) on the timing of renal replacement therapy in AKI concluded that:',
  o: [
    'Earlier (pre-emptive) RRT improves survival',
    'A watchful-waiting strategy — starting RRT only for urgent indications — is as good and avoids unnecessary dialysis',
    'RRT should never be delayed beyond 12 h',
    'Continuous RRT is superior to intermittent for survival'
  ],
  a: 1,
  e: 'Across STARRT-AKI, AKIKI and IDEAL-ICU, <strong>accelerated/early RRT did not improve survival</strong> and exposed many patients to dialysis they never needed. The evidence-based approach is to <strong>start RRT for a definite indication</strong> and otherwise watch. CRRT vs IHD does not change mortality (choose by haemodynamics).',
  pearl: 'Urgent RRT indications — <strong>AEIOU</strong>: <strong>A</strong>cidosis (refractory), <strong>E</strong>lectrolytes (refractory hyperkalaemia), <strong>I</strong>ntoxications (dialysable), <strong>O</strong>verload (refractory pulmonary oedema), <strong>U</strong>raemia (encephalopathy, pericarditis).',
  src: 'STARRT-AKI / AKIKI'
},
{
  id: 'ccm-aki-003', spec: 'ccm', topic: 'Acute Kidney Injury', difficulty: 'moderate', type: 'case',
  stem: 'A 68-year-old man is 2 days post emergency laparotomy for perforation. Urine output has fallen to 0.2 mL/kg/h, creatinine has doubled, and he is on noradrenaline for septic shock. Urine microscopy shows muddy-brown granular casts.',
  q: 'The most likely mechanism of his AKI is:',
  o: ['Pre-renal azotaemia', 'Acute tubular necrosis (ischaemic/septic)', 'Post-renal obstruction', 'Acute interstitial nephritis'],
  a: 1,
  e: '<strong>Muddy-brown granular casts</strong> with established oliguria in the setting of sepsis and hypotension point to <strong>acute tubular necrosis</strong>. Pre-renal azotaemia would typically respond to perfusion and show bland sediment with low FeNa; ATN represents the progression when hypoperfusion becomes injury.',
  pearl: 'Urine sediment quick guide: <table class="mcq-mini"><tr><td>Bland / hyaline</td><td>Pre-renal</td></tr><tr><td>Muddy-brown granular casts</td><td>ATN</td></tr><tr><td>WBC / eosinophil casts</td><td>AIN</td></tr><tr><td>RBC casts, dysmorphic RBC</td><td>Glomerulonephritis</td></tr></table>',
  src: 'Marino / Irwin & Rippe'
},

/* ==========================================================
   ELECTROLYTE EMERGENCIES
   ========================================================== */
{
  id: 'ccm-elec-001', spec: 'ccm', topic: 'Electrolytes', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'In severe hyperkalaemia with ECG changes, the FIRST drug to give is:',
  o: ['Insulin with dextrose', 'IV calcium gluconate/chloride', 'Salbutamol nebuliser', 'Sodium bicarbonate'],
  a: 1,
  e: '<strong>IV calcium</strong> is given first — it <strong>stabilises the myocardial membrane</strong> within minutes and protects against arrhythmia. It does not lower potassium; that is the next step (insulin–dextrose, salbutamol to shift; dialysis/binders to remove).',
  key: 'Calcium protects the heart; it does NOT lower the potassium.',
  pearl: 'Hyperkalaemia — 3 steps: <table class="mcq-mini"><tr><td>Stabilise</td><td>IV calcium</td></tr><tr><td>Shift</td><td>Insulin + dextrose, salbutamol (± bicarb if acidotic)</td></tr><tr><td>Remove</td><td>Dialysis, K-binders, (loop diuretic)</td></tr></table>',
  src: 'Washington Manual'
},
{
  id: 'ccm-elec-002', spec: 'ccm', topic: 'Electrolytes', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'To avoid osmotic demyelination syndrome, chronic hyponatraemia should be corrected by no more than:',
  o: ['4 mmol/L in 24 h', '8 mmol/L in 24 h', '15 mmol/L in 24 h', '20 mmol/L in 24 h'],
  a: 1,
  e: 'Correct chronic hyponatraemia by <strong>≤8 mmol/L per 24 h</strong> (some use ≤6 in high-risk patients — alcoholism, malnutrition, hypokalaemia, liver disease). Overrapid correction causes <strong>osmotic demyelination</strong>. For acute symptomatic hyponatraemia (seizures), give <strong>3% saline 100–150 mL boluses</strong> to raise Na ~4–6 mmol/L acutely, then stop.',
  pearl: 'If you overshoot the correction, it can be actively re-lowered with dextrose 5% ± desmopressin ("relowering therapy") to prevent demyelination. Check Na frequently (2-hourly) during active correction.',
  src: 'Marino / Washington Manual'
},
{
  id: 'ccm-elec-003', spec: 'ccm', topic: 'Electrolytes', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'A patient has persistent hypokalaemia despite generous potassium replacement. The most likely reason is:',
  o: ['Coexisting hypomagnesaemia', 'Too little sodium', 'Metabolic alkalosis alone', 'Excess calcium'],
  a: 0,
  e: '<strong>Hypomagnesaemia</strong> causes renal potassium wasting and makes hypokalaemia refractory to replacement — magnesium is a cofactor that maintains intracellular K⁺ and inhibits renal K⁺ loss. <strong>Replace magnesium</strong> and the potassium will follow.',
  key: 'Refractory hypokalaemia? Check and replace the magnesium.',
  pearl: 'The same coupling matters in torsades and refractory arrhythmia — give magnesium even if the serum level looks borderline, because serum Mg poorly reflects total-body stores.',
  src: 'Irwin & Rippe'
},
{
  id: 'ccm-elec-004', spec: 'ccm', topic: 'Electrolytes', difficulty: 'severe', type: 'case',
  stem: 'A 30-year-old woman with anorexia nervosa is admitted and started on enteral feeding. On day 2 she becomes weak and confused with a low phosphate, low potassium and low magnesium; ECG shows a long QT.',
  q: 'The most likely diagnosis is:',
  o: ['Refeeding syndrome', 'Central pontine myelinolysis', 'Wernicke encephalopathy', 'Diabetic ketoacidosis'],
  a: 0,
  e: '<strong>Refeeding syndrome</strong> — reintroducing carbohydrate drives an insulin surge that shifts <strong>phosphate, potassium and magnesium intracellularly</strong>, plus thiamine consumption. The hallmark is <strong>hypophosphataemia</strong> with cardiac and neuromuscular dysfunction. Prevent by starting feed low and slow, replacing electrolytes, and giving thiamine before/with feeding.',
  pearl: 'High-risk features: BMI &lt;16, &gt;10 days minimal intake, low baseline K/PO₄/Mg, alcohol/chemotherapy. Give <strong>thiamine</strong> first, start ~10 kcal/kg/day, monitor phosphate closely for the first week.',
  src: 'NICE / Marino'
},

/* ==========================================================
   MECHANICAL VENTILATION
   ========================================================== */
{
  id: 'ccm-mv-001', spec: 'ccm', topic: 'Mechanical Ventilation', difficulty: 'moderate', type: 'case',
  stem: 'A ventilated COPD patient becomes hypotensive. The ventilator shows the expiratory flow does not return to zero before the next breath. Plateau pressure is hard to interpret.',
  q: 'The most likely cause of the hypotension is:',
  o: ['Tension pneumothorax', 'Dynamic hyperinflation (auto-PEEP / breath stacking)', 'Sepsis', 'Pulmonary embolism'],
  a: 1,
  e: 'Expiratory flow not reaching zero = incomplete emptying = <strong>dynamic hyperinflation with auto-PEEP</strong>. The rising intrathoracic pressure impedes venous return and drops cardiac output. Management: <strong>disconnect briefly to let the chest deflate</strong>, then reduce respiratory rate / tidal volume and increase expiratory time (lower I:E), treat bronchospasm.',
  key: 'Sudden hypotension in an obstructed ventilated patient → think auto-PEEP; try a disconnection test.',
  pearl: 'To reduce auto-PEEP: ↓ respiratory rate, ↓ tidal volume, ↑ inspiratory flow (shorter inspiration → longer expiration), treat the obstruction. Applied PEEP just below the auto-PEEP level can reduce the trigger workload in spontaneously breathing patients.',
  src: 'Marino'
},
{
  id: 'ccm-mv-002', spec: 'ccm', topic: 'Mechanical Ventilation', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The best-validated daily test of readiness to wean from mechanical ventilation is:',
  o: ['A low rapid shallow breathing index during a spontaneous breathing trial', 'A negative fluid balance', 'Normal chest X-ray', 'Minute ventilation <5 L/min'],
  a: 0,
  e: 'A <strong>spontaneous breathing trial</strong> (T-piece or low pressure support/CPAP for 30–120 min) is the key test; a <strong>rapid shallow breathing index (RR/V<sub>T</sub>) &lt;105</strong> predicts successful extubation. Combine with a daily <strong>spontaneous awakening trial</strong> (sedation hold) — paired SAT+SBT shortens ventilation (ABC trial).',
  pearl: 'Before extubation also confirm: adequate cough, manageable secretions, airway patency (cuff-leak test if laryngeal oedema is a concern), and a resolving underlying cause — not just SBT tolerance.',
  src: 'Washington Manual / Irwin & Rippe'
},
{
  id: 'ccm-mv-003', spec: 'ccm', topic: 'Mechanical Ventilation', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'A sudden rise in PEAK airway pressure with an UNCHANGED plateau pressure indicates a problem with:',
  o: ['Lung/chest wall compliance', 'Airway resistance (e.g. secretions, bronchospasm, kinked tube)', 'PEEP setting', 'The ventilator circuit only'],
  a: 1,
  e: 'Peak pressure reflects <strong>resistance + compliance</strong>; plateau reflects <strong>compliance</strong> alone. A high peak with a <strong>normal plateau</strong> localises the problem to <strong>airway resistance</strong> — secretions, bronchospasm, biting, or a kinked/blocked tube. If <strong>both</strong> peak and plateau rise, it is a compliance problem (pneumothorax, oedema, atelectasis, right mainstem intubation, abdominal distension).',
  pearl: 'Peak↑ / Plateau normal = resistance. Peak↑ / Plateau↑ = compliance. This one split diagnoses most acute ventilator alarms at the bedside.',
  src: 'Marino'
},

/* ==========================================================
   CARDIAC ARREST / ACLS
   ========================================================== */
{
  id: 'ccm-acls-001', spec: 'ccm', topic: 'Cardiac Arrest', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'During a shockable cardiac arrest (VF/pVT), adrenaline 1 mg is first given:',
  o: ['Before the first shock', 'After the second shock', 'After the fifth shock', 'Only if asystole develops'],
  a: 1,
  e: 'In shockable rhythms, <strong>adrenaline 1 mg is given after the second shock</strong> (then every 3–5 min), and <strong>amiodarone 300 mg after the third shock</strong> (further 150 mg after the fifth). In non-shockable rhythms (PEA/asystole), give adrenaline <strong>as soon as possible</strong>.',
  key: 'Shockable: adrenaline after 2nd shock, amiodarone after 3rd. Non-shockable: adrenaline immediately.',
  pearl: 'High-quality CPR is the priority: rate 100–120/min, depth 5–6 cm, full recoil, minimise interruptions, change compressor every 2 min, avoid hyperventilation (~10/min with an advanced airway).',
  src: 'ACLS / Resuscitation guidelines'
},
{
  id: 'ccm-acls-002', spec: 'ccm', topic: 'Cardiac Arrest', difficulty: 'moderate', type: 'case',
  stem: 'A 55-year-old man arrests in PEA. CPR is ongoing. He was dialysis-dependent and missed his last two sessions; his last potassium was 7.2 mmol/L.',
  q: 'The most important reversible cause to treat immediately is:',
  o: ['Hypovolaemia', 'Hyperkalaemia', 'Hypothermia', 'Tension pneumothorax'],
  a: 1,
  e: 'A missed-dialysis PEA arrest screams <strong>hyperkalaemia</strong>. Give <strong>IV calcium</strong> immediately (membrane stabilisation) plus insulin–dextrose and salbutamol, consider bicarbonate, and arrange emergency dialysis. Reversible causes are the <strong>4 Hs and 4 Ts</strong>.',
  pearl: 'The Hs & Ts: <table class="mcq-mini"><tr><td>Hypoxia</td><td>Thrombosis (coronary/PE)</td></tr><tr><td>Hypovolaemia</td><td>Tamponade</td></tr><tr><td>Hypo/Hyperkalaemia (&amp; metabolic)</td><td>Tension pneumothorax</td></tr><tr><td>Hypothermia</td><td>Toxins</td></tr></table>',
  src: 'ACLS / Resuscitation guidelines'
},
{
  id: 'ccm-acls-003', spec: 'ccm', topic: 'Cardiac Arrest', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Current post-cardiac-arrest temperature management (TTM2, 2021) recommends:',
  o: [
    'Mandatory cooling to 33 °C for all comatose survivors',
    'Actively preventing fever (target ≤37.5 °C), with targeted hypothermia no longer mandatory',
    'No temperature control',
    'Warming to 38.5 °C to improve perfusion'
  ],
  a: 1,
  e: 'The <strong>TTM2</strong> trial found no benefit of hypothermia (33 °C) over normothermia; guidelines now emphasise <strong>actively preventing fever</strong> (keeping temperature ≤37.5–37.7 °C) rather than routine deep cooling. Avoiding hyperthermia remains important for the injured brain.',
  pearl: 'Post-ROSC bundle: treat the cause (urgent PCI if STEMI), targeted oxygenation (SpO₂ 94–98%, avoid hyperoxia) and normocapnia, MAP to maintain perfusion, glucose control, and delayed multimodal neuroprognostication (≥72 h, off sedation).',
  src: 'TTM2 / post-arrest guidelines'
},

/* ==========================================================
   STATUS EPILEPTICUS
   ========================================================== */
{
  id: 'ccm-se-001', spec: 'ccm', topic: 'Status Epilepticus', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The first-line drug for convulsive status epilepticus is:',
  o: ['IV phenytoin', 'A benzodiazepine (IV lorazepam / IM midazolam)', 'IV levetiracetam', 'IV valproate'],
  a: 1,
  e: 'First-line is a <strong>benzodiazepine</strong> — IV lorazepam 4 mg (or IM midazolam 10 mg if no IV access; diazepam PR in children). If seizures continue after adequate benzodiazepine dosing, move to a <strong>second-line</strong> agent.',
  key: 'Benzodiazepine first — and give an ADEQUATE dose; under-dosing is the commonest error.',
  pearl: 'ESETT showed <strong>levetiracetam, fosphenytoin and valproate are equivalent</strong> as second-line agents (~50% each terminate seizures). Choose by contraindications/availability. Refractory SE → intubate and use anaesthetic infusions (midazolam/propofol/ketamine).',
  src: 'ESETT / Neurocritical Care'
},
{
  id: 'ccm-se-002', spec: 'ccm', topic: 'Status Epilepticus', difficulty: 'moderate', type: 'case',
  stem: 'A patient with convulsive status has received two adequate doses of lorazepam and a full loading dose of levetiracetam but continues to seize at 40 minutes.',
  q: 'The next appropriate step is:',
  o: [
    'A third dose of benzodiazepine',
    'Intubation and a continuous anaesthetic infusion (e.g. midazolam or propofol) for refractory status',
    'Oral carbamazepine',
    'Wait and observe'
  ],
  a: 1,
  e: 'This is <strong>refractory status epilepticus</strong> (failure of a benzodiazepine + one second-line agent). The next step is <strong>intubation and a continuous IV anaesthetic infusion</strong> — midazolam, propofol, or ketamine — with continuous EEG monitoring, titrated to seizure suppression or burst-suppression. Repeated benzodiazepines just add respiratory depression without controlling refractory SE.',
  pearl: 'Definitions: <table class="mcq-mini"><tr><td>Status epilepticus</td><td>≥5 min continuous / recurrent without recovery</td></tr><tr><td>Refractory</td><td>Fails benzo + 1 second-line</td></tr><tr><td>Super-refractory</td><td>Continues ≥24 h on/after anaesthetics</td></tr></table>',
  src: 'Neurocritical Care Society'
},

/* ==========================================================
   EMERGENCY MEDICINE — ANAPHYLAXIS
   ========================================================== */
{
  id: 'em-ana-001', spec: 'em', topic: 'Anaphylaxis', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The first-line, life-saving treatment in anaphylaxis is:',
  o: ['IV hydrocortisone', 'IM adrenaline 0.5 mg into the anterolateral thigh', 'IV chlorphenamine', 'Nebulised salbutamol'],
  a: 1,
  e: '<strong>IM adrenaline 0.5 mg</strong> (0.5 mL of 1:1000) into the anterolateral thigh, repeated every 5 minutes as needed, is the single life-saving intervention. Antihistamines and steroids are <strong>adjuncts</strong> and must never delay or replace adrenaline. IV adrenaline is reserved for refractory cases in a monitored setting.',
  key: 'Adrenaline is IM into the thigh — not subcutaneous, not IV first-line.',
  pearl: 'IM adrenaline by age (1:1000): <table class="mcq-mini"><tr><td>Adult / &gt;12 y</td><td>500 µg</td></tr><tr><td>6–12 y</td><td>300 µg</td></tr><tr><td>6 mo–6 y</td><td>150 µg</td></tr></table>Lie the patient flat; sitting a hypotensive patient up can be fatal.',
  src: 'Resuscitation Council'
},
{
  id: 'em-ana-002', spec: 'em', topic: 'Anaphylaxis', difficulty: 'moderate', type: 'case',
  stem: 'A 40-year-old woman with anaphylaxis after an antibiotic remains hypotensive despite three doses of IM adrenaline and fluids. She takes a beta-blocker for hypertension.',
  q: 'Which additional drug is most likely to help?',
  o: ['Glucagon', 'More chlorphenamine', 'Oral prednisolone', 'Adenosine'],
  a: 0,
  e: 'In a patient on a <strong>beta-blocker</strong> who is refractory to adrenaline, <strong>glucagon</strong> (1–2 mg IV) bypasses the β-receptor to increase cardiac inotropy/chronotropy via cyclic AMP. She also needs a monitored <strong>adrenaline infusion</strong>. Antihistamines/steroids do not treat the shock.',
  pearl: 'Refractory anaphylaxis = persisting after ≥2 appropriate IM adrenaline doses. Escalate to an adrenaline infusion, aggressive fluids, and consider glucagon (β-blocked), vasopressin, or methylene blue for vasoplegia.',
  src: 'Resuscitation Council'
},

/* ==========================================================
   EMERGENCY MEDICINE — ACUTE STROKE
   ========================================================== */
{
  id: 'em-cva-001', spec: 'em', topic: 'Stroke', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'IV thrombolysis for acute ischaemic stroke is generally given within what window of last-known-well?',
  o: ['3 hours only', '4.5 hours', '9 hours for all', '24 hours'],
  a: 1,
  e: 'IV thrombolysis (alteplase or tenecteplase) is standard within <strong>4.5 hours</strong> of last-known-well, after excluding haemorrhage on CT and checking contraindications. Selected patients with favourable perfusion imaging (e.g. wake-up strokes) may be treated later, but 4.5 h is the core answer.',
  key: 'Thrombolysis window = 4.5 h; thrombectomy window extends to 24 h in selected LVO.',
  pearl: 'Mechanical <strong>thrombectomy</strong> for large-vessel occlusion is beneficial up to <strong>24 h</strong> in selected patients (DAWN, DEFUSE-3) using perfusion mismatch. Time is brain — door-to-needle should be &lt;60 min.',
  src: 'AHA/ASA stroke guideline'
},
{
  id: 'em-cva-002', spec: 'em', topic: 'Stroke', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Before IV thrombolysis in acute ischaemic stroke, blood pressure must be lowered to below:',
  o: ['185/110 mmHg', '220/120 mmHg', '160/90 mmHg', '140/90 mmHg'],
  a: 0,
  e: 'For <strong>thrombolysis</strong> candidates, BP must be <strong>&lt;185/110 mmHg</strong> before treatment and kept &lt;180/105 for 24 h afterwards. In patients <strong>not</strong> receiving thrombolysis, permissive hypertension is allowed and BP is only treated if &gt;220/120 (or end-organ threat) — lowering it too aggressively worsens the ischaemic penumbra.',
  pearl: 'The two BP thresholds catch people out: <strong>&lt;185/110</strong> if you are going to lyse; otherwise leave it unless <strong>&gt;220/120</strong>. Use labetalol or nicardipine for controlled reduction.',
  src: 'AHA/ASA stroke guideline'
},
{
  id: 'em-cva-003', spec: 'em', topic: 'Stroke', difficulty: 'severe', type: 'case',
  stem: 'A 72-year-old presents 2 h after sudden dense right hemiplegia and aphasia (NIHSS 18). CT shows no haemorrhage and no established infarct; CT angiography shows a left MCA (M1) occlusion. He is not on anticoagulants and has no contraindications.',
  q: 'The optimal management is:',
  o: [
    'IV thrombolysis alone',
    'IV thrombolysis plus referral for mechanical thrombectomy',
    'Aspirin alone',
    'Immediate decompressive craniectomy'
  ],
  a: 1,
  e: 'A large-vessel (M1) occlusion within the window with a salvageable brain warrants <strong>IV thrombolysis PLUS mechanical thrombectomy</strong> — thrombectomy dramatically improves outcomes in proximal LVO (HERMES meta-analysis), and thrombolysis is given if eligible without delaying transfer. Aspirin alone under-treats an LVO; craniectomy is for later malignant oedema.',
  pearl: 'Thrombectomy benefits proximal anterior-circulation LVO (ICA, M1) with a small core and good collaterals. Don\'t withhold or delay thrombolysis while arranging thrombectomy in eligible patients ("drip and ship").',
  src: 'HERMES / AHA-ASA'
},

/* ==========================================================
   EMERGENCY MEDICINE — ACUTE CORONARY SYNDROME
   ========================================================== */
{
  id: 'em-acs-001', spec: 'em', topic: 'Acute Coronary Syndrome', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'For STEMI, the preferred reperfusion strategy if it can be delivered within 120 minutes of first medical contact is:',
  o: ['Fibrinolysis', 'Primary percutaneous coronary intervention (PCI)', 'CABG', 'Medical therapy alone'],
  a: 1,
  e: '<strong>Primary PCI</strong> is preferred when achievable within <strong>120 min</strong> of first medical contact (ideally &lt;90 min door-to-balloon). If PCI cannot be delivered in time, give <strong>fibrinolysis within 30 min</strong> (door-to-needle) and transfer for angiography (pharmaco-invasive strategy).',
  key: 'PCI if ≤120 min available; otherwise lyse now and transfer.',
  pearl: 'STEMI diagnosis: ST-elevation ≥1 mm in ≥2 contiguous limb leads or ≥2 mm in chest leads (≥1.5 mm women in V2–V3), or new LBBB with ischaemia. New posterior MI (tall R + ST-depression V1–V3) also needs reperfusion.',
  src: 'ESC / ACC-AHA ACS'
},
{
  id: 'em-acs-002', spec: 'em', topic: 'Acute Coronary Syndrome', difficulty: 'moderate', type: 'case',
  stem: 'A 60-year-old man has 40 minutes of chest pain. ECG shows 2 mm ST-elevation in II, III and aVF. BP is 88/54, and he becomes profoundly hypotensive after a dose of sublingual GTN.',
  q: 'The hypotension after GTN suggests which associated problem?',
  o: ['Anterior STEMI', 'Right ventricular infarction', 'Aortic dissection', 'Pulmonary embolism'],
  a: 1,
  e: 'An <strong>inferior STEMI</strong> (II, III, aVF) with GTN-sensitive hypotension indicates <strong>right ventricular infarction</strong> — the RV is preload-dependent, so nitrates (venodilators) cause dramatic hypotension. Confirm with <strong>right-sided leads (V4R)</strong>. Treat with <strong>fluids</strong> and avoid nitrates/opioids that drop preload; reperfuse.',
  key: 'Inferior STEMI + hypotension on GTN = RV infarct → give fluids, avoid nitrates.',
  pearl: 'Always do right-sided leads (V4R) in inferior STEMI. RV infarct is preload-dependent: support with fluids and reperfusion; if still shocked, add an inotrope — but fix the preload first.',
  src: 'ESC / ACC-AHA ACS'
},

/* ==========================================================
   EMERGENCY MEDICINE — TOXICOLOGY
   ========================================================== */
{
  id: 'em-tox-001', spec: 'em', topic: 'Poisoning', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The specific antidote for paracetamol (acetaminophen) poisoning is:',
  o: ['Naloxone', 'N-acetylcysteine', 'Flumazenil', 'Fomepizole'],
  a: 1,
  e: '<strong>N-acetylcysteine</strong> replenishes glutathione and detoxifies the reactive metabolite NAPQI. It is most effective within <strong>8 hours</strong> of ingestion but is still given late in established toxicity. Dose against the <strong>paracetamol nomogram</strong> (timed level ≥4 h post-ingestion) or empirically in staggered/unknown-time or high-risk ingestions.',
  pearl: 'Give NAC without waiting for a level if: presentation &gt;8 h after a significant overdose, staggered ingestion, or unknown time. King\'s College criteria (pH &lt;7.3, or the triad of INR &gt;6.5 + creatinine &gt;300 + grade III–IV encephalopathy) flag the need for transplant referral.',
  src: 'Toxicology / Washington Manual'
},
{
  id: 'em-tox-002', spec: 'em', topic: 'Poisoning', difficulty: 'moderate', type: 'case',
  stem: 'A farmer is brought in drowsy with pinpoint pupils, profuse salivation, bronchorrhoea, wheeze, bradycardia and muscle fasciculations. He smells of solvent.',
  q: 'The antidote of primary importance is:',
  o: ['Atropine', 'Naloxone', 'Physostigmine', 'Glucagon'],
  a: 0,
  e: 'This is a <strong>cholinergic toxidrome</strong> from <strong>organophosphate</strong> (anticholinesterase) poisoning. <strong>Atropine</strong> (doubling doses until secretions/bronchorrhoea dry — the key endpoint) is life-saving. Add <strong>pralidoxime</strong> to reactivate acetylcholinesterase for nicotinic features, and provide airway/ventilatory support.',
  key: 'Titrate atropine to drying of secretions (chest), not to pupils or heart rate.',
  pearl: 'Cholinergic features — <strong>DUMBELS</strong>: Defecation, Urination, Miosis, Bradycardia/Bronchorrhoea, Emesis, Lacrimation, Salivation. Bronchorrhoea is the killer — that\'s your atropine endpoint.',
  src: 'Toxicology'
},
{
  id: 'em-tox-003', spec: 'em', topic: 'Poisoning', difficulty: 'severe', type: 'case',
  stem: 'A 22-year-old presents 90 minutes after a tricyclic antidepressant overdose. She is drowsy and hypotensive; ECG shows a wide QRS of 140 ms with a tall R wave in aVR.',
  q: 'The most appropriate immediate treatment is:',
  o: ['IV sodium bicarbonate', 'IV calcium', 'Flumazenil', 'IV amiodarone'],
  a: 0,
  e: 'TCA cardiotoxicity is sodium-channel blockade → <strong>QRS widening</strong> (and the tall terminal R in aVR), arrhythmia and hypotension. <strong>IV sodium bicarbonate</strong> is the treatment — it provides a sodium load and alkalinisation that overcome the channel block. <strong>Avoid class Ia/Ic/III antiarrhythmics</strong> (e.g. amiodarone) which worsen conduction; flumazenil can precipitate seizures.',
  key: 'Wide QRS in TCA overdose → sodium bicarbonate. Target QRS narrowing.',
  pearl: 'QRS &gt;100 ms predicts seizures; &gt;160 ms predicts ventricular arrhythmia. Give bicarbonate boluses titrated to QRS narrowing and a blood pH ~7.45–7.55. Hypertonic saline is an alternative sodium source.',
  src: 'Toxicology / Washington Manual'
},
{
  id: 'em-tox-004', spec: 'em', topic: 'Poisoning', difficulty: 'severe', type: 'case',
  stem: 'A 50-year-old presents after an overdose of his heart medication with refractory bradycardia and hypotension unresponsive to atropine and fluids. He takes verapamil and metoprolol.',
  q: 'Which therapy is specifically indicated for calcium-channel-blocker / beta-blocker toxicity?',
  o: [
    'High-dose insulin euglycaemic therapy (± calcium, glucagon, vasopressors)',
    'Sodium bicarbonate',
    'N-acetylcysteine',
    'Activated charcoal alone'
  ],
  a: 0,
  e: 'In severe CCB/BB toxicity, <strong>high-dose insulin euglycaemic therapy (HIET)</strong> improves myocardial contractility and is a cornerstone, alongside <strong>IV calcium</strong>, <strong>glucagon</strong>, and vasopressors; refractory cases may need pacing or VA-ECMO. Insulin supports the poisoned myocardium\'s shift to carbohydrate metabolism.',
  pearl: 'HIET: bolus 1 U/kg regular insulin then 0.5–1 U/kg/h (titrated up), with dextrose to maintain euglycaemia and close potassium monitoring. Don\'t be timid with the insulin dose — under-dosing is the usual error.',
  src: 'Toxicology'
},

/* ==========================================================
   EMERGENCY MEDICINE — TRAUMA
   ========================================================== */
{
  id: 'em-trauma-001', spec: 'em', topic: 'Trauma', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In major trauma haemorrhage, tranexamic acid reduces mortality only when given within:',
  o: ['1 hour', '3 hours', '6 hours', '12 hours'],
  a: 1,
  e: '<strong>CRASH-2</strong> showed tranexamic acid reduces death from bleeding when given <strong>within 3 hours</strong> of injury (1 g over 10 min, then 1 g over 8 h). Given <strong>later than 3 h it may increase</strong> mortality from bleeding. The same early-treatment principle holds for post-partum haemorrhage (WOMAN trial).',
  key: 'TXA within 3 hours of injury — earlier is better; late TXA can harm.',
  pearl: 'Damage-control resuscitation: permissive hypotension until surgical control (except in TBI), balanced product ratios (~1:1:1 RBC:FFP:platelets), early TXA, avoid the lethal triad (hypothermia, acidosis, coagulopathy).',
  src: 'CRASH-2 / ATLS'
},
{
  id: 'em-trauma-002', spec: 'em', topic: 'Trauma', difficulty: 'severe', type: 'case',
  stem: 'A 25-year-old with a stab wound to the chest is hypotensive with distended neck veins, muffled heart sounds and a narrow pulse pressure. The trachea is central and breath sounds are equal bilaterally.',
  q: 'The most likely diagnosis and immediate intervention are:',
  o: [
    'Tension pneumothorax — needle decompression',
    'Cardiac tamponade — pericardiocentesis / resuscitative thoracotomy',
    'Massive haemothorax — chest drain',
    'Hypovolaemia — fluids alone'
  ],
  a: 1,
  e: '<strong>Beck\'s triad</strong> — hypotension, distended neck veins, muffled heart sounds — with a <strong>central trachea and equal breath sounds</strong> (arguing against tension pneumothorax) after penetrating chest trauma indicates <strong>cardiac tamponade</strong>. Immediate treatment is <strong>pericardial decompression</strong> — pericardiocentesis or, in the arresting/peri-arrest patient, resuscitative thoracotomy. Confirm rapidly with FAST.',
  key: 'Beck\'s triad + central trachea = tamponade (not tension pneumothorax).',
  pearl: 'Tension pneumothorax vs tamponade both cause obstructive shock with distended neck veins. The discriminators: tension pneumothorax → tracheal deviation, absent breath sounds, hyper-resonance; tamponade → equal breath sounds, muffled heart sounds, FAST-positive pericardial fluid.',
  src: 'ATLS'
},

/* ==========================================================
   HYPERGLYCAEMIC EMERGENCIES (DKA / HHS)
   ========================================================== */
{
  id: 'ccm-dka-001', spec: 'ccm', topic: 'Hyperglycaemic Emergencies', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Which feature most reliably distinguishes hyperosmolar hyperglycaemic state (HHS) from diabetic ketoacidosis (DKA)?',
  o: [
    'HHS has marked hyperglycaemia and hyperosmolality with little/no ketoacidosis',
    'HHS always has a lower glucose than DKA',
    'DKA occurs only in type 2 diabetes',
    'HHS has a high anion gap by definition'
  ],
  a: 0,
  e: 'HHS is characterised by <strong>profound hyperglycaemia (often &gt;33 mmol/L), high osmolality (&gt;320 mOsm/kg) and minimal ketosis/acidosis</strong> (enough insulin to suppress ketogenesis but not hyperglycaemia). DKA has ketoacidosis with a high anion gap. HHS develops slowly, carries higher mortality, and needs cautious rehydration.',
  key: 'HHS = hyperosmolar + minimal ketones; DKA = ketoacidotic. Overlap exists.',
  pearl: 'Effective osmolality = 2 × Na + glucose (mmol/L). HHS fluid deficit is large (~8–10 L) — rehydrate gradually to avoid cerebral oedema; insulin needs are lower than DKA and given after fluids.',
  src: 'JBDS / Washington Manual'
},
{
  id: 'ccm-dka-002', spec: 'ccm', topic: 'Hyperglycaemic Emergencies', difficulty: 'severe', type: 'case',
  stem: 'An 18-year-old with DKA is treated with fluids and insulin. Twelve hours in, after initial improvement, he develops headache, falling GCS and bradycardia with rising blood pressure.',
  q: 'The most likely complication is:',
  o: ['Cerebral oedema', 'Hypoglycaemia', 'Hypokalaemia', 'Aspiration pneumonia'],
  a: 0,
  e: 'A deteriorating conscious level with the <strong>Cushing response</strong> (bradycardia + hypertension) after initial DKA improvement, particularly in a young patient, is <strong>cerebral oedema</strong> — a rare but often fatal complication linked to overrapid osmotic shifts. Treat immediately with <strong>hypertonic saline or mannitol</strong>, reduce fluid rate, and get imaging/neuro input — do not delay treatment for the scan.',
  key: 'New drowsiness/headache in a child or young adult with DKA = cerebral oedema until proven otherwise.',
  pearl: 'Risk factors: younger age, new-onset diabetes, severe acidosis/hypocapnia, high urea, rapid fall in osmolality. Prevention: avoid excessive early fluid, correct glucose/osmolality gradually.',
  src: 'ISPAD / Marino'
},

/* ==========================================================
   ENDOCRINE EMERGENCIES
   ========================================================== */
{
  id: 'ccm-endo-001', spec: 'ccm', topic: 'Endocrine Emergencies', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In thyroid storm, the drug sequence for blocking thyroid hormone is important because:',
  o: [
    'Iodine (Lugol\'s) must be given at least 1 hour AFTER a thionamide, to avoid fuelling hormone synthesis',
    'Iodine should always be given first',
    'Beta-blockers are contraindicated',
    'Steroids have no role'
  ],
  a: 0,
  e: 'Give the <strong>thionamide (propylthiouracil or carbimazole) first</strong>, then <strong>iodine (Lugol\'s/potassium iodide) at least 1 hour later</strong> — giving iodine first could provide substrate and transiently increase hormone synthesis (Jod-Basedow). Add a <strong>beta-blocker</strong> (propranolol) for adrenergic symptoms and <strong>hydrocortisone</strong> (reduces T4→T3 conversion and treats relative adrenal insufficiency).',
  key: 'Thyroid storm order: thionamide → (1 h later) iodine → β-blocker → steroid.',
  pearl: 'PTU is preferred over carbimazole in storm because it also blocks peripheral T4→T3 conversion. Treat the precipitant (infection, surgery, DKA) and support (cooling, fluids).',
  src: 'Washington Manual / Marino'
},
{
  id: 'ccm-endo-002', spec: 'ccm', topic: 'Endocrine Emergencies', difficulty: 'moderate', type: 'case',
  stem: 'A patient on long-term steroids presents with an intercurrent infection, hypotension unresponsive to fluids and vasopressors, hyponatraemia and hypoglycaemia.',
  q: 'The most appropriate immediate treatment is:',
  o: ['IV hydrocortisone', 'IV levothyroxine', 'IV insulin', 'Broad-spectrum antibiotics alone'],
  a: 0,
  e: 'This is <strong>adrenal (Addisonian) crisis</strong> — precipitated by stress in a steroid-dependent patient. Give <strong>IV hydrocortisone 100 mg immediately</strong> (then 200 mg/24 h), aggressive <strong>fluid resuscitation</strong> with glucose, and treat the precipitant. Do not wait for a random cortisol; treat on suspicion. Vasopressors are often ineffective until steroid is given.',
  key: 'Refractory shock + hyponatraemia + hypoglycaemia in a steroid user = adrenal crisis → hydrocortisone now.',
  pearl: 'Give hydrocortisone before levothyroxine if both adrenal and thyroid failure are suspected (e.g. hypopituitarism) — thyroxine first can precipitate crisis by raising metabolic demand for cortisol.',
  src: 'Washington Manual'
},

/* ==========================================================
   VENTILATOR-ASSOCIATED PNEUMONIA
   ========================================================== */
{
  id: 'ccm-vap-001', spec: 'ccm', topic: 'Pneumonia / VAP', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Ventilator-associated pneumonia is defined as pneumonia developing after:',
  o: ['≥48 hours of mechanical ventilation', 'Any period of intubation', '≥12 hours of ventilation', '≥7 days of ICU stay'],
  a: 0,
  e: 'VAP is pneumonia arising <strong>≥48 hours after endotracheal intubation</strong>. Diagnosis combines new/progressive infiltrate with clinical signs (fever, leucocytosis, purulent secretions, worsening oxygenation) and respiratory cultures. Empirical therapy is guided by local antibiograms and risk factors for multidrug-resistant organisms.',
  pearl: 'Prevention bundle: head-up 30–45°, daily sedation holds + SBT, oral care (chlorhexidine debated), subglottic suction ETTs, DVT/stress-ulcer prophylaxis, avoid unnecessary ventilator circuit changes.',
  src: 'ATS/IDSA / Washington Manual'
},

/* ==========================================================
   SEDATION, ANALGESIA & DELIRIUM
   ========================================================== */
{
  id: 'ccm-sed-001', spec: 'ccm', topic: 'Sedation & Delirium', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Per PADIS guidelines, the recommended approach to ICU sedation is:',
  o: [
    'Deep sedation for all ventilated patients',
    'Light, goal-directed (analgesia-first) sedation with daily awakening, targeting RASS 0 to −2',
    'Routine benzodiazepine infusions',
    'Continuous neuromuscular blockade'
  ],
  a: 1,
  e: 'PADIS recommends an <strong>analgesia-first, light sedation</strong> strategy — target a <strong>RASS of 0 to −2</strong>, use daily <strong>spontaneous awakening trials</strong>, and prefer <strong>propofol or dexmedetomidine over benzodiazepines</strong> (which increase delirium). Lighter sedation shortens ventilation and ICU stay.',
  key: 'Analgesia first, light sedation, avoid benzodiazepines, screen for delirium.',
  pearl: 'Assess delirium with <strong>CAM-ICU</strong> or ICDSC. Management is mostly non-pharmacological (reorientation, sleep, mobilisation, remove deliriogenic drugs); antipsychotics do not shorten delirium (MIND-USA) and are reserved for distressing agitation.',
  src: 'PADIS / Marino'
},
{
  id: 'ccm-sed-002', spec: 'ccm', topic: 'Sedation & Delirium', difficulty: 'severe', type: 'case',
  stem: 'A ventilated patient on a high-dose propofol infusion for 3 days develops metabolic acidosis, rising lactate, hypertriglyceridaemia, rhabdomyolysis and new arrhythmia with bradycardia.',
  q: 'The most likely diagnosis is:',
  o: ['Propofol infusion syndrome', 'Serotonin syndrome', 'Malignant hyperthermia', 'Neuroleptic malignant syndrome'],
  a: 0,
  e: '<strong>Propofol-related infusion syndrome (PRIS)</strong> — associated with high-dose (&gt;4 mg/kg/h) or prolonged (&gt;48 h) propofol — presents with <strong>metabolic acidosis, lactataemia, rhabdomyolysis, hypertriglyceridaemia, arrhythmia and cardiac failure</strong>. Treatment is to <strong>stop propofol immediately</strong>, provide cardiovascular/renal support, and switch to an alternative sedative.',
  key: 'High-dose/prolonged propofol + lactic acidosis + rhabdo + bradyarrhythmia = PRIS → stop propofol.',
  pearl: 'Limit propofol to &lt;4 mg/kg/h where possible and reassess beyond 48 h; monitor triglycerides, CK, lactate and pH in prolonged infusions. Children are at higher risk.',
  src: 'Marino / Irwin & Rippe'
},

/* ==========================================================
   TRANSFUSION MEDICINE
   ========================================================== */
{
  id: 'ccm-tx-001', spec: 'ccm', topic: 'Transfusion', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'For most stable, non-bleeding critically ill adults, the evidence-based haemoglobin transfusion threshold is:',
  o: ['&lt;70 g/L', '&lt;100 g/L', '&lt;90 g/L', '&lt;120 g/L'],
  a: 0,
  e: 'A <strong>restrictive threshold of &lt;70 g/L</strong> (TRICC, TRISS) is at least as good as a liberal strategy for most stable patients, with a higher threshold (&lt;80 g/L) for active <strong>acute coronary syndrome</strong> or cardiac surgery. Transfuse single units and reassess between them.',
  key: 'Restrictive Hb &lt;70 g/L for most; &lt;80 for ACS/cardiac surgery.',
  pearl: 'Restrictive transfusion reduces exposure to transfusion reactions and TACO/TRALI without worsening outcomes. Reassess symptoms and Hb between single units rather than ordering two upfront.',
  src: 'TRICC / TRISS'
},
{
  id: 'ccm-tx-002', spec: 'ccm', topic: 'Transfusion', difficulty: 'moderate', type: 'case',
  stem: 'One hour into a red-cell transfusion, a patient develops acute dyspnoea, hypoxaemia and bilateral pulmonary infiltrates. There is no fever, hypertension, or raised JVP, and it settles over 48–72 h.',
  q: 'The most likely transfusion reaction is:',
  o: ['Transfusion-related acute lung injury (TRALI)', 'Transfusion-associated circulatory overload (TACO)', 'Acute haemolytic reaction', 'Anaphylaxis'],
  a: 0,
  e: '<strong>TRALI</strong> — acute non-cardiogenic pulmonary oedema within 6 h of transfusion, with hypoxaemia and bilateral infiltrates but <strong>normal filling pressures</strong>, typically resolving in 48–96 h. Management is <strong>supportive/lung-protective ventilation</strong>. It contrasts with <strong>TACO</strong> (volume overload — hypertension, raised JVP, responds to diuresis).',
  key: 'TRALI = non-cardiogenic (normal JVP/BP, transient); TACO = overload (raised JVP/BP, diuretic-responsive).',
  pearl: 'TRALI vs TACO: <table class="mcq-mini"><tr><th></th><th>TRALI</th><th>TACO</th></tr><tr><td>BP</td><td>↓/normal</td><td>↑</td></tr><tr><td>JVP/filling</td><td>Normal</td><td>Raised</td></tr><tr><td>Diuretic</td><td>No help</td><td>Helps</td></tr><tr><td>Course</td><td>Resolves 48–96 h</td><td>Rapid with diuresis</td></tr></table>',
  src: 'Washington Manual'
},

/* ==========================================================
   BRAIN DEATH / NEUROCRITICAL CARE
   ========================================================== */
{
  id: 'ccm-bd-001', spec: 'ccm', topic: 'Brain Death', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'A mandatory prerequisite BEFORE performing brain-death (brainstem death) testing is:',
  o: [
    'Exclusion of reversible confounders (drugs, hypothermia, severe metabolic/endocrine derangement) with a known, irreversible catastrophic brain injury',
    'A positive EEG',
    'Family consent to the diagnosis',
    'Absence of any spinal reflexes'
  ],
  a: 0,
  e: 'Before clinical brain-death testing you must confirm a <strong>known, irreversible cause of catastrophic brain injury</strong> and <strong>exclude confounders</strong>: sedatives/neuromuscular blockers, hypothermia (temperature must be adequate), and severe electrolyte/acid–base/endocrine disturbance. <strong>Spinal reflexes may persist</strong> and do not exclude brain death. EEG is not required where clinical criteria are met.',
  pearl: 'Brainstem testing checks absent brainstem reflexes (pupillary, corneal, oculovestibular/caloric, gag, cough) and a formal <strong>apnoea test</strong> (PaCO₂ rise above threshold with no respiratory effort). Two appropriately qualified doctors, testing performed as per local statute.',
  src: 'Brain-death codes of practice / Marino'
},

/* ==========================================================
   SODIUM / SIADH
   ========================================================== */
{
  id: 'ccm-na-001', spec: 'ccm', topic: 'Electrolytes', difficulty: 'severe', type: 'case',
  stem: 'A patient with a subarachnoid haemorrhage develops hyponatraemia. She is clinically hypovolaemic with a high urine output and a rising haematocrit; urine sodium is high.',
  q: 'The most likely diagnosis and treatment are:',
  o: [
    'Cerebral salt wasting — treat with salt and volume replacement',
    'SIADH — treat with fluid restriction',
    'Psychogenic polydipsia — restrict water',
    'Diabetes insipidus — give desmopressin'
  ],
  a: 0,
  e: 'The distinguishing feature is <strong>volume status</strong>. This patient is <strong>hypovolaemic</strong> (rising haematocrit, high urine output) with renal sodium loss — <strong>cerebral salt wasting</strong>, seen after brain injury/SAH. Treat with <strong>sodium and volume replacement</strong> (isotonic/hypertonic saline). <strong>SIADH</strong> looks similar biochemically but is <strong>euvolaemic</strong> and is treated with fluid restriction — so fluid-restricting a CSW patient would be harmful.',
  key: 'CSW = hypovolaemic (replace salt/volume); SIADH = euvolaemic (restrict fluid). Assess volume status.',
  pearl: 'In SAH, fluid-restricting a wrongly-diagnosed SIADH patient who actually has CSW worsens cerebral perfusion and vasospasm risk — when in doubt after brain injury, favour maintaining euvolaemia with saline.',
  src: 'Neurocritical Care / Marino'
},

/* ==========================================================
   EMERGENCY MEDICINE — UPPER GI BLEED
   ========================================================== */
{
  id: 'em-gib-001', spec: 'em', topic: 'GI Bleeding', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In suspected acute variceal upper GI bleeding, the recommended vasoactive drug to start early is:',
  o: ['Terlipressin (or octreotide/somatostatin)', 'Adrenaline infusion', 'Dobutamine', 'Noradrenaline only'],
  a: 0,
  e: 'For suspected <strong>variceal</strong> bleeding, start a <strong>splanchnic vasoconstrictor — terlipressin</strong> (or octreotide/somatostatin) early, plus <strong>prophylactic antibiotics</strong> (reduce infection and mortality in cirrhosis), and arrange <strong>endoscopy within 24 h</strong> for band ligation. Restrictive transfusion (Hb target ~70 g/L) improves outcomes in variceal bleeding.',
  key: 'Variceal bleed: terlipressin + antibiotics + early endoscopy; restrictive transfusion.',
  pearl: 'The Glasgow-Blatchford score triages non-variceal UGIB: a score of 0–1 identifies very-low-risk patients who may avoid admission/urgent endoscopy. For peptic ulcer bleeding, use IV PPI and endoscopic haemostasis.',
  src: 'Baveno / NICE UGIB'
},
{
  id: 'em-gib-002', spec: 'em', topic: 'GI Bleeding', difficulty: 'moderate', type: 'case',
  stem: 'A 60-year-old with known cirrhosis presents with large-volume haematemesis, HR 120 and BP 86/50. Haemoglobin is 68 g/L.',
  q: 'Which transfusion strategy is best supported by evidence in this setting?',
  o: [
    'Restrictive transfusion targeting Hb ~70–80 g/L',
    'Liberal transfusion to Hb ≥100 g/L',
    'No transfusion regardless of Hb',
    'Transfuse to Hb ≥120 g/L'
  ],
  a: 0,
  e: 'In acute UGIB — including variceal bleeding in cirrhosis — a <strong>restrictive strategy (target Hb ~70–80 g/L)</strong> improves survival and reduces rebleeding compared with liberal transfusion (Villanueva 2013), because over-transfusion raises portal pressure. Resuscitate to perfusion, not to a high Hb.',
  key: 'Even in active variceal bleeding, over-transfusion worsens outcomes — target ~70–80 g/L.',
  pearl: 'Over-transfusion increases portal venous pressure and rebleeding in varices. Combine restrictive red cells with terlipressin, antibiotics, correction of coagulopathy as needed, and timely endoscopy.',
  src: 'Villanueva NEJM / Baveno'
},

/* ==========================================================
   EMERGENCY MEDICINE — HYPERTENSIVE EMERGENCY
   ========================================================== */
{
  id: 'em-htn-001', spec: 'em', topic: 'Hypertensive Emergency', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In most hypertensive emergencies (except a few specific scenarios), the initial blood-pressure goal is to reduce mean arterial pressure by no more than:',
  o: ['~10–20% in the first hour, then further over 24 h', '50% within 30 minutes', 'To normal (120/80) immediately', 'By 5 mmHg per day'],
  a: 0,
  e: 'Reduce MAP by <strong>~10–20% in the first hour</strong>, then a further ~5–15% over the next 23 h. Dropping pressure too fast risks <strong>watershed ischaemia</strong> (cerebral, coronary, renal) because autoregulation is shifted. <strong>Exceptions requiring rapid, larger reduction</strong>: aortic dissection (SBP &lt;120 quickly), severe pre-eclampsia/eclampsia, and some acute pulmonary oedema.',
  key: 'Gradual reduction (~10–20% first hour) — except aortic dissection, eclampsia, flash pulmonary oedema.',
  pearl: 'Aortic dissection needs rapid control of <strong>both</strong> BP and heart rate — a <strong>beta-blocker first</strong> (target HR &lt;60) before a vasodilator, to reduce aortic wall shear stress (dP/dt); giving a vasodilator alone causes reflex tachycardia and worsens the tear.',
  src: 'ACC/AHA / Washington Manual'
},

/* ==========================================================
   EMERGENCY MEDICINE — ENVIRONMENTAL / TROPICAL
   ========================================================== */
{
  id: 'em-env-001', spec: 'em', topic: 'Environmental Emergencies', difficulty: 'moderate', type: 'case',
  stem: 'A labourer collapses during a heatwave. Core temperature is 41.5 °C, he is confused, hot and dry, with tachycardia and hypotension.',
  q: 'The single most important immediate treatment is:',
  o: ['Rapid active cooling to below 39 °C', 'IV paracetamol', 'IV dantrolene', 'Broad-spectrum antibiotics'],
  a: 0,
  e: 'This is <strong>exertional heat stroke</strong> (core &gt;40 °C + CNS dysfunction). The priority is <strong>rapid active cooling</strong> — cold-water immersion is most effective — aiming to bring the core below ~39 °C quickly, alongside airway/circulation support. <strong>Antipyretics do not work</strong> (the set-point is normal) and dantrolene is not effective for heat stroke.',
  key: 'Heat stroke: cool first and fast (cold-water immersion); antipyretics and dantrolene do not help.',
  pearl: 'Watch for complications: rhabdomyolysis, AKI, DIC, hepatic injury, ARDS. "Cool first, transport second" — minutes of hyperthermia drive multi-organ injury. Stop cooling around 38.5–39 °C to avoid overshoot.',
  src: 'Wilderness/EM guidelines'
},
{
  id: 'em-env-002', spec: 'em', topic: 'Environmental Emergencies', difficulty: 'severe', type: 'case',
  stem: 'A farmer in India is bitten by a snake and develops ptosis, difficulty swallowing and progressive weakness, with a 20-minute whole-blood clotting test showing non-clotting blood.',
  q: 'The definitive treatment is:',
  o: ['Polyvalent anti-snake venom', 'Prophylactic fasciotomy', 'A tight arterial tourniquet', 'Incision and suction of the bite'],
  a: 0,
  e: 'Neurotoxic features (ptosis, bulbar weakness) plus <strong>incoagulable blood (positive 20-minute WBCT)</strong> indicate significant systemic envenomation. The definitive treatment is <strong>polyvalent anti-snake venom</strong>, titrated to reversal of coagulopathy/neurotoxicity, with airway support and neostigmine/atropine for neurotoxic (e.g. cobra) bites. <strong>Tourniquets, incision and suction are harmful</strong> and outdated; use pressure immobilisation and rapid transfer.',
  key: 'Systemic envenomation (neurotoxicity or non-clotting blood) → anti-snake venom; avoid tourniquet/incision.',
  pearl: 'The <strong>20-minute whole-blood clotting test</strong> is a simple bedside marker of viper (haemotoxic) envenomation in resource-limited settings — non-clotting blood at 20 min indicates coagulopathy and the need for antivenom.',
  src: 'WHO / Indian NSV guidelines'
},

/* ==========================================================
   EMERGENCY MEDICINE — CNS INFECTION
   ========================================================== */
{
  id: 'em-cns-001', spec: 'em', topic: 'CNS Infections', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In suspected acute bacterial meningitis, when should antibiotics be given relative to lumbar puncture and CT?',
  o: [
    'Give antibiotics immediately; do not delay for CT/LP if there is any hold-up',
    'Always complete CT and LP before any antibiotics',
    'Only after CSF culture results',
    'Antibiotics are not needed if the patient is alert'
  ],
  a: 0,
  e: 'Antibiotics (± dexamethasone) must be given <strong>as early as possible and should not be delayed</strong> for imaging or LP when there is any hold-up — every hour matters. Perform LP promptly when safe; obtain <strong>CT first only if</strong> there are features suggesting raised ICP/mass (focal deficit, papilloedema, reduced GCS, seizures, immunocompromise). Give <strong>dexamethasone with or just before</strong> the first antibiotic dose.',
  key: 'Never delay antibiotics for the scan or LP in suspected bacterial meningitis.',
  pearl: 'Empirical therapy: a third-generation cephalosporin (ceftriaxone) ± amoxicillin for Listeria cover in &gt;50 y/immunocompromised/pregnant; add vancomycin where resistant pneumococcus is a concern. Dexamethasone reduces neurological sequelae in pneumococcal meningitis.',
  src: 'IDSA / Washington Manual'
}

];
