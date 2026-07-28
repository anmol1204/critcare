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
},

/* ==========================================================
   ANAESTHESIA — PHARMACOLOGY, AIRWAY, REGIONAL, EQUIPMENT
   (Batch A1 — triangulated from Miller's, Morgan & Mikhail's
   Clinical Anesthesiology, and Stoelting's Pharmacology)
   ========================================================== */
{
  id: 'anaes-mac-001', spec: 'anaes', topic: 'Inhalational Agents', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Minimum alveolar concentration (MAC) of a volatile agent is defined as the alveolar concentration at which:',
  o: [
    '50% of patients are rendered unconscious',
    '50% of patients do not move in response to a standard surgical (skin) incision',
    '95% of patients tolerate laryngoscopy without movement',
    'The BIS falls below 40'
  ],
  a: 1,
  e: 'MAC is the alveolar concentration preventing movement to a standardised surgical stimulus in <strong>50%</strong> of subjects — a measure of potency at the level of the spinal cord. MAC-awake (~0.3–0.4 MAC) relates to consciousness; MAC-BAR (~1.5 MAC) blocks the autonomic response.',
  key: 'MAC = no movement to incision in 50% — a spinal-cord end-point, not a cortical (awareness) one.',
  pearl: 'MAC is <strong>additive</strong> (0.5 MAC sevoflurane + 0.5 MAC N₂O ≈ 1 MAC). MAC is <em>decreased</em> by age, hypothermia, opioids, benzodiazepines, pregnancy, acute alcohol, hyponatraemia; <em>increased</em> by hyperthermia, chronic alcohol, and catecholamines/sympathomimetics.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-mac-002', spec: 'anaes', topic: 'Inhalational Agents', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The "second gas effect" during inhalational induction is best explained by:',
  o: [
    'Rapid uptake of a high-volume first gas (N₂O) concentrating the remaining alveolar gases and augmenting inspired inflow',
    'Direct chemical potentiation of the volatile agent by nitrous oxide',
    'Increased cardiac output speeding agent delivery',
    'A fall in functional residual capacity during induction'
  ],
  a: 0,
  e: 'When a large volume of nitrous oxide is rapidly absorbed from the alveolus, the concentration of a concurrently administered "second gas" (e.g. sevoflurane) rises, and the volume void augments tracheal inflow of fresh gas — both accelerating the rise in second-gas alveolar concentration. It is a consequence of the <strong>concentration effect</strong> applied to a companion agent.',
  pearl: 'The same rapid N₂O flux <em>out of</em> blood at the end of a case dilutes alveolar O₂ → <strong>diffusion hypoxia</strong>. Give 100% O₂ for a few minutes after discontinuing nitrous.',
  src: "Morgan & Mikhail's Clinical Anesthesiology"
},
{
  id: 'anaes-n2o-001', spec: 'anaes', topic: 'Inhalational Agents', difficulty: 'moderate', type: 'case',
  stem: 'A patient with a pneumothorax (not yet drained) requires urgent anaesthesia.',
  q: 'Which agent is specifically contraindicated, and why?',
  o: [
    'Sevoflurane — it is a bronchodilator',
    'Nitrous oxide — it diffuses into and expands air-filled spaces',
    'Propofol — it causes apnoea',
    'Isoflurane — it is pungent'
  ],
  a: 1,
  e: 'Nitrous oxide is ~34× more soluble than nitrogen, so it enters closed air-filled spaces faster than nitrogen leaves, <strong>expanding</strong> them. Avoid in pneumothorax, bowel obstruction, air embolism, pneumocephalus, middle-ear/vitreoretinal surgery, and with intraocular gas bubbles.',
  key: 'N₂O expands any closed gas space — pneumothorax is an absolute contraindication.',
  pearl: 'Chronic N₂O exposure inactivates vitamin B₁₂ (irreversibly oxidises cobalt), impairing methionine synthase → megaloblastic change and subacute combined degeneration.',
  src: "Stoelting's Pharmacology & Physiology"
},
{
  id: 'anaes-last-001', spec: 'anaes', topic: 'Local Anaesthetics', difficulty: 'severe', type: 'case',
  stem: 'Two minutes after an axillary brachial plexus block with 30 mL 0.5% bupivacaine, a patient becomes agitated, then has a seizure followed by a broad-complex bradyarrhythmia and cardiac arrest.',
  q: 'The single most important specific therapy is:',
  o: [
    'High-dose adrenaline boluses (1 mg) as per standard ACLS',
    'Intravenous 20% lipid emulsion (Intralipid) 1.5 mL/kg bolus then infusion',
    'Immediate synchronised cardioversion',
    'Sodium bicarbonate 1 mmol/kg'
  ],
  a: 1,
  e: 'This is <strong>local anaesthetic systemic toxicity (LAST)</strong>. Give <strong>20% lipid emulsion</strong> 1.5 mL/kg lean body weight over ~1 min, then 0.25 mL/kg/min, re-bolusing for persistent instability (the "lipid sink" plus metabolic effects). Manage the airway, stop injection, control seizures with a benzodiazepine, and use <strong>reduced</strong> adrenaline doses (≤1 µg/kg) — large boluses worsen outcome. Avoid vasopressin, calcium-channel/β-blockers, and lidocaine.',
  key: 'LAST → lipid emulsion first-line; adrenaline in small doses only; prolonged resuscitation (consider ECMO).',
  pearl: 'Bupivacaine is the most cardiotoxic LA (avid, slow-dissociating Na-channel block → refractory re-entrant arrhythmia). Levobupivacaine and ropivacaine are less cardiotoxic. Max bupivacaine ~2 mg/kg (2–3 with adrenaline).',
  src: 'ASRA LAST Checklist 2020'
},
{
  id: 'anaes-la-001', spec: 'anaes', topic: 'Local Anaesthetics', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The maximum recommended dose of lidocaine (lignocaine) WITH adrenaline for infiltration is approximately:',
  o: [
    '3 mg/kg',
    '4.5 mg/kg',
    '7 mg/kg',
    '10 mg/kg'
  ],
  a: 2,
  e: 'Plain lidocaine ≈ <strong>3–4.5 mg/kg</strong>; <strong>with adrenaline ≈ 7 mg/kg</strong> because vasoconstriction slows systemic absorption and prolongs the block. Adrenaline (1:200,000 = 5 µg/mL) also serves as an intravascular marker.',
  key: 'Lidocaine: 3–4.5 mg/kg plain, 7 mg/kg with adrenaline.',
  pearl: 'Local anaesthetics block the voltage-gated <strong>Na⁺ channel</strong> from the intracellular side; the un-ionised base crosses the membrane, then the ionised cation binds. Inflamed/acidic tissue keeps more drug ionised → poorer block.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-la-002', spec: 'anaes', topic: 'Local Anaesthetics', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Which statement about the metabolism of local anaesthetics is correct?',
  o: [
    'Esters (e.g. procaine, tetracaine) are metabolised by plasma cholinesterase; amides by hepatic microsomal enzymes',
    'Amides are metabolised by plasma cholinesterase; esters by the liver',
    'Both classes are cleared unchanged by the kidney',
    'Esters are hepatically metabolised and rarely cause allergy'
  ],
  a: 0,
  e: 'Ester LAs (one "i" in the name — procaine, chloroprocaine, tetracaine, cocaine, benzocaine) are hydrolysed by <strong>plasma cholinesterase</strong> to PABA, which underlies their higher allergy risk. Amides (two "i"s — lidocaine, bupivacaine, ropivacaine, prilocaine) undergo <strong>hepatic</strong> metabolism.',
  pearl: 'Prilocaine and benzocaine can cause <strong>methaemoglobinaemia</strong> (metabolite o-toluidine) — treat with methylene blue.',
  src: "Stoelting's Pharmacology"
},
{
  id: 'anaes-sux-001', spec: 'anaes', topic: 'Neuromuscular Blockers', difficulty: 'moderate', type: 'case',
  stem: 'A patient with a 3-week-old major burn and denervation injury is given suxamethonium for a rapid-sequence induction.',
  q: 'The most feared immediate complication is:',
  o: [
    'Prolonged apnoea from pseudocholinesterase deficiency',
    'Life-threatening hyperkalaemic cardiac arrest',
    'Malignant hyperthermia',
    'Anaphylaxis'
  ],
  a: 1,
  e: 'Up-regulation of extrajunctional (immature/α7) acetylcholine receptors after burns, denervation, prolonged immobility, spinal cord injury or severe sepsis causes a massive <strong>K⁺ efflux</strong> with suxamethonium → hyperkalaemic arrest. Risk is significant from ~24–72 h after injury and persists for months.',
  key: 'Avoid suxamethonium after ~24 h in burns, denervation, SCI, prolonged immobilisation — hyperkalaemic arrest.',
  pearl: 'Other suxamethonium hazards: bradycardia (esp. repeat doses/children — pre-treat atropine), raised ICP/IOP/intragastric pressure, myalgia, MH trigger, and prolonged block in pseudocholinesterase deficiency.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-sux-002', spec: 'anaes', topic: 'Neuromuscular Blockers', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'A patient remains apnoeic and paralysed for 2 hours after a single dose of suxamethonium. A dibucaine number of 20 is reported. This indicates:',
  o: [
    'Normal pseudocholinesterase',
    'Homozygous atypical pseudocholinesterase (markedly prolonged block)',
    'Malignant hyperthermia susceptibility',
    'Phase I block only'
  ],
  a: 1,
  e: 'The <strong>dibucaine number</strong> is the % inhibition of pseudocholinesterase by dibucaine. Normal (homozygous typical) ≈ <strong>80</strong>; heterozygous ≈ 40–60 (mildly prolonged); <strong>homozygous atypical ≈ 20</strong> with block lasting hours. It reflects enzyme <em>quality</em>, not quantity. Management is continued ventilation and sedation until spontaneous recovery.',
  key: 'Dibucaine number 80 = normal, ~20 = homozygous atypical → prolonged suxamethonium apnoea.',
  pearl: 'Suxamethonium is also broken down by pseudocholinesterase, so deficiency (liver disease, pregnancy, atypical genes) prolongs it. Mivacurium (a non-depolariser) is likewise affected.',
  src: "Stoelting's Pharmacology"
},
{
  id: 'anaes-nmb-001', spec: 'anaes', topic: 'Neuromuscular Blockers', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Before tracheal extubation, adequate recovery from a non-depolarising block is best confirmed by a train-of-four (TOF) ratio of:',
  o: [
    '≥ 0.4',
    '≥ 0.7',
    '≥ 0.9',
    'Any detectable fourth twitch'
  ],
  a: 2,
  e: 'A TOF ratio (T4/T1) of <strong>≥0.9</strong> is required to exclude clinically important residual paralysis; below this, pharyngeal function and the hypoxic ventilatory response are impaired, raising aspiration/hypoxia risk. Clinical tests (5-s head lift) are insensitive.',
  key: 'Safe extubation after NMB requires TOF ratio ≥0.9 (quantitative monitoring).',
  pearl: 'Reversal: neostigmine (with glycopyrrolate to block muscarinic effects) works only once some recovery is present (≥2–4 twitches). <strong>Sugammadex</strong> encapsulates rocuronium/vecuronium and reverses even profound block rapidly.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-mh-001', spec: 'anaes', topic: 'Malignant Hyperthermia', difficulty: 'severe', type: 'case',
  stem: 'During sevoflurane anaesthesia, a young patient develops a rising end-tidal CO₂ despite increased ventilation, masseter/generalised rigidity, tachycardia, and a rapidly rising temperature.',
  q: 'The specific pharmacological treatment is:',
  o: [
    'Dantrolene 2.5 mg/kg IV, repeated to effect',
    'Intravenous beta-blocker',
    'Active cooling alone',
    'Sodium bicarbonate'
  ],
  a: 0,
  e: 'This is <strong>malignant hyperthermia</strong> — a ryanodine-receptor (RYR1) channelopathy causing uncontrolled sarcoplasmic Ca²⁺ release. Stop triggers (volatiles, suxamethonium), call for help, hyperventilate with 100% O₂, and give <strong>dantrolene 2.5 mg/kg</strong> IV repeated every ~5 min (to ~10 mg/kg) until controlled. Treat hyperkalaemia, acidosis, arrhythmias, and hyperthermia; watch for rhabdomyolysis.',
  key: 'MH = ↑↑EtCO₂ + rigidity + hyperthermia → dantrolene + stop all triggers.',
  pearl: 'Earliest and most sensitive sign is an <strong>unexplained rising EtCO₂</strong>. Safe agents: propofol, opioids, benzodiazepines, nitrous, and all non-depolarising relaxants. Confirmatory test: caffeine–halothane contracture test.',
  src: 'MHAUS Guidelines'
},
{
  id: 'anaes-prop-001', spec: 'anaes', topic: 'IV Induction Agents', difficulty: 'moderate', type: 'case',
  stem: 'A child in PICU on a prolonged high-dose propofol infusion develops metabolic acidosis, hyperkalaemia, rhabdomyolysis, lipaemic serum and a Brugada-like ECG with cardiac failure.',
  q: 'The most likely diagnosis is:',
  o: [
    'Propofol infusion syndrome (PRIS)',
    'Malignant hyperthermia',
    'Neuroleptic malignant syndrome',
    'Local anaesthetic systemic toxicity'
  ],
  a: 0,
  e: '<strong>Propofol infusion syndrome</strong> is associated with high-dose (>4 mg/kg/h) prolonged (>48 h) infusions, especially in children and the critically ill. Impaired mitochondrial fatty-acid oxidation → lactic acidosis, rhabdomyolysis, hyperkalaemia, lipaemia, arrhythmia and cardiac failure. Treatment: stop propofol, supportive care, haemodialysis/ECMO for refractory cases.',
  key: 'PRIS: high-dose/prolonged propofol → lactic acidosis, rhabdo, hyperK, cardiac failure.',
  pearl: 'Propofol also causes pain on injection, dose-dependent hypotension and apnoea, and lacks analgesic properties; its antiemetic effect is a clinical bonus.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-etom-001', spec: 'anaes', topic: 'IV Induction Agents', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Etomidate is often chosen for induction in the haemodynamically unstable patient, but its notable adverse effect is:',
  o: [
    'Profound histamine release',
    'Adrenocortical suppression (11β-hydroxylase inhibition)',
    'Malignant hyperthermia',
    'Prolonged seizures'
  ],
  a: 1,
  e: 'Etomidate provides <strong>cardiovascular stability</strong> (minimal effect on BP/contractility) but reversibly inhibits <strong>11β-hydroxylase</strong>, suppressing cortisol synthesis — a concern in sepsis, where even a single dose transiently lowers cortisol. It also causes myoclonus, pain on injection, and a high incidence of PONV.',
  key: 'Etomidate = cardiostable induction but adrenal suppression (11β-hydroxylase).',
  pearl: 'Ketamine is the alternative "haemodynamically friendly" induction agent — it maintains BP via sympathetic stimulation, provides analgesia and bronchodilation, but raises secretions and can cause emergence delirium.',
  src: "Stoelting's Pharmacology"
},
{
  id: 'anaes-ket-001', spec: 'anaes', topic: 'IV Induction Agents', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Ketamine produces "dissociative anaesthesia" primarily by antagonism at which receptor?',
  o: [
    'GABA-A receptor',
    'NMDA (glutamate) receptor',
    'Mu-opioid receptor',
    'Alpha-2 adrenoceptor'
  ],
  a: 1,
  e: 'Ketamine is a non-competitive <strong>NMDA-receptor antagonist</strong>, producing a cataleptic, dissociated state with analgesia and amnesia while preserving airway reflexes and respiratory drive. It is a bronchodilator and sympathomimetic (useful in shock/asthma).',
  key: 'Ketamine = NMDA antagonist; sympathomimetic, bronchodilator, preserves respiration.',
  pearl: 'Because it raises sympathetic tone, ketamine increases HR/BP; historically avoided where a rise in ICP is undesirable, though modern data are reassuring when ventilation is controlled. Emergence phenomena are attenuated by benzodiazepines.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-cshl-001', spec: 'anaes', topic: 'IV Induction Agents', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'Which drug has an essentially constant, very short context-sensitive half-time regardless of infusion duration, making it ideal for prolonged TIVA?',
  o: [
    'Fentanyl',
    'Thiopentone',
    'Remifentanil',
    'Morphine'
  ],
  a: 2,
  e: '<strong>Remifentanil</strong> is cleared by non-specific plasma/tissue <strong>esterases</strong>, independent of hepatic/renal function, so its context-sensitive half-time stays ~3–4 min even after long infusions. Fentanyl, by contrast, accumulates and its context-sensitive half-time lengthens markedly with prolonged infusion.',
  key: 'Remifentanil: organ-independent esterase clearance → flat, short context-sensitive half-time.',
  pearl: 'Context-sensitive half-time = time for plasma concentration to fall 50% after stopping an infusion designed to hold a steady level; it depends on redistribution + clearance, not just elimination half-life.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-air-001', spec: 'anaes', topic: 'Airway Management', difficulty: 'moderate', type: 'case',
  stem: 'Immediately after extubation, a patient develops complete airway obstruction with paradoxical chest/abdominal movement and no air entry; SpO₂ is falling.',
  q: 'After 100% O₂ and jaw thrust/CPAP, the next drug step for persistent laryngospasm is:',
  o: [
    'Suxamethonium (with the ability to ventilate/intubate)',
    'A large dose of a non-depolarising relaxant',
    'Intravenous adrenaline',
    'Nebulised salbutamol'
  ],
  a: 0,
  e: 'Laryngospasm is treated stepwise: remove stimulus, 100% O₂, jaw thrust with firm CPAP and pressure at "Larson\'s point", deepen anaesthesia (propofol). If it persists with desaturation, give <strong>suxamethonium</strong> (0.5–1 mg/kg IV, or IM/IO if no IV) to break the spasm, then ventilate.',
  key: 'Refractory laryngospasm with desaturation → suxamethonium.',
  pearl: 'Negative-pressure pulmonary oedema can follow forceful inspiration against a closed glottis — watch for pink frothy sputum and desaturation after the spasm breaks.',
  src: 'DAS Guidelines'
},
{
  id: 'anaes-air-002', spec: 'anaes', topic: 'Airway Management', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In the standard preoperative fasting guideline ("2-4-6-8"), the minimum fasting time for clear fluids and for a light meal, respectively, is:',
  o: [
    '2 h and 6 h',
    '1 h and 4 h',
    '4 h and 8 h',
    '2 h and 8 h'
  ],
  a: 0,
  e: 'Standard guidance: clear fluids <strong>2 h</strong>, breast milk 4 h, infant formula/light meal 6 h, and a fatty/fried or meat meal 8 h. Encouraging clear fluids up to 2 h improves comfort without raising aspiration risk.',
  key: 'Fasting: clear fluids 2 h · breast milk 4 h · formula/light meal 6 h · heavy/fatty meal 8 h.',
  pearl: 'Mendelson syndrome = chemical aspiration pneumonitis; classic risk if gastric volume >25 mL and pH <2.5. RSI with cricoid pressure is used when aspiration risk is high (e.g. full stomach, pregnancy, obstruction).',
  src: 'ASA Fasting Guidelines'
},
{
  id: 'anaes-air-003', spec: 'anaes', topic: 'Airway Management', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The Mallampati classification assesses the airway by inspecting the:',
  o: [
    'Thyromental distance in finger-breadths',
    'Visibility of oropharyngeal structures (faucial pillars, soft palate, uvula) with mouth maximally open',
    'Range of atlanto-occipital extension',
    'Inter-incisor gap'
  ],
  a: 1,
  e: 'The modified Mallampati score grades the pharyngeal structures seen on maximal mouth opening (tongue protruded, no phonation): Class I (pillars, soft palate, uvula) → Class IV (hard palate only). Higher classes predict difficult laryngoscopy but it is only one component.',
  key: 'Mallampati grades visible pharyngeal structures; higher class ⇒ potentially harder laryngoscopy.',
  pearl: 'Combine predictors (LEMON / "3-3-2" rule, thyromental distance, mouth opening, neck mobility, prior difficult airway) — no single test is reliable. Cormack–Lehane grades the actual laryngoscopic view.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-spin-001', spec: 'anaes', topic: 'Regional Anaesthesia', difficulty: 'moderate', type: 'case',
  stem: 'Five minutes after a subarachnoid (spinal) block for a caesarean, the patient develops hypotension and bradycardia.',
  q: 'The mechanism of the bradycardia when the block reaches a high thoracic level is:',
  o: [
    'Blockade of the cardioaccelerator sympathetic fibres (T1–T4)',
    'Direct vagal stimulation by the local anaesthetic',
    'Beta-receptor down-regulation',
    'Hypoglycaemia'
  ],
  a: 0,
  e: 'High spinal blockade removes sympathetic outflow: vasodilation below the block causes hypotension, and involvement of the <strong>cardiac accelerator fibres (T1–T4)</strong> plus reduced venous return (Bezold–Jarisch reflex) causes bradycardia. Treat with fluids, vasopressors (phenylephrine/ephedrine), atropine for bradycardia, and left-uterine displacement in pregnancy.',
  key: 'High spinal → sympathectomy: hypotension + bradycardia (T1–T4 cardioaccelerator block).',
  pearl: 'A <strong>total spinal</strong> (block ascends to cervical levels) causes apnoea, profound hypotension and unconsciousness — support airway/ventilation and circulation until it recedes.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-pdph-001', spec: 'anaes', topic: 'Regional Anaesthesia', difficulty: 'moderate', type: 'case',
  stem: 'Twenty-four hours after a spinal anaesthetic, a young woman has a severe fronto-occipital headache that worsens on sitting/standing and improves on lying flat, with neck stiffness and photophobia.',
  q: 'The definitive treatment for a severe, persistent case is:',
  o: [
    'Epidural blood patch',
    'Broad-spectrum antibiotics',
    'Therapeutic lumbar puncture',
    'High-dose steroids'
  ],
  a: 0,
  e: 'This is a <strong>post-dural-puncture headache</strong> (CSF leak → traction on pain-sensitive structures), classically <strong>postural</strong>. Conservative care (analgesia, hydration, caffeine) may suffice, but a severe/persistent PDPH is treated with an <strong>epidural blood patch</strong> (~15–20 mL autologous blood), effective in the majority.',
  key: 'Postural headache after dural puncture = PDPH → epidural blood patch if severe.',
  pearl: 'Risk rises with larger/cutting (Quincke) needles and younger patients; pencil-point (Whitacre/Sprotte) needles reduce incidence. Always exclude sinister causes (meningitis, cortical vein thrombosis, subdural) if features are atypical.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-bier-001', spec: 'anaes', topic: 'Regional Anaesthesia', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'During intravenous regional anaesthesia (Bier block), the single most important safety rule is:',
  o: [
    'Use bupivacaine for a longer block',
    'Never deflate the tourniquet within the first ~20–25 minutes',
    'Inject the local anaesthetic proximal to the tourniquet',
    'Keep the tourniquet pressure below systolic'
  ],
  a: 1,
  e: 'Premature tourniquet release delivers a large bolus of local anaesthetic systemically → LAST. Maintain the cuff for at least <strong>~20–25 min</strong>, and deflate in cycles thereafter. Use <strong>prilocaine or lidocaine — never bupivacaine</strong> (cardiotoxic) for Bier blocks.',
  key: 'Bier block: keep tourniquet up ≥20–25 min; never use bupivacaine.',
  pearl: 'Prilocaine is favoured for its safety margin, but watch for methaemoglobinaemia at higher doses.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-mon-001', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The single most useful monitor for confirming correct tracheal tube placement is:',
  o: [
    'Chest auscultation',
    'Continuous waveform capnography (sustained EtCO₂)',
    'Pulse oximetry',
    'Chest rise and misting of the tube'
  ],
  a: 1,
  e: 'Sustained <strong>waveform capnography</strong> confirming exhaled CO₂ over several breaths is the gold standard for confirming tracheal (not oesophageal) placement and for ongoing monitoring — mandated by difficult-airway guidelines, including during CPR ("no trace, wrong place").',
  key: 'Capnography (sustained EtCO₂ waveform) confirms and monitors tube placement.',
  pearl: 'A sudden fall in EtCO₂ can mean oesophageal displacement, circuit disconnection, obstruction, or a fall in cardiac output/pulmonary embolism — interpret the waveform shape, not just the number.',
  src: 'AAGBI Monitoring Standards'
},
{
  id: 'anaes-mon-002', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The pulse oximeter measures oxygen saturation using the differential absorption of two wavelengths (660 nm red and 940 nm infrared). A key limitation is:',
  o: [
    'It reliably distinguishes carboxyhaemoglobin from oxyhaemoglobin',
    'Carboxyhaemoglobin is read as oxyhaemoglobin, giving a falsely high SpO₂',
    'It requires an arterial line to function',
    'It measures PaO₂ directly'
  ],
  a: 1,
  e: 'Standard 2-wavelength oximetry cannot distinguish <strong>carboxyhaemoglobin</strong> (absorbs like oxyHb at 660 nm) from oxyhaemoglobin → falsely reassuring SpO₂ in CO poisoning. Methaemoglobinaemia drives SpO₂ toward ~85%. Other error sources: poor perfusion, motion, nail polish, severe anaemia.',
  key: 'Pulse oximetry overreads in CO poisoning; methaemoglobin pulls SpO₂ toward 85%.',
  pearl: 'Use co-oximetry (multi-wavelength / blood gas) when dyshaemoglobinaemia is suspected.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-eq-001', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The oxygen failure warning (e.g. hypoxic guard / ratio system on the anaesthetic machine) primarily prevents delivery of:',
  o: [
    'An excessive volatile concentration',
    'A hypoxic gas mixture (guaranteeing a minimum FiO₂, usually ≥25%)',
    'Excessive fresh gas flow',
    'Reverse gas flow'
  ],
  a: 1,
  e: 'The hypoxic guard (e.g. mechanical/pneumatic link between N₂O and O₂ flows) and the oxygen-failure alarm ensure a <strong>minimum inspired O₂ fraction</strong> and warn of O₂ supply failure, cutting N₂O to prevent a hypoxic mixture.',
  key: 'Hypoxic guard prevents a hypoxic mixture; guarantees a minimum FiO₂ (~25%).',
  pearl: 'The anaesthetic machine has layered safety features: pin-index/colour coding, non-return valves, oxygen-failure whistle (Ritchie), pressure-relief valves, and the inspired-O₂ analyser as the final check.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-eq-002', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In a circle breathing system, the function of soda lime is to:',
  o: [
    'Humidify the inspired gas',
    'Chemically absorb exhaled CO₂, allowing low fresh-gas flows',
    'Vaporise the volatile agent',
    'Scavenge waste anaesthetic gases'
  ],
  a: 1,
  e: 'Soda lime (Ca(OH)₂ with NaOH/KOH and an indicator) absorbs CO₂ (CO₂ + Ca(OH)₂ → CaCO₃ + H₂O + heat), enabling rebreathing and low-flow anaesthesia. A colour change signals exhaustion.',
  key: 'Soda lime absorbs CO₂ in the circle system, enabling low-flow rebreathing.',
  pearl: 'Desiccated absorbent + sevoflurane can generate <strong>Compound A</strong>; older agents with desiccated baralyme risked CO and fires. Keep flows adequate and change exhausted absorbent.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-eq-003', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'A modern plenum vaporiser (variable-bypass, temperature-compensated) delivers a set agent concentration by:',
  o: [
    'Splitting fresh gas into a bypass and a saturated vaporising chamber flow',
    'Injecting a metered dose of liquid agent per breath',
    'Heating the agent to a fixed vapour pressure',
    'Using the patient\'s respiratory effort to draw agent (draw-over)'
  ],
  a: 0,
  e: 'A variable-bypass vaporiser splits incoming gas: part passes through the vaporising chamber and becomes saturated with agent, then recombines with the bypass to give the dialled concentration. Temperature compensation keeps output stable as cooling reduces vapour pressure. Agent-specific because of differing saturated vapour pressures.',
  key: 'Variable-bypass vaporiser: bypass + saturated chamber flow set the delivered %.',
  pearl: 'Desflurane needs a heated, pressurised vaporiser because its boiling point (~23 °C) is near room temperature.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-eq-004', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'The Bain circuit is a coaxial version of which Mapleson system, and is most efficient for which mode of ventilation?',
  o: [
    'Mapleson A — efficient for spontaneous ventilation',
    'Mapleson D — efficient for controlled ventilation',
    'Mapleson C — efficient for resuscitation',
    'Mapleson E — for paediatric spontaneous breathing'
  ],
  a: 1,
  e: 'The Bain is a coaxial <strong>Mapleson D</strong> (fresh gas runs through the inner tube to the patient end). It is efficient for <strong>controlled ventilation</strong> (fresh-gas flow ~70 mL/kg/min). The Mapleson A (Magill/Lack) is most efficient for spontaneous ventilation.',
  key: 'Bain = coaxial Mapleson D → efficient for controlled ventilation. Mapleson A best for spontaneous.',
  pearl: 'Always test the inner tube of a Bain (Pethick test) — a disconnected or kinked inner tube causes dangerous rebreathing.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-obs-001', spec: 'anaes', topic: 'Obstetric Anaesthesia', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Compared with the non-pregnant state, MAC and induction-drug requirements in the term parturient are:',
  o: [
    'Increased, because of higher cardiac output',
    'Decreased (MAC falls ~30–40%), with faster inhalational induction',
    'Unchanged',
    'Only changed for regional techniques'
  ],
  a: 1,
  e: 'Progesterone and endorphins lower <strong>MAC by ~30–40%</strong>. Increased minute ventilation with reduced FRC speeds inhalational induction (and desaturation). Aortocaval compression, a full stomach, and airway oedema make the obstetric airway higher-risk — hence a preference for neuraxial techniques.',
  key: 'Pregnancy lowers MAC ~30–40%; faster inhalational induction and faster desaturation.',
  pearl: 'Left-uterine displacement prevents aortocaval compression. Phenylephrine is preferred over ephedrine for spinal hypotension at caesarean (less fetal acidaemia).',
  src: "Chestnut's Obstetric Anesthesia"
},
{
  id: 'anaes-pons-001', spec: 'anaes', topic: 'Postoperative Care', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Which set of factors in the Apfel score predicts postoperative nausea and vomiting (PONV)?',
  o: [
    'Age, ASA grade, smoking, surgery duration',
    'Female sex, non-smoker, history of PONV/motion sickness, postoperative opioids',
    'Obesity, diabetes, hypertension, reflux',
    'Blood loss, fluid balance, temperature, surgery type'
  ],
  a: 1,
  e: 'The simplified <strong>Apfel score</strong> has four risk factors: female sex, non-smoking status, history of PONV/motion sickness, and expected postoperative opioid use. Each adds ~20% to baseline risk. Multimodal prophylaxis (e.g. ondansetron + dexamethasone, TIVA with propofol, opioid-sparing analgesia) is used for higher scores.',
  key: 'Apfel PONV: female, non-smoker, prior PONV/motion sickness, postop opioids.',
  pearl: 'Propofol-based TIVA and avoiding nitrous/volatiles lower PONV; dexamethasone and 5-HT₃ antagonists act at different receptors, so combining classes is additive.',
  src: 'Apfel 1999 / consensus PONV guidelines'
},
{
  id: 'anaes-vaso-001', spec: 'anaes', topic: 'Intraoperative Physiology', difficulty: 'moderate', type: 'case',
  stem: 'Under spinal anaesthesia a healthy patient becomes hypotensive with a heart rate of 52/min.',
  q: 'The most appropriate first-line vasopressor is:',
  o: [
    'Phenylephrine, accepting it may slow the heart further',
    'Ephedrine, which raises both blood pressure and heart rate',
    'Adrenaline infusion',
    'Noradrenaline bolus'
  ],
  a: 1,
  e: 'With coexisting bradycardia, <strong>ephedrine</strong> (mixed direct/indirect α and β agonist) raises BP <em>and</em> heart rate, making it the sensible first choice. Pure α-agonist phenylephrine raises BP but causes reflex bradycardia — better when the heart rate is already fast. Add atropine/fluids as needed.',
  key: 'Spinal hypotension + bradycardia → ephedrine; if tachycardic → phenylephrine.',
  pearl: 'In obstetric spinal hypotension, phenylephrine is preferred overall (better fetal acid–base), with atropine on hand for bradycardia.',
  src: "Morgan & Mikhail's"
},

/* ==========================================================
   CRITICAL CARE — NEW-TOPIC BATCH (Delirium, TTM, Refeeding,
   Ventilator weaning, Toxic alcohols) + high-yield extras
   (Marino, Washington Manual, Irwin & Rippe + guidelines)
   ========================================================== */
{
  id: 'ccm-delir-001', spec: 'ccm', topic: 'ICU Delirium', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The validated bedside tool for diagnosing delirium in a mechanically ventilated ICU patient is:',
  o: [
    'The Glasgow Coma Scale',
    'The CAM-ICU (Confusion Assessment Method for the ICU)',
    'The Mini-Mental State Examination',
    'The RASS alone'
  ],
  a: 1,
  e: 'The <strong>CAM-ICU</strong> diagnoses delirium in non-verbal/ventilated patients using: (1) acute change/fluctuating mental status, (2) inattention, (3) altered level of consciousness (RASS), and (4) disorganised thinking — positive if 1 AND 2 AND (3 OR 4). RASS is first used to ensure the patient is arousable (≥ –3).',
  key: 'CAM-ICU: acute/fluctuating course + inattention + (altered LOC OR disorganised thinking).',
  pearl: 'Hypoactive delirium (quiet, withdrawn) is commoner and more often missed than hyperactive delirium, yet carries a worse prognosis — screen routinely.',
  src: 'PADIS 2018 / Washington Manual'
},
{
  id: 'ccm-delir-002', spec: 'ccm', topic: 'ICU Delirium', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'According to the PADIS guidelines, which sedative is associated with less delirium than benzodiazepines in mechanically ventilated patients?',
  o: [
    'Midazolam',
    'Lorazepam',
    'Dexmedetomidine',
    'Diazepam'
  ],
  a: 2,
  e: 'PADIS recommends targeting <strong>light sedation</strong>, avoiding benzodiazepines, and favouring propofol or <strong>dexmedetomidine</strong>, which is linked to less delirium and shorter time to extubation. Non-pharmacological prevention (the ABCDEF bundle, early mobility, sleep, reorientation) is the cornerstone.',
  key: 'Avoid benzodiazepines; dexmedetomidine/propofol and the ABCDEF bundle reduce delirium.',
  pearl: 'No drug reliably <em>prevents</em> delirium. Antipsychotics (haloperidol/quetiapine) do not shorten delirium duration and are reserved for distressing agitation — not routine prophylaxis.',
  src: 'PADIS 2018'
},
{
  id: 'ccm-ttm-001', spec: 'ccm', topic: 'Targeted Temperature Management', difficulty: 'moderate', type: 'case',
  stem: 'A comatose adult remains unresponsive after ROSC from an out-of-hospital VF arrest.',
  q: 'Based on TTM2 and current ILCOR guidance, temperature management should aim to:',
  o: [
    'Cool to 33 °C for 24 h in all patients',
    'Target a constant temperature ≤37.5 °C and actively prevent fever, with cooling to 32–36 °C as an option',
    'Allow permissive hyperthermia to preserve perfusion',
    'Rewarm rapidly to 38 °C'
  ],
  a: 1,
  e: 'The <strong>TTM2</strong> trial found hypothermia at 33 °C did not improve survival versus targeted normothermia. Current guidance is to <strong>actively prevent fever</strong> (keep ≤37.5 °C) for at least 72 h in comatose post-arrest patients; a target of 32–36 °C remains an acceptable option. Avoiding fever is the key intervention.',
  key: 'Post-arrest: actively prevent fever (≤37.5 °C); routine deep hypothermia no longer mandated (TTM2).',
  pearl: 'Delay neuroprognostication to ≥72 h off sedation, and use a multimodal approach (clinical exam, bilateral absent pupillary/corneal reflexes, absent N20 SSEP, EEG, NSE, imaging) — never a single test.',
  src: 'TTM2 (NEJM 2021) / ERC-ESICM 2021'
},
{
  id: 'ccm-ttm-002', spec: 'ccm', topic: 'Targeted Temperature Management', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'During active cooling for targeted temperature management, which electrolyte disturbance is characteristically seen and reverses on rewarming?',
  o: [
    'Hyperkalaemia during cooling, hypokalaemia on rewarming',
    'Hypokalaemia (and hypomagnesaemia/hypophosphataemia) during cooling, with rebound hyperkalaemia on rewarming',
    'Hypernatraemia',
    'Hypercalcaemia'
  ],
  a: 1,
  e: 'Cooling drives potassium <strong>intracellularly</strong> → hypokalaemia (plus hypomagnesaemia, hypophosphataemia); rewarming releases it, risking <strong>rebound hyperkalaemia</strong>. Replace cautiously during cooling and stop supplementation before rewarming.',
  key: 'Cooling → hypokalaemia; rewarming → rebound hyperkalaemia (replete cautiously).',
  pearl: 'Cooling also causes bradycardia, shivering (raises metabolic demand — treat), diuresis, insulin resistance/hyperglycaemia, and impaired coagulation.',
  src: "Marino's The ICU Book"
},
{
  id: 'ccm-refeed-001', spec: 'ccm', topic: 'Refeeding Syndrome', difficulty: 'moderate', type: 'case',
  stem: 'A severely malnourished patient (BMI 14, minimal intake for 2 weeks) is started on full-rate enteral feeding. On day 2 they develop weakness, arrhythmia and respiratory failure.',
  q: 'The biochemical hallmark of refeeding syndrome is:',
  o: [
    'Hyperkalaemia',
    'Hypophosphataemia',
    'Hypercalcaemia',
    'Metabolic alkalosis'
  ],
  a: 1,
  e: 'Reintroducing carbohydrate triggers insulin release → cellular uptake of <strong>phosphate</strong>, potassium and magnesium. <strong>Hypophosphataemia</strong> is the hallmark, depleting ATP and 2,3-DPG → cardiac, respiratory, neuromuscular and haematological dysfunction.',
  key: 'Refeeding syndrome = insulin-driven hypophosphataemia (± hypoK, hypoMg) on reintroducing feeds.',
  pearl: 'Prevent it: identify high-risk patients, give <strong>thiamine before feeding</strong>, start feeding low (~10 kcal/kg/day) and advance slowly, and correct electrolytes proactively — don\'t wait for symptoms.',
  src: 'NICE Nutrition Support / Irwin & Rippe'
},
{
  id: 'ccm-refeed-002', spec: 'ccm', topic: 'Refeeding Syndrome', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'Which vitamin must be replaced BEFORE initiating nutrition in a patient at risk of refeeding syndrome?',
  o: [
    'Vitamin C',
    'Thiamine (B₁)',
    'Vitamin K',
    'Folate'
  ],
  a: 1,
  e: 'Carbohydrate load increases <strong>thiamine</strong> demand (cofactor for pyruvate dehydrogenase). In a depleted patient this can precipitate Wernicke encephalopathy or lactic acidosis. Give thiamine before/with the first feed and continue for several days.',
  key: 'Give thiamine before feeding the at-risk/malnourished patient.',
  pearl: 'High-risk criteria (NICE): BMI <16, >15% weight loss, little/no intake >10 days, or low baseline K/PO₄/Mg — or two moderate-risk features.',
  src: 'NICE Guidance'
},
{
  id: 'ccm-wean-001', spec: 'ccm', topic: 'Ventilator Weaning', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The rapid shallow breathing index (RSBI), a predictor of successful weaning, is calculated as and favourable when:',
  o: [
    'Tidal volume ÷ respiratory rate; favourable if >105',
    'Respiratory rate ÷ tidal volume (in litres); favourable if <105',
    'Minute ventilation ÷ PaCO₂; favourable if <10',
    'PaO₂ ÷ FiO₂; favourable if >300'
  ],
  a: 1,
  e: 'RSBI = <strong>respiratory rate (breaths/min) ÷ tidal volume (L)</strong>. A value <strong>&lt;105</strong> during a spontaneous breathing trial predicts successful extubation; higher values suggest rapid, shallow breathing and likely failure.',
  key: 'RSBI = f/Vt; <105 predicts weaning success.',
  pearl: 'Readiness screen precedes the SBT: improving/resolved cause, adequate oxygenation (PaO₂/FiO₂ >150–200, PEEP ≤5–8, FiO₂ ≤0.4–0.5), haemodynamic stability, and the ability to trigger breaths.',
  src: 'Yang-Tobin / Marino'
},
{
  id: 'ccm-wean-002', spec: 'ccm', topic: 'Ventilator Weaning', difficulty: 'moderate', type: 'case',
  stem: 'A patient who was intubated for angioedema and prolonged ventilation is being assessed for extubation. There is concern about post-extubation stridor.',
  q: 'The bedside test used to assess this risk is:',
  o: [
    'The cuff-leak test',
    'The Allen test',
    'A spontaneous awakening trial',
    'The negative inspiratory force'
  ],
  a: 0,
  e: 'The <strong>cuff-leak test</strong> assesses laryngeal/airway oedema: with the cuff deflated, a small (or absent) leak suggests narrowing and higher risk of post-extubation stridor. In high-risk patients a low leak warrants <strong>systemic corticosteroids ~4–12 h before</strong> extubation and readiness to re-intubate.',
  key: 'Cuff-leak test screens for airway oedema/post-extubation stridor; steroids if leak is low in high-risk patients.',
  pearl: 'The ABCDEF bundle pairs a daily <strong>spontaneous awakening trial (SAT)</strong> with a <strong>spontaneous breathing trial (SBT)</strong> — coordinating sedation interruption with weaning shortens ventilation and ICU stay.',
  src: 'Washington Manual / ATS-CHEST'
},
{
  id: 'ccm-tox-001', spec: 'ccm', topic: 'Toxic Alcohol Poisoning', difficulty: 'severe', type: 'case',
  stem: 'A man presents with visual blurring ("snowfield"), tachypnoea and a severe high-anion-gap metabolic acidosis. Serum osmolar gap is elevated. He is suspected of drinking a windscreen-wash substitute.',
  q: 'The toxic metabolite responsible for his symptoms (methanol poisoning) is:',
  o: [
    'Oxalic acid',
    'Formic acid',
    'Glycolic acid',
    'Acetone'
  ],
  a: 1,
  e: 'Methanol is metabolised by alcohol dehydrogenase to formaldehyde and then <strong>formic acid</strong>, which inhibits cytochrome oxidase and injures the <strong>optic nerve/retina</strong> (visual loss) and basal ganglia (putaminal necrosis), driving the anion-gap acidosis.',
  key: 'Methanol → formic acid → visual loss + high-anion-gap acidosis.',
  pearl: 'Early there is an <strong>osmolar gap</strong> (parent alcohol) which converts to an <strong>anion gap</strong> as it is metabolised — a normalising osmolar gap with a widening anion gap is ominous, not reassuring.',
  src: 'Irwin & Rippe / Goldfrank'
},
{
  id: 'ccm-tox-002', spec: 'ccm', topic: 'Toxic Alcohol Poisoning', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'The preferred antidote for methanol or ethylene glycol poisoning is:',
  o: [
    'N-acetylcysteine',
    'Fomepizole (an alcohol dehydrogenase inhibitor)',
    'Sodium nitrite',
    'Flumazenil'
  ],
  a: 1,
  e: '<strong>Fomepizole</strong> competitively inhibits alcohol dehydrogenase, halting formation of the toxic metabolites; ethanol is an alternative where fomepizole is unavailable. Add <strong>haemodialysis</strong> for severe acidosis, end-organ injury (visual/renal), or high levels. Cofactors help clear metabolites: <strong>folinic acid</strong> for methanol, <strong>thiamine and pyridoxine</strong> for ethylene glycol.',
  key: 'Toxic alcohols: fomepizole (block ADH) + haemodialysis + specific cofactors.',
  pearl: 'Ethylene glycol → glycolic acid (acidosis) and <strong>oxalic acid</strong>, which chelates calcium → hypocalcaemia and calcium-oxalate crystalluria with acute kidney injury.',
  src: "Marino's / Goldfrank"
},
{
  id: 'ccm-osm-001', spec: 'ccm', topic: 'Toxic Alcohol Poisoning', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The calculated serum osmolality (for the osmolar gap) is best estimated by:',
  o: [
    '2×Na + glucose + urea (all in mmol/L)',
    '2×Na + glucose/18 + BUN/2.8 (US units) or 2×Na + glucose + urea (SI)',
    'Na + K + Cl + HCO₃',
    'Anion gap + 12'
  ],
  a: 1,
  e: 'Calculated osmolality ≈ <strong>2×Na⁺ + glucose + urea</strong> (SI, mmol/L). The <strong>osmolar gap</strong> = measured − calculated; a value >10 mOsm/kg suggests an unmeasured osmole such as methanol, ethylene glycol, or ethanol.',
  key: 'Osmolar gap = measured − calculated (2Na + glucose + urea); >10 suggests a toxic alcohol/ethanol.',
  pearl: 'A normal osmolar gap does not exclude toxic-alcohol poisoning late in the course (parent alcohol already metabolised); interpret alongside the anion gap and clinical picture.',
  src: "Marino's The ICU Book"
},
{
  id: 'ccm-hyperk-001', spec: 'ccm', topic: 'Electrolytes', difficulty: 'moderate', type: 'case',
  stem: 'A dialysis patient has a potassium of 7.2 mmol/L with peaked T waves and a widening QRS.',
  q: 'The first drug to give is:',
  o: [
    'Intravenous calcium gluconate/chloride',
    'Insulin with dextrose',
    'Nebulised salbutamol',
    'Sodium bicarbonate'
  ],
  a: 0,
  e: '<strong>Calcium</strong> is given first to <strong>stabilise the myocardium</strong> (it does not lower K⁺) when there are ECG changes. Then shift K⁺ intracellularly with insulin–dextrose (± salbutamol, ± bicarbonate if acidotic), and remove it with dialysis (definitive here) or potassium binders.',
  key: 'Hyperkalaemia with ECG changes: calcium first (stabilise), then shift (insulin/dextrose ± salbutamol), then remove (dialysis).',
  pearl: 'ECG evolution: peaked T waves → PR prolongation/flat P → wide QRS → sine wave → arrest. Calcium works within minutes but is short-lived — arrange definitive removal promptly.',
  src: "Marino's / Washington Manual"
},
{
  id: 'ccm-dka-003', spec: 'ccm', topic: 'Hyperglycaemic Emergencies', difficulty: 'moderate', type: 'case',
  stem: 'A patient with diabetic ketoacidosis is resuscitated with fluids and an insulin infusion. Two hours in, the potassium is 3.2 mmol/L.',
  q: 'The correct next step is:',
  o: [
    'Continue insulin at the same rate and ignore the potassium',
    'Add potassium replacement and consider pausing/withholding insulin until K⁺ ≥3.3 mmol/L',
    'Give a large insulin bolus to clear ketones faster',
    'Give sodium bicarbonate'
  ],
  a: 1,
  e: 'Insulin drives K⁺ into cells. If K⁺ is <strong>&lt;3.3 mmol/L, hold insulin and replace potassium first</strong> to avoid dangerous hypokalaemia/arrhythmia; give K⁺ in the fluids once 3.3–5.3. Total-body potassium is depleted in DKA even when the initial serum level looks normal or high.',
  key: 'DKA: if K⁺ <3.3, replace potassium and hold insulin until corrected.',
  pearl: 'Add dextrose to the fluids when glucose falls to ~14 mmol/L (250 mg/dL) so the insulin infusion can continue to clear ketones without hypoglycaemia. Resolution = anion gap closure/ketone clearance, not just normoglycaemia.',
  src: 'ADA / Washington Manual'
},
{
  id: 'ccm-vap-002', spec: 'ccm', topic: 'Pneumonia / VAP', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Ventilator-associated pneumonia is, by definition, pneumonia arising:',
  o: [
    'Within 24 h of any hospital admission',
    'More than 48 h after tracheal intubation and mechanical ventilation',
    'Only after extubation',
    'In any patient receiving oxygen therapy'
  ],
  a: 1,
  e: 'VAP is pneumonia developing <strong>&gt;48 h after intubation</strong>. Empirical therapy is guided by the risk of MDR organisms (prior antibiotics, ≥5 days\' hospitalisation, local resistance) and de-escalated on cultures; a ~7-day course suffices for most.',
  key: 'VAP = pneumonia >48 h after intubation; empirical cover by MDR risk, then de-escalate.',
  pearl: 'The VAP prevention bundle: head-up 30–45°, daily sedation interruption + readiness-to-extubate assessment, oral care (± chlorhexidine, locally variable), DVT and stress-ulcer prophylaxis, and subglottic secretion drainage.',
  src: 'ATS/IDSA HAP-VAP Guideline'
},
{
  id: 'ccm-sep-013', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Per the Surviving Sepsis Campaign, in septic shock the recommended initial crystalloid resuscitation and vasopressor targets are:',
  o: [
    '10 mL/kg crystalloid and MAP ≥55 mmHg',
    'At least 30 mL/kg crystalloid within 3 h and MAP ≥65 mmHg with noradrenaline first-line',
    '50 mL/kg colloid and MAP ≥75 mmHg',
    'No fluids; start dopamine immediately'
  ],
  a: 1,
  e: 'SSC recommends <strong>≥30 mL/kg</strong> balanced crystalloid within the first 3 h (then guided by dynamic assessment), a <strong>MAP target ≥65 mmHg</strong>, and <strong>noradrenaline as the first-line vasopressor</strong> (add vasopressin, then adrenaline). Give antibiotics and obtain cultures/lactate early.',
  key: 'Septic shock: ≥30 mL/kg crystalloid, MAP ≥65, noradrenaline first-line.',
  pearl: 'After the initial bolus, use dynamic measures (passive leg raise, stroke-volume/pulse-pressure variation, fluid-challenge response) rather than static CVP to decide on further fluid.',
  src: 'Surviving Sepsis Campaign 2021'
},
{
  id: 'ccm-ards-009', spec: 'ccm', topic: 'ARDS', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'For a patient with moderate–severe ARDS, the lung-protective ventilation strategy shown to reduce mortality includes:',
  o: [
    'Tidal volume 10–12 mL/kg actual body weight, plateau pressure <40 cmH₂O',
    'Tidal volume ~6 mL/kg predicted body weight, plateau pressure ≤30 cmH₂O, and prone positioning if PaO₂/FiO₂ <150',
    'High tidal volumes to prevent atelectasis',
    'Zero PEEP to reduce barotrauma'
  ],
  a: 1,
  e: 'ARDSNet lung-protective ventilation: <strong>~6 mL/kg predicted body weight</strong>, <strong>plateau pressure ≤30 cmH₂O</strong>, adequate PEEP, and permissive hypercapnia. <strong>Prone positioning</strong> (PROSEVA — ≥16 h/day) reduces mortality when PaO₂/FiO₂ <150. Neuromuscular blockade and ECMO are options in severe cases.',
  key: 'ARDS: 6 mL/kg PBW, Pplat ≤30, PEEP, prone if P/F <150 (PROSEVA).',
  pearl: 'Tidal volume is set by <strong>predicted</strong> (not actual) body weight — driven by height and sex — because lung size scales with height, not adiposity.',
  src: 'ARDSNet / PROSEVA'
},
{
  id: 'ccm-aki-004', spec: 'ccm', topic: 'Acute Kidney Injury', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Which is an accepted urgent (emergency) indication for renal replacement therapy in AKI?',
  o: [
    'A single creatinine of 200 µmol/L',
    'Refractory hyperkalaemia, refractory acidosis, refractory fluid overload/pulmonary oedema, or uraemic complications (pericarditis/encephalopathy)',
    'Oliguria for 6 hours',
    'A rising urea alone'
  ],
  a: 1,
  e: 'The classic emergency ("AEIOU") indications: severe <strong>A</strong>cidosis, <strong>E</strong>lectrolyte disturbance (refractory hyperkalaemia), <strong>I</strong>ntoxications (dialysable toxins), <strong>O</strong>verload (refractory pulmonary oedema), and <strong>U</strong>raemic complications (pericarditis, encephalopathy) — all when refractory to medical therapy.',
  key: 'RRT emergencies (AEIOU): Acidosis, Electrolytes (K⁺), Intoxication, Overload, Uraemia.',
  pearl: 'Trials (STARRT-AKI, AKIKI, IDEAL-ICU) show no benefit to routinely <em>early</em> RRT in the absence of these indications — watchful waiting is appropriate otherwise.',
  src: 'KDIGO / STARRT-AKI'
},
{
  id: 'ccm-pe-004', spec: 'ccm', topic: 'Pulmonary Embolism', difficulty: 'moderate', type: 'case',
  stem: 'A patient with a confirmed pulmonary embolism is hypotensive (SBP 78 mmHg) with acute right-ventricular strain on echocardiography.',
  q: 'This is high-risk (massive) PE. The indicated treatment, if no contraindication, is:',
  o: [
    'Systemic thrombolysis (e.g. alteplase)',
    'A vitamin-K antagonist alone',
    'Aspirin',
    'Observation with oxygen'
  ],
  a: 0,
  e: 'High-risk PE (sustained hypotension/shock) warrants <strong>systemic thrombolysis</strong> unless contraindicated; catheter-directed therapy or surgical embolectomy are alternatives if thrombolysis fails or is contraindicated. Anticoagulate (usually IV unfractionated heparin) alongside.',
  key: 'High-risk (hypotensive) PE → thrombolysis (or embolectomy) + heparin.',
  pearl: 'Intermediate-risk PE (RV strain/positive biomarkers but normotensive) is treated with anticoagulation and close monitoring — reserve thrombolysis for those who deteriorate.',
  src: 'ESC PE Guideline / Washington Manual'
},
{
  id: 'ccm-ich-001', spec: 'ccm', topic: 'Stroke', difficulty: 'moderate', type: 'case',
  stem: 'A patient on warfarin (INR 3.5) presents with a large spontaneous intracerebral haemorrhage.',
  q: 'The most appropriate reversal strategy is:',
  o: [
    'Vitamin K alone',
    'Four-factor prothrombin complex concentrate plus intravenous vitamin K',
    'Fresh frozen plasma alone, slowly',
    'Platelet transfusion'
  ],
  a: 1,
  e: 'Warfarin-associated intracranial haemorrhage requires <strong>rapid</strong> reversal: <strong>4-factor PCC</strong> (faster, smaller volume, more reliable than FFP) <strong>plus IV vitamin K</strong> (for sustained effect, as PCC is short-lived). Also manage blood pressure and neurosurgical referral.',
  key: 'Warfarin-related ICH: 4-factor PCC + IV vitamin K (PCC alone wears off).',
  pearl: 'For direct oral anticoagulants: idarucizumab reverses dabigatran; andexanet alfa (or PCC where unavailable) for factor-Xa inhibitors. In acute ICH, aim to lower systolic BP to ~140 mmHg.',
  src: 'Neurocritical Care Society / AHA'
},

/* ==========================================================
   ANAESTHESIA — BATCH A2 (Difficult airway, regional adjuncts,
   physics, paediatric, monitoring, positioning)
   ========================================================== */
{
  id: 'anaes-da-001', spec: 'anaes', topic: 'Airway Management', difficulty: 'severe', type: 'case',
  stem: 'After induction, a patient cannot be intubated and cannot be mask-ventilated or oxygenated via a supraglottic device; SpO₂ is 70% and falling.',
  q: 'Per the Difficult Airway Society guideline, the immediate next step is:',
  o: [
    'Repeated attempts at direct laryngoscopy',
    'Declare "can\'t intubate, can\'t oxygenate" and perform emergency front-of-neck access (scalpel–bougie–tube cricothyroidotomy)',
    'Wake the patient up',
    'Give more neuromuscular blocker'
  ],
  a: 1,
  e: 'A CICO situation mandates immediate <strong>emergency front-of-neck access</strong>. DAS recommends the <strong>scalpel–bougie–tube</strong> cricothyroidotomy: transverse stab through the cricothyroid membrane, rotate blade, rail a bougie, then a size-6 tube. Declaring CICO early and committing to FONA saves lives.',
  key: 'CICO → scalpel–bougie–tube cricothyroidotomy without delay.',
  pearl: 'DAS plans: A (facemask/tracheal intubation) → B (supraglottic airway rescue) → C (final attempt at facemask ventilation, wake if possible) → D (FONA). Give 100% O₂ and ensure full neuromuscular blockade before FONA.',
  src: 'DAS 2015 Guidelines'
},
{
  id: 'anaes-da-002', spec: 'anaes', topic: 'Airway Management', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The strongest indication for planned awake fibreoptic intubation is:',
  o: [
    'A predicted easy airway needing rapid control',
    'An anticipated difficult airway where loss of spontaneous ventilation would be dangerous (e.g. severe fixed-flexion neck, large airway tumour)',
    'A full stomach with normal airway',
    'Routine day-case surgery'
  ],
  a: 1,
  e: 'Awake fibreoptic intubation preserves spontaneous ventilation and airway tone while the airway is secured under topical anaesthesia — ideal when both intubation and rescue oxygenation are predicted to be difficult (unstable cervical spine, airway tumours/masses, severe ankylosing spondylitis, previous difficult airway).',
  key: 'Anticipated difficult airway where losing spontaneous ventilation is dangerous → awake fibreoptic intubation.',
  pearl: 'Adequate topicalisation (lignocaine to nasopharynx, oropharynx, larynx) and judicious sedation (e.g. remifentanil or dexmedetomidine, keeping the patient rousable) are the keys to success.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-lma-001', spec: 'anaes', topic: 'Airway Management', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'A classic (first-generation) laryngeal mask airway is relatively contraindicated in which situation?',
  o: [
    'A short peripheral procedure in a fasted patient',
    'A patient at high risk of aspiration (full stomach, significant reflux, or high intra-abdominal pressure)',
    'A patient with a beard',
    'Day-case knee arthroscopy'
  ],
  a: 1,
  e: 'A supraglottic airway does not protect against aspiration; it is relatively contraindicated where aspiration risk is high (non-fasted, significant GORD, obstruction, high intra-abdominal pressure, prone/steep positions without protection). Second-generation SGAs (e.g. i-gel, ProSeal) have a gastric drain port and offer some protection.',
  key: 'Classic LMA does not protect the airway — avoid when aspiration risk is high.',
  pearl: 'Second-generation SGAs (i-gel, LMA ProSeal/Supreme) permit gastric decompression and higher seal pressures, widening their safe use — but a cuffed tracheal tube remains the standard where protection is essential.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-epi-001', spec: 'anaes', topic: 'Regional Anaesthesia', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The epidural "test dose" (e.g. 3 mL of lidocaine 1.5% with adrenaline 1:200,000) is used to detect:',
  o: [
    'Only subarachnoid placement',
    'Both subarachnoid (rapid dense block) and intravascular (tachycardia/rise in HR from adrenaline) placement',
    'Infection of the catheter',
    'The correct dermatome'
  ],
  a: 1,
  e: 'The test dose screens for mis-placement: a subarachnoid catheter produces a rapid, dense motor/sensory block (the local anaesthetic component), while an intravascular catheter produces a transient <strong>tachycardia/BP rise</strong> from the adrenaline marker (≈20% HR rise). It reduces the risk of total spinal or systemic toxicity from the full dose.',
  key: 'Epidural test dose: LA detects intrathecal placement; adrenaline detects intravascular placement.',
  pearl: 'Always aspirate before dosing, dose incrementally, and stay alert to signs of LAST or a rising block — no single test is fully reliable, especially in labour where maternal HR fluctuates.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-cau-001', spec: 'anaes', topic: 'Regional Anaesthesia', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'A caudal epidural block in children is performed by injecting local anaesthetic through which structure?',
  o: [
    'The foramen magnum',
    'The sacrococcygeal membrane (sacral hiatus)',
    'The L3–L4 interspace',
    'The intervertebral foramen'
  ],
  a: 1,
  e: 'Caudal anaesthesia enters the epidural space through the <strong>sacral hiatus</strong> (sacrococcygeal membrane, bounded by the sacral cornua). It is popular for sub-umbilical paediatric surgery (circumcision, hernia, hypospadias) for intra- and post-operative analgesia.',
  key: 'Caudal block = epidural space via the sacral hiatus; workhorse for paediatric sub-umbilical surgery.',
  pearl: 'A common dosing guide is the Armitage regimen (~0.5–1 mL/kg of 0.25% bupivacaine depending on the desired level). Ultrasound improves accuracy in infants.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-phys-001', spec: 'anaes', topic: 'Physics & Physiology', difficulty: 'severe', type: 'direct',
  stem: '',
  q: 'According to the Hagen–Poiseuille equation, halving the radius of a cannula (with laminar flow, all else equal) changes the flow rate by a factor of:',
  o: [
    '1/2',
    '1/4',
    '1/8',
    '1/16'
  ],
  a: 3,
  e: 'Laminar flow is proportional to the <strong>fourth power of the radius</strong> (Q ∝ r⁴/L). Halving the radius reduces flow to (½)⁴ = <strong>1/16</strong>. This is why a short, wide-bore cannula delivers far more fluid than a long narrow one for rapid resuscitation.',
  key: 'Laminar flow ∝ r⁴ — short, wide cannulas give the fastest flow.',
  pearl: 'For rapid transfusion, choose a large-diameter, short catheter (e.g. a 14–16 G peripheral or a large-bore introducer) rather than a long triple-lumen central line, whose narrow lumens limit flow.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-paed-001', spec: 'anaes', topic: 'Paediatric Anaesthesia', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'A commonly used formula for the internal diameter of an uncuffed tracheal tube in a child over 1 year is:',
  o: [
    'Age/2 + 4 mm',
    'Age/4 + 4 mm',
    'Age + 4 mm',
    'Weight/10 mm'
  ],
  a: 1,
  e: 'Uncuffed tube internal diameter ≈ <strong>age/4 + 4 mm</strong> (use ~0.5 mm smaller for cuffed tubes). Length at lips ≈ age/2 + 12 cm (oral). Modern cuffed tubes with low-pressure cuffs are increasingly preferred, reducing air leak and re-intubation for size changes.',
  key: 'Uncuffed ETT ID ≈ age/4 + 4 mm; cuffed ≈ 0.5 mm smaller.',
  pearl: 'Paediatric airway differences: large head/occiput and tongue, high anterior larynx (C3–4), long floppy epiglottis, and the cricoid as the narrowest point in the young child — all favour a straight blade and careful sizing.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-bis-001', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'When processed-EEG (BIS) monitoring is used to reduce accidental awareness, the general target range during general anaesthesia is:',
  o: [
    '0–20',
    '40–60',
    '60–80',
    '80–100'
  ],
  a: 1,
  e: 'A BIS of <strong>40–60</strong> indicates an appropriate depth of general anaesthesia; 100 is fully awake and 0 is isoelectric EEG. Depth monitoring is most useful during total intravenous anaesthesia and when neuromuscular blockade masks clinical signs of light anaesthesia.',
  key: 'BIS target for general anaesthesia ≈ 40–60.',
  pearl: 'NAP5 identified TIVA with neuromuscular blockade, and transfer/emergence periods, as high-risk for accidental awareness. End-tidal agent monitoring with an alarm is the volatile-anaesthesia equivalent safeguard.',
  src: 'NAP5 / Miller'
},
{
  id: 'anaes-olv-001', spec: 'anaes', topic: 'Intraoperative Physiology', difficulty: 'severe', type: 'case',
  stem: 'During one-lung ventilation for a thoracotomy, the patient desaturates to 88%.',
  q: 'After confirming tube position and FiO₂ 1.0, an effective early manoeuvre is:',
  o: [
    'Apply CPAP to the non-dependent (operative, non-ventilated) lung and/or PEEP to the dependent lung',
    'Increase the tidal volume to 12 mL/kg',
    'Immediately abandon one-lung ventilation',
    'Give a fluid bolus'
  ],
  a: 0,
  e: 'For hypoxaemia on one-lung ventilation: verify double-lumen/bronchial-blocker position (fibreoptically), FiO₂ 1.0, then apply <strong>CPAP to the non-dependent lung</strong> (oxygenates without much movement) and/or <strong>PEEP to the dependent lung</strong>; recruitment manoeuvres and intermittent two-lung ventilation help. Hypoxic pulmonary vasoconstriction diverts blood from the collapsed lung over time.',
  key: 'OLV hypoxaemia: check tube position, FiO₂ 1.0, CPAP to non-dependent lung ± PEEP to dependent lung.',
  pearl: 'Volatile agents (esp. >1 MAC) blunt hypoxic pulmonary vasoconstriction, potentially worsening shunt — another reason depth and agent choice matter in thoracic anaesthesia.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-pos-001', spec: 'anaes', topic: 'Intraoperative Physiology', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Prolonged, poorly padded positioning of the arm in supination and abduction most classically injures which nerve?',
  o: [
    'Common peroneal nerve',
    'Ulnar nerve (at the elbow)',
    'Brachial plexus / ulnar depending on position',
    'Radial nerve at the wrist'
  ],
  a: 2,
  e: 'Positioning injuries are a major medicolegal cause: the <strong>ulnar nerve</strong> at the elbow is the most commonly injured (pressure at the condylar groove — keep the forearm supinated/neutral and padded), while excessive arm <strong>abduction beyond 90°</strong> stretches the <strong>brachial plexus</strong>. The common peroneal nerve is at risk in lithotomy (pressure at the fibular head).',
  key: 'Ulnar nerve at the elbow is the most commonly injured; abduction >90° risks the brachial plexus.',
  pearl: 'Prevent nerve injury: neutral joint positions, generous padding, avoid overextension/abduction, and document a pressure-area check — position-related injury may not manifest until the postoperative period.',
  src: "Morgan & Mikhail's"
},
{
  id: 'anaes-diath-001', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'moderate', type: 'case',
  stem: 'A patient with a permanent pacemaker is scheduled for surgery requiring monopolar diathermy.',
  q: 'The main intraoperative concern and mitigation is:',
  o: [
    'Diathermy interference may inhibit the pacemaker or trigger inappropriate ICD shocks — use short bursts, position the return plate to keep current away from the device, and manage per a cardiology plan (magnet/reprogramming)',
    'The pacemaker will overheat and must be removed',
    'No precautions are needed with modern devices',
    'Only spinal anaesthesia can be used'
  ],
  a: 0,
  e: 'Monopolar diathermy can cause electromagnetic interference: <strong>oversensing</strong> may inhibit pacing (dangerous if pacemaker-dependent) or an ICD may deliver an inappropriate shock. Mitigate with <strong>bipolar diathermy</strong> where possible, short bursts, the return electrode sited so current does not cross the device, and a preoperative plan (a magnet to set asynchronous pacing / disable ICD tachytherapy, or reprogramming) with defibrillation available.',
  key: 'CIED + monopolar diathermy → EMI: bipolar/short bursts, plate placement, magnet or reprogram per plan.',
  pearl: 'A magnet over most pacemakers switches to asynchronous (fixed-rate) pacing; over most ICDs it suspends tachytherapy but does NOT change pacing — know the device before relying on a magnet.',
  src: 'Miller / MHRA guidance'
},
{
  id: 'anaes-sug-001', spec: 'anaes', topic: 'Neuromuscular Blockers', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Sugammadex reverses rocuronium/vecuronium blockade by:',
  o: [
    'Inhibiting acetylcholinesterase to raise synaptic acetylcholine',
    'Encapsulating (chelating) the steroidal relaxant molecule, removing it from the neuromuscular junction',
    'Stimulating nicotinic receptors directly',
    'Blocking presynaptic calcium channels'
  ],
  a: 1,
  e: 'Sugammadex is a modified γ-cyclodextrin that <strong>encapsulates</strong> aminosteroid relaxants (rocuronium > vecuronium) in plasma, creating a concentration gradient that pulls them off the junctional receptors — reversing even <strong>profound</strong> block rapidly (unlike neostigmine, which needs some spontaneous recovery). Typical doses: 2 mg/kg (moderate block, ≥2 twitches) or 16 mg/kg (immediate reversal after an intubating dose).',
  key: 'Sugammadex chelates rocuronium/vecuronium; reverses even profound block (2 or 16 mg/kg).',
  pearl: 'It does not reverse benzylisoquinoliniums (atracurium/cisatracurium). It binds hormonal contraceptives — advise additional contraception. Rare anaphylaxis is reported.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-op-001', spec: 'anaes', topic: 'Analgesia', difficulty: 'moderate', type: 'case',
  stem: 'A patient with chronic kidney disease receives morphine for postoperative pain and becomes progressively more sedated with pinpoint pupils over hours.',
  q: 'The most likely explanation is accumulation of:',
  o: [
    'Morphine-3-glucuronide, which is analgesic',
    'Morphine-6-glucuronide, an active metabolite renally excreted',
    'Normeperidine',
    'Codeine'
  ],
  a: 1,
  e: '<strong>Morphine-6-glucuronide</strong> is a potent active opioid metabolite cleared by the kidney; in renal impairment it accumulates → delayed, prolonged sedation and respiratory depression. Prefer opioids with inactive/less renally-dependent metabolites (e.g. fentanyl) in renal failure, and titrate carefully.',
  key: 'Morphine-6-glucuronide accumulates in renal failure → prolonged sedation/respiratory depression.',
  pearl: 'Pethidine\'s metabolite normeperidine accumulates in renal failure and causes seizures. Naloxone reverses opioid effect but is short-acting — repeat dosing/infusion may be needed for long-acting opioids.',
  src: "Stoelting's Pharmacology"
},
{
  id: 'anaes-tap-001', spec: 'anaes', topic: 'Regional Anaesthesia', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The transversus abdominis plane (TAP) block deposits local anaesthetic to target which nerves?',
  o: [
    'The lumbar plexus roots',
    'The thoracolumbar (T7–L1) anterior abdominal wall nerves in the plane between internal oblique and transversus abdominis',
    'The pudendal nerve',
    'The sciatic nerve'
  ],
  a: 1,
  e: 'The TAP block spreads anaesthetic in the neurofascial plane between <strong>internal oblique and transversus abdominis</strong>, blocking the anterior rami (T7–L1) that supply the anterolateral abdominal wall — useful for somatic analgesia after abdominal surgery (caesarean, laparotomy, hernia).',
  key: 'TAP block: internal oblique/transversus plane → T7–L1 abdominal wall analgesia (somatic only).',
  pearl: 'TAP blocks cover the abdominal wall but not visceral pain — combine with multimodal analgesia. Watch total local-anaesthetic dose (often bilateral, large volumes) to avoid LAST.',
  src: "Miller's Anesthesia"
},
{
  id: 'anaes-hme-001', spec: 'anaes', topic: 'Monitoring & Equipment', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'A heat and moisture exchanger (HME) placed in the breathing circuit primarily serves to:',
  o: [
    'Absorb carbon dioxide',
    'Conserve heat and humidity (and filter) the inspired gas, protecting the airway from drying',
    'Deliver the volatile agent',
    'Measure tidal volume'
  ],
  a: 1,
  e: 'An HME ("artificial nose") captures exhaled heat and moisture and returns them on inspiration, preventing drying of secretions and mucosal damage during anaesthesia/ventilation; many incorporate a microbial filter. It is not a substitute for active humidification during very long cases.',
  key: 'HME conserves airway heat/humidity (and filters); passive humidification.',
  pearl: 'Dry gases impair ciliary function and thicken secretions; prolonged ventilation may need active heated humidification. An HME adds dead space and resistance — a consideration in small children.',
  src: "Morgan & Mikhail's"
},

/* ==========================================================
   CRITICAL CARE — BATCH C2 (Sepsis adjuncts, ARDS, transfusion,
   prophylaxis, neuro-emergencies, tox)
   ========================================================== */
{
  id: 'ccm-sep-014', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'In septic shock, low-dose corticosteroids (IV hydrocortisone) are recommended when:',
  o: [
    'In every septic patient regardless of haemodynamics',
    'There is ongoing vasopressor requirement despite adequate fluids and noradrenaline (haemodynamic instability persists)',
    'Only if random cortisol is low',
    'Never — steroids are contraindicated in sepsis'
  ],
  a: 1,
  e: 'The Surviving Sepsis Campaign suggests <strong>IV hydrocortisone</strong> (~200 mg/day) in adults with septic shock and an <strong>ongoing vasopressor need</strong> (e.g. noradrenaline ≥0.25 µg/kg/min for several hours). It hastens shock resolution; a random cortisol/ACTH stimulation test is not required to decide.',
  key: 'Hydrocortisone for septic shock with persistent vasopressor requirement (no cortisol test needed).',
  pearl: 'Adding fludrocortisone (as in APROCCHSS) is an option. Steroids shorten time to shock reversal but their mortality benefit is modest and trial-dependent (ADRENAL vs APROCCHSS).',
  src: 'Surviving Sepsis Campaign 2021'
},
{
  id: 'ccm-sep-015', spec: 'ccm', topic: 'Sepsis', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'After noradrenaline, the recommended second vasopressor to add in septic shock (to limit catecholamine dose) is:',
  o: [
    'Dopamine',
    'Vasopressin',
    'Phenylephrine',
    'Isoprenaline'
  ],
  a: 1,
  e: 'SSC recommends adding <strong>vasopressin</strong> (up to ~0.03 units/min) to noradrenaline rather than escalating catecholamines alone; adrenaline is the next addition. <strong>Dopamine is not recommended</strong> (more arrhythmia, no benefit) except in highly selected bradycardic patients.',
  key: 'Septic shock vasopressor order: noradrenaline → add vasopressin → add adrenaline. Avoid dopamine.',
  pearl: 'Angiotensin II is an option in refractory vasodilatory shock. Escalating catecholamine requirement should prompt a search for untreated source, adrenal insufficiency, or a mechanical/obstructive contributor.',
  src: 'Surviving Sepsis Campaign 2021'
},
{
  id: 'ccm-tx-003', spec: 'ccm', topic: 'Transfusion', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'For most haemodynamically stable, non-bleeding critically ill adults, the evidence supports a RED-CELL transfusion threshold of:',
  o: [
    'Haemoglobin < 10 g/dL (liberal)',
    'Haemoglobin < 7 g/dL (restrictive)',
    'Haemoglobin < 5 g/dL',
    'Transfuse to keep Hb 12–14 g/dL'
  ],
  a: 1,
  e: 'A <strong>restrictive</strong> threshold (~<strong>7 g/dL</strong>, target 7–9) is as safe as or safer than a liberal strategy (TRICC and successors) in most stable critically ill patients. A slightly higher trigger (~8 g/dL) is used in acute coronary syndrome/cardiac surgery contexts.',
  key: 'Restrictive transfusion trigger ~7 g/dL for most ICU patients; ~8 in cardiac/ACS.',
  pearl: 'In active major haemorrhage, transfuse by clinical picture and ratios (not a single Hb number). Each unit of red cells raises Hb by ~1 g/dL in an adult.',
  src: 'TRICC / AABB'
},
{
  id: 'ccm-vte-001', spec: 'ccm', topic: 'VTE Prophylaxis', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'For a critically ill medical patient at high VTE risk with no bleeding contraindication, the preferred pharmacological prophylaxis is:',
  o: [
    'Aspirin',
    'Low-molecular-weight heparin (or low-dose unfractionated heparin)',
    'Therapeutic-dose warfarin',
    'Mechanical compression alone in all patients'
  ],
  a: 1,
  e: 'Pharmacological prophylaxis with <strong>LMWH</strong> (or LDUH, e.g. in severe renal impairment) is preferred when bleeding risk is acceptable. <strong>Mechanical prophylaxis</strong> (intermittent pneumatic compression) is used when anticoagulation is contraindicated (active bleeding, severe thrombocytopenia).',
  key: 'ICU VTE prophylaxis: LMWH (or LDUH); mechanical if anticoagulation contraindicated.',
  pearl: 'Reassess daily — bleeding risk and platelet counts change. Combine mechanical + pharmacological in the highest-risk patients per local protocol.',
  src: 'CHEST / Washington Manual'
},
{
  id: 'ccm-sup-001', spec: 'ccm', topic: 'Supportive Care', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'Stress-ulcer prophylaxis in the ICU is most clearly indicated in patients with:',
  o: [
    'Any ICU admission regardless of risk',
    'Major risk factors — mechanical ventilation >48 h or coagulopathy (and other high-risk states)',
    'A history of mild dyspepsia',
    'Enteral feeding, which increases bleeding risk'
  ],
  a: 1,
  e: 'The strongest independent risk factors for clinically important GI bleeding are <strong>mechanical ventilation >48 h</strong> and <strong>coagulopathy</strong>; prophylaxis (PPI or H₂-blocker) is targeted to such high-risk patients rather than given to everyone. Established enteral nutrition itself may lower risk.',
  key: 'Stress-ulcer prophylaxis for the high-risk (ventilated >48 h, coagulopathic); not routine for all.',
  pearl: 'Balance against possible harms (C. difficile, pneumonia associations). De-escalate as risk factors resolve.',
  src: 'Washington Manual / PEPTIC'
},
{
  id: 'ccm-nut-002', spec: 'ccm', topic: 'Nutrition', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'For most critically ill patients with a functioning gut, nutrition guidelines recommend:',
  o: [
    'Early parenteral nutrition within 24 h for everyone',
    'Early enteral nutrition (within 24–48 h), preferring the enteral over the parenteral route',
    'Withholding all nutrition for the first week',
    'Full-calorie feeding immediately in all patients'
  ],
  a: 1,
  e: '<strong>Early enteral nutrition (within 24–48 h)</strong> is preferred — it maintains gut integrity and is associated with fewer infectious complications than parenteral nutrition. Parenteral nutrition is reserved for when enteral feeding is impossible or inadequate after several days.',
  key: 'Prefer early (24–48 h) enteral nutrition; reserve parenteral for enteral failure.',
  pearl: 'Avoid overfeeding early (permissive underfeeding/trophic feeds are acceptable initially in many); beware refeeding syndrome in the malnourished — advance calories gradually.',
  src: 'ASPEN-SCCM / Irwin & Rippe'
},
{
  id: 'ccm-gly-001', spec: 'ccm', topic: 'Endocrine Emergencies', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'The recommended blood-glucose target range for most critically ill patients on insulin is approximately:',
  o: [
    '80–110 mg/dL (4.4–6.1 mmol/L) tight control',
    '140–180 mg/dL (7.8–10.0 mmol/L)',
    '200–250 mg/dL',
    'No target is needed'
  ],
  a: 1,
  e: 'After NICE-SUGAR showed tight control (80–110) increased hypoglycaemia and mortality, guidelines recommend a target of <strong>140–180 mg/dL</strong> (7.8–10 mmol/L), starting insulin when glucose is persistently >180. Avoid hypoglycaemia and wide glycaemic variability.',
  key: 'ICU glucose target 140–180 mg/dL (tight 80–110 control is harmful — NICE-SUGAR).',
  pearl: 'Point-of-care glucose can be inaccurate in shock/anaemia/oedema — confirm abnormal values with a laboratory/blood-gas sample before major insulin changes.',
  src: 'NICE-SUGAR / SCCM'
},
{
  id: 'ccm-se-003', spec: 'ccm', topic: 'Status Epilepticus', difficulty: 'moderate', type: 'case',
  stem: 'A patient in generalised convulsive status epilepticus has received adequate doses of IV lorazepam but continues to seize.',
  q: 'The next (second-line) step is:',
  o: [
    'Repeat benzodiazepines indefinitely',
    'A second-line IV antiseizure agent — levetiracetam, (fos)phenytoin, or valproate',
    'Immediate thiopentone coma without other agents',
    'Oral carbamazepine'
  ],
  a: 1,
  e: 'After first-line benzodiazepines, give a <strong>second-line agent</strong>: IV <strong>levetiracetam, fosphenytoin/phenytoin, or valproate</strong> — the ESETT trial found them roughly equivalent. Refractory status (failure of first- and second-line) needs anaesthetic infusions (midazolam, propofol, or thiopentone) with continuous EEG.',
  key: 'Status: benzodiazepine → 2nd-line (levetiracetam/fosphenytoin/valproate — equivalent, ESETT) → anaesthetic coma.',
  pearl: 'Give adequate benzodiazepine doses early (under-dosing is a common error), secure the airway/glucose/thiamine, and pursue the cause (structural, metabolic, toxic, infective, non-adherence).',
  src: 'ESETT / Neurocritical Care Society'
},
{
  id: 'ccm-icp-001', spec: 'ccm', topic: 'Traumatic Brain Injury', difficulty: 'moderate', type: 'direct',
  stem: '',
  q: 'For acutely raised intracranial pressure, an appropriate initial (tier-1) set of measures includes:',
  o: [
    'Head-down positioning and hypoventilation',
    'Head-up ~30°, ensure venous drainage (avoid tight ties), normocapnia, sedation/analgesia, and osmotherapy (hypertonic saline or mannitol) for surges',
    'Routine prophylactic hyperventilation to PaCO₂ 25 mmHg',
    'Immediate barbiturate coma in all patients'
  ],
  a: 1,
  e: 'Initial ICP control: <strong>head-up 30°</strong> with unobstructed venous drainage, adequate sedation/analgesia, <strong>normocapnia</strong> (PaCO₂ ~35–40), normothermia, treat seizures, and <strong>osmotherapy</strong> (hypertonic saline or mannitol) for surges. Maintain CPP ~60–70 mmHg.',
  key: 'Raised ICP tier-1: head-up 30°, venous drainage, normocapnia, sedation, osmotherapy; CPP 60–70.',
  pearl: 'Aggressive prophylactic hyperventilation (PaCO₂ <30) causes ischaemia and is reserved as a brief bridge for herniation. Escalate to decompressive craniectomy/barbiturates for refractory intracranial hypertension.',
  src: 'Brain Trauma Foundation'
},
{
  id: 'ccm-htn-002', spec: 'ccm', topic: 'Hypertensive Emergency', difficulty: 'moderate', type: 'case',
  stem: 'A patient presents with a hypertensive emergency (BP 230/130) and acute pulmonary oedema (but no aortic dissection or stroke).',
  q: 'The general principle for lowering blood pressure is:',
  o: [
    'Normalise the BP to 120/80 within 30 minutes',
    'Reduce MAP by ~10–20% in the first hour and ~25% within the first day, using titratable IV agents',
    'Use sublingual nifedipine for a rapid drop',
    'Avoid any BP reduction'
  ],
  a: 1,
  e: 'In most hypertensive emergencies, lower the <strong>MAP by ~10–20% in the first hour</strong> and by ~25% over the first day with titratable IV agents (e.g. GTN/nitroprusside/labetalol) — abrupt normalisation risks organ hypoperfusion. Exceptions with specific targets: aortic dissection (rapid to SBP ~100–120, HR <60) and certain strokes.',
  key: 'Hypertensive emergency: drop MAP ~10–20% in the 1st hour, ~25% over day 1 (except dissection/stroke).',
  pearl: 'Avoid short-acting sublingual nifedipine — uncontrolled precipitous falls cause stroke/MI. Choose the agent by the target organ (e.g. GTN for pulmonary oedema/ACS, labetalol/esmolol + vasodilator for dissection).',
  src: 'Washington Manual / ACC-AHA'
},
{
  id: 'ccm-tox-003', spec: 'ccm', topic: 'Toxicology', difficulty: 'severe', type: 'case',
  stem: 'A patient with a beta-blocker overdose is bradycardic and hypotensive, unresponsive to atropine and fluids.',
  q: 'Beyond vasopressors, a specific therapy with strong support is:',
  o: [
    'High-dose insulin euglycaemia therapy (HIET), and glucagon',
    'Flumazenil',
    'N-acetylcysteine',
    'Sodium thiosulfate'
  ],
  a: 0,
  e: 'For beta-blocker (and calcium-channel-blocker) toxicity with shock: <strong>high-dose insulin euglycaemia therapy</strong> (improves myocardial glucose use and inotropy) is a key intervention, along with <strong>glucagon</strong> (bypasses the β-receptor to raise cAMP), calcium, vasopressors, and pacing; lipid emulsion and ECMO for refractory cases.',
  key: 'Beta-blocker/CCB shock: high-dose insulin euglycaemia therapy + glucagon + calcium + vasopressors.',
  pearl: 'HIET typically uses a large insulin bolus/infusion (e.g. ~1 unit/kg bolus then 0.5–1 unit/kg/h) with dextrose and close glucose/potassium monitoring.',
  src: 'Goldfrank / Washington Manual'
},
{
  id: 'ccm-tox-004', spec: 'ccm', topic: 'Toxicology', difficulty: 'moderate', type: 'case',
  stem: 'A patient rescued from a house fire has headache, confusion and a normal SpO₂ on the pulse oximeter but a metabolic acidosis; carboxyhaemoglobin is 28%.',
  q: 'Which statement is correct regarding carbon-monoxide poisoning?',
  o: [
    'The pulse oximeter accurately reflects the low true oxygen saturation',
    'A normal SpO₂ is falsely reassuring; give 100% oxygen (consider hyperbaric O₂ for severe cases)',
    'Carboxyhaemoglobin lowers SpO₂ proportionally',
    'Oxygen therapy is unnecessary if SpO₂ is normal'
  ],
  a: 1,
  e: 'Standard pulse oximetry reads carboxyhaemoglobin as oxyhaemoglobin, so <strong>SpO₂ is falsely normal</strong>. Treatment is <strong>high-flow 100% oxygen</strong> (shortens CO half-life from ~4–5 h to ~60–90 min); <strong>hyperbaric oxygen</strong> is considered for severe features (loss of consciousness, neurological signs, ischaemia, pregnancy, very high levels).',
  key: 'CO poisoning: SpO₂ falsely normal → 100% O₂; hyperbaric O₂ for severe cases.',
  pearl: 'Suspect concomitant <strong>cyanide</strong> toxicity in smoke inhalation with a high lactate and profound acidosis — treat empirically with hydroxocobalamin.',
  src: 'Goldfrank / Irwin & Rippe'
},
{
  id: 'ccm-ana-003', spec: 'ccm', topic: 'Anaphylaxis', difficulty: 'easy', type: 'direct',
  stem: '',
  q: 'The first-line drug and route in anaphylaxis with airway/breathing/circulation compromise is:',
  o: [
    'Intravenous hydrocortisone',
    'Intramuscular adrenaline (0.5 mg of 1:1000 in an adult), repeated as needed',
    'Oral antihistamine',
    'Nebulised salbutamol alone'
  ],
  a: 1,
  e: '<strong>Intramuscular adrenaline</strong> into the anterolateral thigh (0.5 mg = 0.5 mL of 1:1000 in adults) is first-line and life-saving, repeated every ~5 min as needed. Add oxygen, IV fluids for hypotension, and position supine (sitting up if breathing difficulty). Steroids and antihistamines are second-line and do not replace adrenaline.',
  key: 'Anaphylaxis → IM adrenaline first (0.5 mg 1:1000 in adults), repeat q5min; fluids + O₂.',
  pearl: 'Refractory anaphylaxis (esp. on beta-blockers) may need an adrenaline infusion and <strong>glucagon</strong>. Observe for a biphasic reaction and measure serum tryptase to confirm the diagnosis.',
  src: 'Resuscitation Council / WAO'
},

{
  id: "anaes-burn-001", spec: "anaes", topic: "Burns", difficulty: "easy", type: "direct",
  stem: "",
  q: "The Parkland formula for burn resuscitation in the first 24 hours is:",
  o: ["2 mL x kg x %TBSA of colloid","4 mL x kg x %TBSA of Ringer&rsquo;s lactate","4 mL x kg x %TBSA of 0.9% saline over 8 h","1 mL x kg x %TBSA of blood"],
  a: 1,
  e: "Parkland = <strong>4 mL x body weight (kg) x %TBSA</strong> of Ringer&rsquo;s lactate over 24 h, half in the first 8 h from the time of the burn, half over the next 16 h.",
  key: "Parkland 4 mL/kg/%TBSA RL; half in first 8 h; titrate to urine output.",
  pearl: "The formula is only a starting estimate &mdash; titrate to urine output 0.5&ndash;1 mL/kg/h (adult), 1&ndash;1.5 mL/kg/h (child).",
  src: "Miller / ATLS"
},
{
  id: "anaes-burn-002", spec: "anaes", topic: "Burns", difficulty: "easy", type: "direct",
  stem: "",
  q: "Only which burns are counted when calculating %TBSA for fluid resuscitation?",
  o: ["Superficial (epidermal) burns only","Partial- and full-thickness burns","Superficial burns and simple erythema","All areas of erythema"],
  a: 1,
  e: "Simple <strong>superficial (epidermal)</strong> burns with erythema alone are NOT included; only <strong>partial- and full-thickness</strong> burns count towards TBSA for fluids.",
  key: "Count only partial- and full-thickness burns in TBSA.",
  pearl: "Palm + fingers of the patient &asymp; 1% TBSA &mdash; a quick estimate for scattered burns.",
  src: "ATLS"
},
{
  id: "anaes-burn-003", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The most accurate method to estimate burn size in a child is:",
  o: ["Wallace rule of nines","Lund&ndash;Browder chart","Rule of fives","Palmar method only"],
  a: 1,
  e: "The <strong>Lund&ndash;Browder chart</strong> corrects for age-related body proportions (a child has a relatively larger head, smaller legs) and is most accurate in children.",
  key: "Lund&ndash;Browder = most accurate TBSA, especially in children.",
  pearl: "An infant&rsquo;s head is ~18% (vs 9% in an adult); the rule of nines overestimates limb area in children.",
  src: "Miller"
},
{
  id: "anaes-burn-004", spec: "anaes", topic: "Burns", difficulty: "severe", type: "direct",
  stem: "",
  q: "Regarding suxamethonium in a patient 3 weeks after a major burn, the correct statement is:",
  o: ["It is safe and preferred for rapid-sequence induction","It should be avoided due to hyperkalaemia from extrajunctional receptor up-regulation","It causes hypokalaemia","It is contraindicated only in the first 24 hours"],
  a: 1,
  e: "From about <strong>24&ndash;48 h up to ~1&ndash;2 years</strong>, proliferation of extrajunctional (immature) ACh receptors causes massive K&#8314; efflux with suxamethonium &rarr; hyperkalaemic cardiac arrest. In the first 24 h it is still considered safe.",
  key: "Avoid sux from ~24&ndash;48 h to 1&ndash;2 yr post-burn (hyperkalaemia); safe &lt;24 h.",
  pearl: "The same receptor up-regulation causes <strong>resistance to non-depolarisers</strong> &mdash; larger doses are needed; titrate to TOF.",
  src: "Miller / Morgan &amp; Mikhail"
},
{
  id: "anaes-burn-005", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A patient rescued from a house fire has SpO&#8322; 99% but is drowsy. The best explanation is:",
  o: ["Normal oxygenation, drowsiness is unrelated","Carbon monoxide poisoning &mdash; the pulse oximeter reads COHb as O&#8322;Hb","Cyanide has raised the SpO&#8322;","Methaemoglobinaemia lowering SpO&#8322;"],
  a: 1,
  e: "The pulse oximeter <strong>cannot distinguish carboxyhaemoglobin from oxyhaemoglobin</strong>, so SpO&#8322; is falsely normal in CO poisoning. Measure COHb by co-oximetry and give 100% O&#8322;.",
  key: "SpO&#8322; is falsely normal in CO poisoning; measure COHb by co-oximetry.",
  pearl: "100% O&#8322; cuts the CO half-life from ~4&ndash;5 h to ~1 h. Cyanide (burning plastics) &rarr; hydroxocobalamin.",
  src: "Miller"
},
{
  id: "anaes-burn-006", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The antidote for cyanide toxicity from combustion of plastics in a burns victim is:",
  o: ["Sodium bicarbonate","Hydroxocobalamin","N-acetylcysteine","Naloxone"],
  a: 1,
  e: "<strong>Hydroxocobalamin</strong> (&plusmn; sodium thiosulfate) is the antidote for cyanide-induced histotoxic hypoxia, which presents with lactic acidosis and a normal PaO&#8322;.",
  key: "Cyanide from plastic fires &rarr; hydroxocobalamin.",
  pearl: "Suspect cyanide with a high lactate and normal PaO&#8322; in an enclosed-space fire; it acts synergistically with CO.",
  src: "Morgan &amp; Mikhail"
},
{
  id: "anaes-burn-007", spec: "anaes", topic: "Burns", difficulty: "easy", type: "direct",
  stem: "",
  q: "A circumferential full-thickness burn of the limb causing distal ischaemia is treated with:",
  o: ["Immediate amputation","Escharotomy","Fasciotomy of the abdomen","Observation only"],
  a: 1,
  e: "A rigid circumferential eschar acts as a tourniquet &rarr; distal ischaemia. <strong>Escharotomy</strong> (incision through the full-thickness eschar) releases the constriction; a chest eschar impairing ventilation also needs escharotomy.",
  key: "Circumferential full-thickness burn &rarr; escharotomy.",
  pearl: "Escharotomies are usually painless (insensate full-thickness skin) but may bleed &mdash; watch for blood loss.",
  src: "ATLS"
},
{
  id: "anaes-burn-008", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The single most important intra-operative concern during burns excision and grafting, besides blood loss, is:",
  o: ["Hypertension","Hypothermia","Hyperglycaemia","Hypocapnia"],
  a: 1,
  e: "Loss of the skin barrier, large exposed surface and evaporative/radiant losses make <strong>hypothermia</strong> a dominant threat. Warm the theatre (28&ndash;32&deg;C), use fluid/blood warmers and forced-air warming.",
  key: "Warm everything &mdash; hypothermia is the dominant intra-op threat in burns surgery.",
  pearl: "Post the burns list <strong>first</strong>; aim to limit heat loss to ~1&deg;C from baseline.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-009", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "case",
  stem: "A 5-year-old with post-burn neck and peri-oral contractures presents for contracture release; mouth opening and neck extension are reduced.",
  q: "The most appropriate airway strategy is:",
  o: ["Standard IV induction with suxamethonium and immediate laryngoscopy","A planned difficult airway approach favouring inhalational induction with spontaneous ventilation and alternatives ready","Blind nasal intubation without preparation","Awake tracheostomy in all cases"],
  a: 1,
  e: "Contractures cause a difficult airway (reduced mouth opening &amp; neck movement). Prefer <strong>inhalational induction (maintaining spontaneous ventilation)</strong> with a difficult-airway cart and explicit A&ndash;B&ndash;C plans; suxamethonium is contraindicated in the healing burn.",
  key: "Contracture airway: inhalational induction, spontaneous ventilation, alternatives ready.",
  pearl: "Releasing the neck band under LA/ketamine first can restore neck extension &amp; mouth opening, converting a feared airway into a routine one.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-010", spec: "anaes", topic: "Burns", difficulty: "severe", type: "direct",
  stem: "",
  q: "During excision/grafting the surgeon uses adrenaline-soaked swabs. The main anaesthetic risk is:",
  o: ["Hypoglycaemia","Systemic absorption causing tachyarrhythmias, especially with volatile agents","Hyperkalaemia","Bradycardia"],
  a: 1,
  e: "Adrenaline reduces bleeding by local vasoconstriction but is systemically absorbed &rarr; <strong>tachycardia/arrhythmias</strong>, exaggerated with volatile agents that sensitise the myocardium. Communicate and monitor the ECG.",
  key: "Adrenaline swabs &rarr; tachyarrhythmia risk with volatiles; monitor ECG.",
  pearl: "Blood loss in excision/grafting can exceed 30 mL/kg &mdash; reserve blood and calculate the transfusion trigger in advance.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-011", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Monitoring difficulty in the acute burns patient includes all EXCEPT:",
  o: ["ECG electrodes not adhering to burnt skin","SpO&#8322; being unreliable in CO poisoning","NIBP cuff not fitting a burnt limb","Capnography being invalid under general anaesthesia"],
  a: 3,
  e: "Capnography remains valid and is essential. ECG electrodes may not stick (use staple/needle electrodes with crocodile clips), SpO&#8322; is unreliable with COHb, and the NIBP cuff may not fit &mdash; invasive arterial monitoring helps.",
  key: "Burnt-skin monitoring is hard (ECG, SpO&#8322;, NIBP) &mdash; but capnography stays valid.",
  pearl: "Use invasive arterial (IBP) monitoring for prolonged cases with major blood loss.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-012", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Extubation after a major burns/grafting procedure should be delayed if:",
  o: ["The patient is normothermic","There is significant airway oedema or blood loss exceeded 30 mL/kg","The surgery lasted under one hour","The patient is fully awake with intact reflexes"],
  a: 1,
  e: "Delay extubation (elective post-op ventilation) for <strong>airway oedema, blood loss &gt;30 mL/kg, or an extensive/prolonged procedure</strong>; otherwise extubate awake after full reversal and return of airway reflexes.",
  key: "Delay extubation for airway oedema, &gt;30 mL/kg loss, or extensive surgery.",
  pearl: "Awake extubation is preferred; provide O&#8322;, &plusmn; nasopharyngeal airway, monitoring and haemodynamic support post-op.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-013", spec: "anaes", topic: "Burns", difficulty: "easy", type: "direct",
  stem: "",
  q: "The three concentric zones of a burn wound described by Jackson are:",
  o: ["Necrosis, fibrosis, calcification","Coagulation, stasis, hyperaemia","Ischaemia, infarction, infection","Epidermal, dermal, subcutaneous"],
  a: 1,
  e: "Jackson&rsquo;s zones: central <strong>coagulation</strong> (irreversible), surrounding <strong>stasis</strong> (salvageable), and outer <strong>hyperaemia</strong> (recovers). Poor resuscitation converts the zone of stasis to necrosis, deepening the burn.",
  key: "Jackson: coagulation (central) &rarr; stasis (salvageable) &rarr; hyperaemia (outer).",
  pearl: "Good perfusion and avoiding hypoxia/hypotension salvage the zone of stasis.",
  src: "Miller"
},
{
  id: "anaes-burn-014", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The hypermetabolic (&ldquo;flow&rdquo;) phase after a major burn is characterised by:",
  o: ["Low cardiac output and hypometabolism","Hyperdynamic circulation with roughly doubled metabolic rate and catabolism","Reduced drug clearance and hypothermia only","Hypercoagulability without metabolic change"],
  a: 1,
  e: "After ~48 h the response shifts from the ebb (hypovolaemic) phase to the <strong>flow phase</strong>: hyperdynamic circulation, metabolic rate up to ~2x, catabolism, immunosuppression and sepsis risk, with altered drug handling.",
  key: "Flow phase (&gt;48 h): hyperdynamic, ~2x metabolic rate, catabolic.",
  pearl: "These patients are tachycardic, warm and fluid-hungry at baseline &mdash; and prone to hypothermia and infection.",
  src: "Miller"
},
{
  id: "anaes-burn-015", spec: "anaes", topic: "Burns", difficulty: "easy", type: "direct",
  stem: "",
  q: "A full-thickness burn is typically:",
  o: ["Blistered, moist and very painful","Charred/leathery, dry and insensate (painless)","Erythematous and blanching","Marbled but painful"],
  a: 1,
  e: "Full-thickness burns destroy all skin layers &rarr; <strong>charred/leathery/waxy, dry, insensate</strong> and non-blanching; they need excision and grafting and heal with contracture.",
  key: "Full-thickness = charred, dry, painless (insensate); needs grafting.",
  pearl: "Superficial partial = blisters &amp; very painful; deep partial = mottled/marbled and less painful.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-016", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Post-burn patients often have high opioid requirements because of:",
  o: ["Reduced pain perception","Tolerance from repeated exposure plus a neuropathic component","Renal failure alone","Hepatic failure alone"],
  a: 1,
  e: "Severe background/procedural pain, <strong>opioid tolerance</strong> from repeated surgeries and a neuropathic component drive high requirements. Use multimodal analgesia: opioids + ketamine + gabapentinoids + regional blocks.",
  key: "Burns pain: high opioid need + tolerance + neuropathic &rarr; multimodal analgesia.",
  pearl: "Ketamine, pregabalin/gabapentin and topical morphine are useful adjuncts.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-burn-017", spec: "anaes", topic: "Burns", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Which finding most strongly suggests inhalation injury requiring early intubation?",
  o: ["Isolated burn to the hand","Carbonaceous sputum, singed nasal hair and hoarseness after an enclosed-space fire","A superficial burn under 5% TBSA","Normal voice and clear chest"],
  a: 1,
  e: "Facial/neck burns, singed nasal hair, carbonaceous sputum, hoarseness/stridor and an enclosed-space fire indicate inhalation injury; progressive oedema mandates <strong>early intubation</strong> before the airway closes.",
  key: "Inhalation injury signs &rarr; intubate early with an uncut, adequately large ETT.",
  pearl: "A cut tube may retract as the face swells; a larger tube also allows later bronchoscopy/toilet.",
  src: "Miller"
},
{
  id: "anaes-burn-018", spec: "anaes", topic: "Burns", difficulty: "severe", type: "case",
  stem: "A ventilated adult 6 h after a 40% TBSA flame burn has rising airway pressures and a tense, distended abdomen; urine output has fallen despite large-volume crystalloid.",
  q: "The most likely complication is:",
  o: ["Tension pneumothorax","Abdominal compartment syndrome from over-resuscitation (&ldquo;fluid creep&rdquo;)","Anaphylaxis","Myocardial infarction"],
  a: 1,
  e: "Excessive fluid (&ldquo;fluid creep&rdquo;) causes visceral/soft-tissue oedema &rarr; <strong>abdominal compartment syndrome</strong> (rising airway pressure, oliguria, distension). Titrate to urine output rather than blindly following the formula.",
  key: "Over-resuscitation &rarr; abdominal compartment syndrome; titrate to urine output.",
  pearl: "Beware fluid creep: excessive crystalloid worsens oedema, extremity/abdominal compartment syndrome and pulmonary oedema.",
  src: "ATLS / Miller"
},
{
  id: "anaes-copd-001", spec: "anaes", topic: "COPD", difficulty: "easy", type: "direct",
  stem: "",
  q: "The spirometric criterion that confirms COPD is:",
  o: ["FEV&#8321;/FVC &gt; 0.8","Post-bronchodilator FEV&#8321;/FVC &lt; 0.70","Total lung capacity below predicted","A positive bronchodilator reversibility test"],
  a: 1,
  e: "COPD is confirmed by a <strong>post-bronchodilator FEV&#8321;/FVC &lt; 0.70</strong> (non-fully-reversible airflow obstruction) together with the clinical picture.",
  key: "COPD diagnosis: post-bronchodilator FEV&#8321;/FVC &lt; 0.70.",
  pearl: "GOLD grades severity by FEV&#8321; % predicted: 1 &ge;80, 2 50&ndash;79, 3 30&ndash;49, 4 &lt;30.",
  src: "GOLD"
},
{
  id: "anaes-copd-002", spec: "anaes", topic: "COPD", difficulty: "easy", type: "direct",
  stem: "",
  q: "The most dangerous intra-operative ventilatory problem in COPD is:",
  o: ["Hypocapnia","Dynamic hyperinflation / auto-PEEP","Hyperoxia","Low airway resistance"],
  a: 1,
  e: "Expiratory airflow limitation prevents complete exhalation &rarr; breath-stacking &rarr; <strong>dynamic hyperinflation (auto-PEEP)</strong>, which reduces venous return, causes hypotension and risks barotrauma.",
  key: "Auto-PEEP (dynamic hyperinflation) is the key COPD ventilation danger.",
  pearl: "Prioritise a long expiratory time (I:E ~1:3&ndash;1:5), low RR and low tidal volume.",
  src: "GOLD / case notes"
},
{
  id: "anaes-copd-003", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "To reduce auto-PEEP in a ventilated COPD patient you should:",
  o: ["Increase respiratory rate and tidal volume","Prolong the expiratory time (reduce RR / lengthen I:E) and treat bronchospasm","Add high external PEEP above intrinsic PEEP","Shorten the expiratory time"],
  a: 1,
  e: "Give the lungs <strong>more time to empty</strong>: reduce RR, lower tidal volume, lengthen expiration (I:E 1:3&ndash;1:5), shorten inspiratory time (higher peak flow) and treat bronchospasm.",
  key: "Reduce auto-PEEP: long expiratory time, low RR/TV, treat bronchospasm.",
  pearl: "Low external PEEP (~70&ndash;85% of measured intrinsic PEEP) can lower the trigger load; too much worsens hyperinflation.",
  src: "case notes"
},
{
  id: "anaes-copd-004", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Which inhalational/anaesthetic choices are best in COPD?",
  o: ["Desflurane and nitrous oxide","Sevoflurane; avoid desflurane and nitrous oxide","Halothane and N&#8322;O","Any agent, no difference"],
  a: 1,
  e: "<strong>Sevoflurane</strong> is a good bronchodilator; <strong>desflurane is an airway irritant</strong> (avoid) and <strong>N&#8322;O expands emphysematous bullae</strong> (avoid). Prefer non-histamine-releasing relaxants (vecuronium/rocuronium).",
  key: "COPD: sevoflurane good; avoid desflurane (irritant) &amp; N&#8322;O (bullae).",
  pearl: "Avoid morphine and barbiturates at induction (may provoke bronchospasm); propofol/ketamine are preferred.",
  src: "case notes"
},
{
  id: "anaes-copd-005", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The minimum smoke-free interval before which post-operative morbidity and mortality clearly fall is about:",
  o: ["12 hours","48 hours","8&ndash;12 weeks","24 hours"],
  a: 2,
  e: "CO/nicotine fall within 12&ndash;24 h and COHb normalises by 48&ndash;72 h, but a clear reduction in <strong>overall post-op morbidity and mortality</strong> requires roughly <strong>8&ndash;12 weeks</strong> of cessation.",
  key: "Clear post-op benefit needs ~8&ndash;12 weeks smoke-free.",
  pearl: "PFTs improve by 4&ndash;6 weeks; immune function/metabolism normalise by 6&ndash;8 weeks.",
  src: "case notes"
},
{
  id: "anaes-copd-006", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "case",
  stem: "A 63-year-old with COPD is scheduled for total laparoscopic hysterectomy.",
  q: "Why is this combination a &ldquo;double hit&rdquo; on respiratory mechanics?",
  o: ["Pneumoperitoneum improves compliance while COPD worsens it","Pneumoperitoneum &amp; Trendelenburg reduce FRC/compliance and cause CO&#8322; absorption, which COPD tolerates poorly","Laparoscopy avoids all respiratory effects","COPD improves under pneumoperitoneum"],
  a: 1,
  e: "CO&#8322; pneumoperitoneum raises intra-abdominal pressure (&darr; FRC, &darr; compliance) and adds a CO&#8322; load needing higher minute ventilation, while Trendelenburg further reduces lung volumes &mdash; a poor combination in COPD.",
  key: "COPD + laparoscopy = double hit; watch EtCO&#8322;, airway pressures, accept permissive hypercapnia.",
  pearl: "Keep insufflation pressure low, monitor EtCO&#8322;/airway pressures and do serial ABGs in long cases.",
  src: "case notes"
},
{
  id: "anaes-copd-007", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Regarding regional vs general anaesthesia in COPD:",
  o: ["GA is always safer","Regional is preferred where feasible but a sensory block above T6 impairs ventilation","Regional is contraindicated","Neither affects respiratory function"],
  a: 1,
  e: "<strong>Regional</strong> avoids airway manipulation and the pressor response, but a block <strong>above T6</strong> weakens accessory/abdominal muscles &rarr; &darr; ERV, PEFR, MVV and an ineffective cough &mdash; so titrate the level.",
  key: "Prefer regional in COPD; beware sensory levels above T6.",
  pearl: "Regional also reduces polypharmacy, opioid need, blood loss and DVT, and speeds recovery.",
  src: "case notes"
},
{
  id: "anaes-copd-008", spec: "anaes", topic: "COPD", difficulty: "easy", type: "direct",
  stem: "",
  q: "A patient smokes 20 cigarettes per day for 30 years. Their pack-year history is:",
  o: ["20 pack-years","30 pack-years","60 pack-years","600 pack-years"],
  a: 1,
  e: "Pack-years = (cigarettes/day x years) / 20 = (20 x 30)/20 = <strong>30 pack-years</strong>. The smoking index (SI) = cigs/day x years = 600.",
  key: "Pack-years = (cigs/day x years)/20; here 30.",
  pearl: "Greater pack-years correlate with more smoking-related disease and adverse peri-operative events.",
  src: "case notes"
},
{
  id: "anaes-copd-009", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A classic capnograph appearance during intra-operative bronchospasm is:",
  o: ["A square (box) waveform","A shark-fin, up-sloping expiratory upstroke","A flat line","A sudden drop to zero"],
  a: 1,
  e: "Bronchospasm slows expiratory gas emptying &rarr; a prolonged, <strong>up-sloping &ldquo;shark-fin&rdquo;</strong> capnograph, with rising airway pressure, wheeze/prolonged expiration and falling tidal volume/SpO&#8322;.",
  key: "Shark-fin capnograph + high airway pressure = bronchospasm.",
  pearl: "Differentials: light anaesthesia, endobronchial/ tube obstruction, aspiration, pneumothorax, anaphylaxis.",
  src: "case notes"
},
{
  id: "anaes-copd-010", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "First-line drug for intra-operative bronchospasm (non-anaphylactic) is:",
  o: ["IV adrenaline","Salbutamol (inhaled/nebulised) after deepening anaesthesia","IV furosemide","Neostigmine"],
  a: 1,
  e: "Deepen anaesthesia, give 100% O&#8322;, check the tube/circuit, then <strong>salbutamol</strong> (MDI &ge;6&ndash;8 puffs or nebulised 5 mg). Second line: hydrocortisone, ipratropium, magnesium, ketamine. Adrenaline is first-line only if anaphylaxis is suspected.",
  key: "Bronchospasm: deepen + salbutamol first; adrenaline only if anaphylaxis.",
  pearl: "Second-line: IV hydrocortisone 2 mg/kg, nebulised ipratropium, MgSO&#8324; ~2 g, ketamine.",
  src: "case notes"
},
{
  id: "anaes-copd-011", spec: "anaes", topic: "COPD", difficulty: "easy", type: "direct",
  stem: "",
  q: "The definition of chronic bronchitis is:",
  o: ["Cough for 1 month once","Productive cough for &ge;3 months in each of 2 successive years","Any wheeze","Permanent airspace enlargement"],
  a: 1,
  e: "Chronic bronchitis is a <strong>clinical</strong> definition: a chronic productive cough for &ge;3 months in each of 2 successive years, other causes excluded. Emphysema is a <strong>pathological</strong> definition (airspace enlargement + wall destruction).",
  key: "Chronic bronchitis = cough &ge;3 months x 2 years (clinical).",
  pearl: "Small-airway disease is the third component; most patients have a mix.",
  src: "GOLD"
},
{
  id: "anaes-copd-012", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "On CXR, features of COPD/emphysema include all EXCEPT:",
  o: ["Hyperinflation with flat diaphragms","Bullae","A tubular (narrow) heart","A globular enlarged heart with pulmonary venous congestion"],
  a: 3,
  e: "COPD shows hyperinflation (flat diaphragms, wide intercostal spaces, hyperlucent lungs), <strong>bullae</strong> (pneumothorax risk) and a <strong>tubular heart</strong>. A globular heart with pulmonary venous congestion suggests LV failure, not COPD.",
  key: "COPD CXR: hyperinflation, bullae, tubular heart.",
  pearl: "Bullae mean barotrauma risk &mdash; keep plateau pressure &lt;30 cmH&#8322;O and avoid N&#8322;O.",
  src: "case notes"
},
{
  id: "anaes-copd-013", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A bedside forced expiratory time (FET) that suggests obstructive lung disease is:",
  o: ["Less than 3 seconds","Greater than 6 seconds","Exactly 4 seconds","1 second"],
  a: 1,
  e: "Normal FET is 3&ndash;5 s; <strong>&gt;6 s indicates obstruction</strong> and &lt;3 s suggests a restrictive pattern. It is a simple bedside test of expiratory airflow limitation.",
  key: "FET &gt;6 s = obstructive; &lt;3 s = restrictive.",
  pearl: "Other bedside tests: Sabrasez breath-hold, single-breath count, Snider match test.",
  src: "case notes"
},
{
  id: "anaes-copd-014", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Ventilator settings that best limit dynamic hyperinflation in COPD are:",
  o: ["High tidal volume, high rate","Low tidal volume (6&ndash;8 mL/kg), low rate, prolonged expiration, permissive hypercapnia","High PEEP, short expiration","Large tidal volume with rapid rate"],
  a: 1,
  e: "Lung-protective COPD ventilation: <strong>low tidal volume, low RR, long expiratory time</strong>, plateau &lt;30 cmH&#8322;O and <strong>permissive hypercapnia</strong> (pH &gt;7.25). Pressure-controlled ventilation often gives better distribution.",
  key: "Low TV, low RR, long expiration, permissive hypercapnia (pH &gt;7.25).",
  pearl: "Detect air-trapping: an up-sloping capnograph and an expiratory flow that doesn&rsquo;t reach zero before the next breath.",
  src: "case notes"
},
{
  id: "anaes-copd-015", spec: "anaes", topic: "COPD", difficulty: "severe", type: "direct",
  stem: "",
  q: "Smoking induces cytochrome P450 (CYP1A2), most notably increasing dose requirements for:",
  o: ["Suxamethonium","Rocuronium and vecuronium","Atracurium","Local anaesthetics only"],
  a: 1,
  e: "CYP450 induction (maximal within ~24 h of smoking) increases requirements for CYP1A2/3A4 substrates, with the greatest effect on <strong>rocuronium and vecuronium</strong> (up to ~25% more), plus fentanyl, theophylline and ropivacaine.",
  key: "Smokers need up to ~25% more rocuronium/vecuronium (CYP1A2 induction).",
  pearl: "Enzyme induction is multifactorial with nicotine-induced neuromuscular-junction changes.",
  src: "case notes"
},
{
  id: "anaes-copd-016", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The major post-operative pulmonary complications in COPD include all EXCEPT:",
  o: ["Atelectasis","Retained secretions","Hypercapnic respiratory failure","Pulmonary embolism as the commonest"],
  a: 3,
  e: "The principal PPCs are <strong>atelectasis, retained secretions, hypercapnic respiratory failure, need for ventilatory support and pneumonia</strong>. PE is a concern but not the characteristic PPC of COPD.",
  key: "COPD PPCs: atelectasis, retained secretions, hypercapnic failure, pneumonia.",
  pearl: "Reduce PPCs with regional/minimally-invasive surgery, lung-protective ventilation, analgesia, incentive spirometry and early mobilisation.",
  src: "case notes"
},
{
  id: "anaes-copd-017", spec: "anaes", topic: "COPD", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Deep (rather than awake) extubation is sometimes chosen in COPD mainly to:",
  o: ["Speed theatre turnover","Avoid coughing/bronchospasm from an irritable airway","Reduce PONV","Allow earlier eating"],
  a: 1,
  e: "Extubating under a deeper plane avoids the <strong>bronchospasm/coughing</strong> provoked by extubating a lightly-anaesthetised, irritable airway. Caveats: neostigmine may provoke bronchospasm; aspiration/obstruction/hypoventilation risk.",
  key: "Deep extubation avoids bronchospasm; awake if severe COPD/CO&#8322; retention or aspiration risk.",
  pearl: "Bridge with NIV; use inhaled bronchodilator or IV lignocaine at extubation.",
  src: "case notes"
},
{
  id: "anaes-copd-018", spec: "anaes", topic: "COPD", difficulty: "easy", type: "direct",
  stem: "",
  q: "An absolute eosinophil count above ~300&ndash;350/mm&sup3; in COPD supports the use of:",
  o: ["Long-term antibiotics","Inhaled corticosteroids","Diuretics","Beta-blockers"],
  a: 1,
  e: "A higher blood <strong>eosinophil count</strong> predicts responsiveness to <strong>inhaled corticosteroids</strong> and guides step-up therapy in COPD.",
  key: "Eosinophils &gt;~300&ndash;350/mm&sup3; &rarr; favour inhaled corticosteroids.",
  pearl: "Maintenance is dual LABA + LAMA; anticholinergics are first-line (block vagal bronchoconstriction).",
  src: "case notes"
},
{
  id: "anaes-gs-001", spec: "anaes", topic: "Gastroschisis", difficulty: "easy", type: "direct",
  stem: "",
  q: "The key difference between gastroschisis and omphalocele is:",
  o: ["Gastroschisis has a covering sac; omphalocele does not","Gastroschisis has NO covering sac; omphalocele is covered by a sac","Both always have a sac","Neither involves the abdominal wall"],
  a: 1,
  e: "In <strong>gastroschisis the bowel is exposed with no sac</strong> (para-umbilical, usually right of the cord); in <strong>omphalocele the herniation is covered by a sac</strong> and carries more associated anomalies.",
  key: "Gastroschisis = no sac; omphalocele = sac + associated anomalies.",
  pearl: "Omphalocele associations: cardiac, chromosomal, Beckwith&ndash;Wiedemann, Pentalogy of Cantrell.",
  src: "Cot&eacute; / from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-002", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Which agent is specifically AVOIDED during gastroschisis repair?",
  o: ["Atracurium","Nitrous oxide","Sevoflurane","Fentanyl"],
  a: 1,
  e: "<strong>Nitrous oxide</strong> diffuses into the gut, distending the bowel and hindering reduction of the herniated viscera &mdash; it is avoided.",
  key: "Avoid N&#8322;O in gastroschisis (bowel distension hinders reduction).",
  pearl: "Also avoid vigorous mask positive-pressure ventilation (gastric/bowel distension); decompress the stomach first.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-003", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Criteria that mandate staged (silo) rather than primary closure include:",
  o: ["Intragastric/intravesical pressure &lt;5 cmH&#8322;O","Intragastric/intravesical pressure &gt;20 cmH&#8322;O, peak inspiratory pressure &gt;35 cmH&#8322;O, or EtCO&#8322; &gt;50 mmHg","Normal airway pressures","A soft abdomen with good perfusion"],
  a: 1,
  e: "Primary closure is abandoned for a <strong>silo</strong> if intragastric/intravesical pressure exceeds ~20 cmH&#8322;O, peak inspiratory pressure exceeds ~35 cmH&#8322;O, or EtCO&#8322; exceeds ~50 mmHg (or CVP/airway pressure rise, lower-limb congestion).",
  key: "Stage if intragastric/intravesical &gt;20, PIP &gt;35, or EtCO&#8322; &gt;50.",
  pearl: "A ventral hernia may deliberately be left to prevent abdominal compartment syndrome.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-004", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Forcing viscera into too small an abdomen causes abdominal compartment syndrome, whose features include:",
  o: ["Rising urine output and low airway pressures","Reduced venous return, oliguria/anuria, bowel ischaemia and rising airway pressures","Hypertension with brisk urine output","Improved lower-limb perfusion"],
  a: 1,
  e: "Raised intra-abdominal pressure &rarr; <strong>&darr; venous return and cardiac output, oliguria/anuria, bowel ischaemia/necrosis, hepatic congestion and rising airway pressures</strong>, with lower-body venous congestion.",
  key: "ACS: &darr; VR, oliguria, bowel ischaemia, high airway pressures.",
  pearl: "If these appear at closure, ask the surgeon to place a silo &mdash; a tight abdomen kills bowel and kidneys.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-005", spec: "anaes", topic: "Gastroschisis", difficulty: "easy", type: "direct",
  stem: "",
  q: "The initial management of the exposed bowel before surgery is to:",
  o: ["Leave it open to air","Cover it (bowel bag / cling film / warm saline gauze) and decompress the stomach","Apply dry gauze and reduce heating","Immerse the neonate in cold saline"],
  a: 1,
  e: "Cover the exposed bowel to limit <strong>heat and fluid loss</strong> and prevent ischaemia, pass a <strong>nasogastric/orogastric tube</strong> to decompress, and resuscitate with warmed fluids.",
  key: "Cover the bowel + NG decompression + warm fluid resuscitation.",
  pearl: "Titrate fluids to a urine output of 1&ndash;2 mL/kg/h; correct acidosis, hypovolaemia and haemoconcentration.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-006", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "case",
  stem: "A 2-day-old with gastroschisis is significantly hypovolaemic and acidotic and needs large-volume resuscitation before theatre.",
  q: "The most appropriate induction plan is:",
  o: ["Gas induction with spontaneous ventilation and no airway protection","Rapid-sequence induction after stomach decompression, avoiding excessive mask ventilation and N&#8322;O","Awake fibreoptic intubation routinely","Regional anaesthesia alone"],
  a: 1,
  e: "Treat as a full stomach: <strong>RSI</strong> with the stomach already decompressed, avoid vigorous mask PPV and avoid N&#8322;O; atracurium is a good relaxant; target SpO&#8322; ~95% (avoid hyperoxia in preterm).",
  key: "Gastroschisis induction: RSI, decompress stomach, avoid PPV &amp; N&#8322;O.",
  pearl: "A very sick, hypovolaemic neonate is best electively intubated and stabilised before transfer.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-007", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The muscle relaxant often preferred in the neonate for gastroschisis is:",
  o: ["Suxamethonium infusion","Atracurium (organ-independent Hofmann elimination)","Pancuronium","No relaxant at all"],
  a: 1,
  e: "<strong>Atracurium</strong> undergoes Hofmann elimination (organ-independent), useful in a neonate with immature/uncertain organ function and possible acidosis.",
  key: "Atracurium is a good neonatal relaxant (Hofmann elimination).",
  pearl: "Extreme vigilance and invasive monitoring (incl. intragastric/intravesical pressure) are recommended.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-008", spec: "anaes", topic: "Gastroschisis", difficulty: "easy", type: "direct",
  stem: "",
  q: "After a tight abdominal closure for gastroschisis, most neonates are:",
  o: ["Extubated immediately on the table","Left intubated for elective post-operative ventilation","Given regional anaesthesia only","Discharged the same day"],
  a: 1,
  e: "Tight closure reduces compliance, so the neonate is usually <strong>left intubated for elective post-operative ventilation</strong> and weaned in the NICU.",
  key: "Gastroschisis: usually left intubated post-op (tight closure &rarr; &darr; compliance).",
  pearl: "Continue warming, glucose control, analgesia and surveillance for compartment syndrome and sepsis.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-009", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Intra-operative fluid management in gastroschisis typically involves:",
  o: ["No maintenance fluid","Dextrose-containing maintenance plus generous replacement of large third-space losses, titrated to urine output","Only blood products","Restriction to avoid any fluid"],
  a: 1,
  e: "Give <strong>dextrose-containing maintenance</strong> (prevent hypoglycaemia) and replace large <strong>third-space losses</strong> (often ~8&ndash;15 mL/kg/h of crystalloid), titrated to perfusion and urine output, while avoiding overload that worsens bowel oedema.",
  key: "Dextrose maintenance + generous third-space replacement; avoid overload.",
  pearl: "Replace blood to Hb ~10&ndash;12 g/dL; FFP in ~10 mL/kg aliquots as needed.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-010", spec: "anaes", topic: "Gastroschisis", difficulty: "easy", type: "direct",
  stem: "",
  q: "Neonates with gastroschisis are especially prone to:",
  o: ["Hyperthermia and hyperglycaemia","Hypothermia and hypoglycaemia","Hypertension","Polycythaemia only"],
  a: 1,
  e: "A preterm/SGA neonate with exposed bowel loses heat and has small glycogen stores &rarr; prone to <strong>hypothermia and hypoglycaemia</strong>; a PDA may reopen with hypoxia/acidosis.",
  key: "Gastroschisis neonate: watch hypothermia &amp; hypoglycaemia.",
  pearl: "Screen for associated anomalies, especially with cardiac evaluation.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-011", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Compared with gastroschisis, omphalocele is more strongly associated with:",
  o: ["Bowel atresia only","Chromosomal and cardiac anomalies","Prematurity as the dominant feature","No anomalies at all"],
  a: 1,
  e: "<strong>Omphalocele</strong> carries a high rate of associated <strong>chromosomal (trisomies) and cardiac anomalies</strong>, Beckwith&ndash;Wiedemann and Pentalogy of Cantrell; gastroschisis has fewer syndromic associations but more bowel-related problems.",
  key: "Omphalocele &rarr; more chromosomal/cardiac anomalies; gastroschisis &rarr; bowel problems.",
  pearl: "Always evaluate the heart before anaesthesia in a covered abdominal-wall defect.",
  src: "Cot&eacute;"
},
{
  id: "anaes-gs-012", spec: "anaes", topic: "Gastroschisis", difficulty: "severe", type: "direct",
  stem: "",
  q: "Intra-operative signs suggesting the abdomen is being closed too tightly include:",
  o: ["Falling airway pressure and rising SpO&#8322;","Rising airway pressure, falling BP and SpO&#8322;, lower-limb mottling and oliguria","Bradycardia with hypertension","A rise in urine output"],
  a: 1,
  e: "A too-tight closure produces <strong>rising airway pressures, falling BP/SpO&#8322;, lower-limb mottling/cyanosis and oliguria</strong> &mdash; the intra-operative picture of abdominal compartment syndrome; convert to a silo.",
  key: "Tight closure signs: &uarr; airway pressure, &darr; BP/SpO&#8322;, LL mottling, oliguria &rarr; silo.",
  pearl: "Monitoring intragastric/intravesical pressure quantifies the decision to stage.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-013", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Premedication with an anxiolytic in a neonate for gastroschisis is:",
  o: ["Essential in all cases","Not needed","Given orally 2 h before","Given as intranasal dexmedetomidine routinely"],
  a: 1,
  e: "Anti-anxiety premedication is <strong>not needed</strong> in the neonate. The priorities are decompression, resuscitation, warming and glucose control.",
  key: "No anxiolytic premed needed in the neonate.",
  pearl: "Aspiration prophylaxis and stomach decompression matter far more than sedation.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-014", spec: "anaes", topic: "Gastroschisis", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A recognised late/serious complication after gastroschisis repair is:",
  o: ["Necrotising enterocolitis and sepsis","Hyperthyroidism","Diabetes insipidus","Cataract"],
  a: 0,
  e: "Complications include <strong>necrotising enterocolitis, sepsis, bowel necrosis/perforation, prolonged ileus and TPN dependence</strong>, plus abdominal compartment syndrome and hepatic impairment.",
  key: "Gastroschisis complications: NEC, sepsis, bowel necrosis, prolonged ileus.",
  pearl: "Ongoing NICU surveillance for compartment syndrome, feeding tolerance and infection is essential.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-gs-015", spec: "anaes", topic: "Gastroschisis", difficulty: "easy", type: "direct",
  stem: "",
  q: "Gastroschisis is best described as:",
  o: ["An elective condition managed at 1 year","A neonatal emergency requiring urgent surgery","A condition needing no surgery","A purely cosmetic problem"],
  a: 1,
  e: "Because the bowel is exposed with no protective sac, gastroschisis is a <strong>neonatal emergency requiring urgent surgery</strong>, and staged closure is often needed.",
  key: "Gastroschisis = neonatal surgical emergency.",
  pearl: "Urgency is driven by heat/fluid loss, bowel ischaemia and infection risk from the uncovered viscera.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-001", spec: "anaes", topic: "Robotic Surgery", difficulty: "easy", type: "direct",
  stem: "",
  q: "The position used for robot-assisted radical prostatectomy is:",
  o: ["Prone jack-knife","Steep Trendelenburg (head-down)","Left lateral","Reverse Trendelenburg"],
  a: 1,
  e: "Robotic pelvic surgery uses <strong>steep Trendelenburg</strong> with CO&#8322; pneumoperitoneum, which drives the characteristic cardiovascular, respiratory, cerebral and ocular effects.",
  key: "RARP = steep Trendelenburg + CO&#8322; pneumoperitoneum.",
  pearl: "The magnet-like combination raises myocardial demand, lowers compliance and raises ICP/IOP.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-002", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A signature complication of prolonged steep Trendelenburg in robotic surgery is:",
  o: ["Post-operative visual loss (ischaemic optic neuropathy)","Foot drop","Femoral nerve palsy","Renal calculi"],
  a: 0,
  e: "Rising intra-ocular pressure and orbital/ocular venous congestion during prolonged steep head-down tilt reduce optic-nerve perfusion &rarr; <strong>post-operative visual loss (POVL)</strong>.",
  key: "POVL = the signature ocular hazard of steep Trendelenburg.",
  pearl: "Mitigate: limit tilt duration, avoid hypotension/anaemia, restrictive fluids, protect the eyes.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-003", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The cardiovascular effect of steep Trendelenburg plus pneumoperitoneum is typically:",
  o: ["&darr; preload, &darr; CO","&uarr; venous return &rarr; &uarr; CO and &uarr; SVR &rarr; &uarr; myocardial O&#8322; demand","&darr; SVR with bradycardia","No haemodynamic change"],
  a: 1,
  e: "Head-down tilt increases venous return (&uarr; preload &rarr; &uarr; CO) and pneumoperitoneum/sympathetic stimulation raises SVR &rarr; <strong>&uarr; myocardial O&#8322; demand</strong>, which can precipitate ischaemia in coronary disease.",
  key: "Steep T-burg + pneumoperitoneum &rarr; &uarr; CO, &uarr; SVR, &uarr; myocardial demand.",
  pearl: "Very high intra-abdominal pressure or hypovolaemia can conversely reduce venous return.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-004", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Why is total patient immobility mandatory once the robot is docked?",
  o: ["To reduce anaesthetic requirements","Because patient movement while the arms are locked can cause visceral injury","To improve venous return","To speed emergence"],
  a: 1,
  e: "The instruments are fixed to the docked arms; if the <strong>patient moves</strong>, the instruments can lacerate viscera. Ensure deep neuromuscular block and adequate anaesthetic depth throughout.",
  key: "Docked robot &rarr; total immobility mandatory (movement = visceral injury).",
  pearl: "Access to the patient and airway is severely restricted once docked &mdash; agree an emergency undock signal.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-005", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Intra-operative fluid strategy in robot-assisted prostatectomy is usually:",
  o: ["Liberal from the start","Restrictive until the urethral anastomosis is complete","Blood only","Guided solely by urine output"],
  a: 1,
  e: "Fluids are kept <strong>restrictive until the urethral anastomosis</strong> is done &mdash; this reduces airway/facial oedema and urine production (a wet field obscures the anastomosis); fluid can be given more freely afterwards.",
  key: "Restrictive fluids until the anastomosis; liberalise afterwards.",
  pearl: "Restrictive fluids also reduce the risk of POVL and airway oedema.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-006", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "case",
  stem: "After positioning a patient in steep Trendelenburg with pneumoperitoneum for RARP, oxygen saturation falls and the left chest is quiet.",
  q: "The most likely cause is:",
  o: ["Anaphylaxis","Endobronchial migration of the ETT from cephalad carinal shift","Pulmonary embolism","Malignant hyperthermia"],
  a: 1,
  e: "The steep tilt and pneumoperitoneum push the carina cephalad, causing <strong>endobronchial migration</strong> of a previously well-placed ETT; re-auscultate for bilateral air entry after positioning/insufflation and withdraw the tube if needed.",
  key: "Re-check the ETT after positioning &mdash; endobronchial migration is common.",
  pearl: "Always auscultate again after steep Trendelenburg and after CO&#8322; insufflation.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-007", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Relative contraindications to steep Trendelenburg / pneumoperitoneum robotic surgery include all EXCEPT:",
  o: ["Raised intracranial pressure","Glaucoma / raised IOP","Severe cardiac or respiratory disease","Well-controlled mild hypertension"],
  a: 3,
  e: "Relative contraindications are conditions poorly tolerating the position/insufflation: <strong>raised ICP, glaucoma, severe cardiac or respiratory disease, morbid obesity</strong>. Mild controlled hypertension is not a contraindication.",
  key: "Contra-indications: raised ICP, glaucoma, severe cardiac/resp disease, morbid obesity.",
  pearl: "Such patients may be better served by open surgery.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-008", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "To blunt the sympathetic/pressor response to pneumoperitoneum, useful agents include:",
  o: ["Nitroglycerine, propofol or dexmedetomidine","Atropine","Suxamethonium","Neostigmine"],
  a: 0,
  e: "Insufflation causes a catecholamine surge &rarr; hypertension/tachycardia; <strong>nitroglycerine (0.5&ndash;2 &micro;g/kg/min), propofol or dexmedetomidine</strong> help control it.",
  key: "Blunt insufflation pressor response: NTG, propofol, dexmedetomidine.",
  pearl: "Add an arterial line for beat-to-beat monitoring if bleeding risk is high.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-009", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Before extubation after prolonged steep Trendelenburg robotic surgery, you should specifically check for:",
  o: ["Hypoglycaemia","Airway / laryngeal oedema (e.g. cuff-leak test)","Hyperkalaemia","Corneal reflex only"],
  a: 1,
  e: "Prolonged head-down tilt causes facial/laryngeal oedema; before extubation <strong>rule out airway oedema</strong> (consider a cuff-leak test) and ensure adequate reversal of the deep block used for immobility.",
  key: "Check for airway/laryngeal oedema before extubation after steep T-burg.",
  pearl: "Some patients need post-op ventilation (hypercarbia history, laryngeal oedema, cerebral oedema).",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-010", spec: "anaes", topic: "Robotic Surgery", difficulty: "easy", type: "direct",
  stem: "",
  q: "Eye protection and padding of bony prominences in robotic surgery are critical because:",
  o: ["They can be adjusted any time","They cannot be adjusted once the robot is docked and the patient is inaccessible","The eyes are not at risk","Padding worsens access"],
  a: 1,
  e: "Once docked, the patient is inaccessible; <strong>eye protection and padding must be perfect beforehand</strong> to prevent corneal abrasion, pressure injury and brachial-plexus injury from shoulder supports.",
  key: "Pad/protect before docking &mdash; nothing can be adjusted afterwards.",
  pearl: "Avoid direct brachial-plexus pressure from shoulder braces used against the steep tilt.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-011", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The respiratory effect of pneumoperitoneum with steep Trendelenburg is:",
  o: ["&uarr; FRC and &uarr; compliance","&darr; FRC, &darr; compliance, &uarr; airway pressures with CO&#8322; absorption","No change in compliance","Reduced airway pressures"],
  a: 1,
  e: "The diaphragm is pushed cephalad &rarr; <strong>&darr; FRC, &darr; compliance, &uarr; airway pressures</strong>, basal atelectasis and hypercarbia from CO&#8322; absorption; increase minute ventilation and use PEEP.",
  key: "Robotic pelvic surgery: &darr; FRC/compliance, &uarr; airway pressure, hypercarbia.",
  pearl: "Use lung-protective ventilation (TV 6&ndash;8 mL/kg + PEEP) and manage the CO&#8322; load.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-012", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A sudden fall in EtCO&#8322; with hypotension and desaturation during CO&#8322; insufflation should raise suspicion of:",
  o: ["Light anaesthesia","CO&#8322; (gas) embolism","Hyperthermia","Hypoglycaemia"],
  a: 1,
  e: "A sudden <strong>fall in EtCO&#8322;</strong> with cardiovascular collapse during insufflation suggests <strong>CO&#8322; gas embolism</strong> &mdash; stop insufflation, 100% O&#8322;, head-down left-lateral, aspirate from a central line if present, and support the circulation.",
  key: "Sudden &darr; EtCO&#8322; + collapse during insufflation = gas embolism.",
  pearl: "Other CO&#8322; complications: subcutaneous emphysema, pneumothorax, pneumomediastinum.",
  src: "Miller"
},
{
  id: "anaes-rob-013", spec: "anaes", topic: "Robotic Surgery", difficulty: "easy", type: "direct",
  stem: "",
  q: "Anaesthetic challenges specific to the docked-robot environment include all EXCEPT:",
  o: ["Restricted access to the patient and airway","Need for long IV lines and breathing circuits","Difficult communication with the console surgeon","Easy repositioning of the patient during surgery"],
  a: 3,
  e: "Repositioning is NOT easy once docked &mdash; that is precisely the problem. The other three (restricted access, long lines/circuits, harder communication) are all real robotic challenges.",
  key: "Robotic environment: restricted access, long lines, hard communication, no repositioning.",
  pearl: "Secure and check all lines and the airway before docking.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-014", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A typical induction for robotic prostatectomy in Dr. Tanya&rsquo;s notes is:",
  o: ["Sevoflurane gas induction alone","Propofol 1&ndash;2 mg/kg + fentanyl 1&ndash;2 &micro;g/kg + a non-depolariser, then ETT","Ketamine + suxamethonium","Regional anaesthesia alone"],
  a: 1,
  e: "Induction: <strong>propofol 1&ndash;2 mg/kg + fentanyl 1&ndash;2 &micro;g/kg + a non-depolariser (vecuronium/atracurium/rocuronium)</strong>, secure the airway with an ETT, pass an orogastric tube to reduce aspiration, and pad/position carefully.",
  key: "RARP induction: propofol + fentanyl + NDMR &rarr; ETT.",
  pearl: "Avoid long-acting sedatives; maintain with sevoflurane in O&#8322;/air.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-rob-015", spec: "anaes", topic: "Robotic Surgery", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Pneumoperitoneum affects the kidneys during robotic surgery by:",
  o: ["Increasing urine output markedly","Reducing renal perfusion and urine output","Having no renal effect","Causing immediate renal failure in all patients"],
  a: 1,
  e: "Raised intra-abdominal pressure compresses the renal vessels and raises ADH &rarr; <strong>&darr; renal perfusion and &darr; urine output</strong>, with a small risk of renal injury; oliguria intra-op is expected and not by itself an indication for fluid loading.",
  key: "Pneumoperitoneum &rarr; &darr; renal perfusion &amp; urine output.",
  pearl: "This supports the restrictive-fluid strategy until the anastomosis is complete.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-avf-001", spec: "anaes", topic: "AV Fistula", difficulty: "easy", type: "direct",
  stem: "",
  q: "The commonest peri-operative electrolyte danger in a patient for AV fistula creation is:",
  o: ["Hypocalcaemia","Hyperkalaemia","Hypernatraemia","Hypomagnesaemia"],
  a: 1,
  e: "<strong>Hyperkalaemia</strong> is the key peri-operative danger in end-stage renal disease; check K&#8314;, dialyse pre-op if elevated, avoid K&#8314;-rich fluids and avoid suxamethonium if already hyperkalaemic.",
  key: "ESRD peri-op: hyperkalaemia is the main danger.",
  pearl: "Watch the ECG for peaked T-waves; suxamethonium raises K&#8314; by ~0.5 mmol/L.",
  src: "Stoelting"
},
{
  id: "anaes-avf-002", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The anaesthetic technique often preferred for AV fistula creation is:",
  o: ["General anaesthesia with an ETT in all cases","A brachial plexus block","Spinal anaesthesia","Deep sedation without a block"],
  a: 1,
  e: "A <strong>brachial plexus block</strong> avoids GA in a comorbid ESRD patient, provides post-op analgesia and produces a <strong>sympathectomy</strong> (vasodilation) that may improve fistula flow and maturation.",
  key: "Brachial plexus block is the near-ideal AV fistula technique.",
  pearl: "Options: supraclavicular/infraclavicular/axillary; ultrasound improves success and safety.",
  src: "Miller"
},
{
  id: "anaes-avf-003", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The benefit of the block-induced sympathectomy in AV fistula surgery is:",
  o: ["Reduced bleeding only","Vasodilation increasing vessel diameter and blood flow, aiding fistula maturation and patency","Faster wound healing only","Reduced infection"],
  a: 1,
  e: "Sympathetic block causes <strong>vasodilation</strong> &rarr; larger vessel diameter and higher blood flow &rarr; may improve early <strong>fistula maturation and patency</strong> &mdash; a unique advantage of regional over general.",
  key: "Block sympathectomy &rarr; vasodilation &rarr; better fistula flow/maturation.",
  pearl: "This is one reason regional is favoured over GA for vascular access surgery.",
  src: "Miller"
},
{
  id: "anaes-avf-004", spec: "anaes", topic: "AV Fistula", difficulty: "severe", type: "direct",
  stem: "",
  q: "The safest muscle relaxant in end-stage renal disease is:",
  o: ["Vecuronium","Atracurium or cisatracurium (Hofmann elimination)","Pancuronium","Rocuronium high-dose"],
  a: 1,
  e: "<strong>Atracurium / cisatracurium</strong> undergo organ-independent Hofmann elimination, avoiding accumulation in renal failure; vecuronium and rocuronium have prolonged/variable duration &mdash; use TOF monitoring.",
  key: "Renal failure relaxant of choice: atracurium/cisatracurium (Hofmann).",
  pearl: "Avoid drugs with renally-cleared active metabolites; monitor neuromuscular function.",
  src: "Stoelting"
},
{
  id: "anaes-avf-005", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Which opioids are best AVOIDED in significant renal failure?",
  o: ["Fentanyl","Morphine (M6G accumulation) and pethidine (normeperidine &rarr; seizures)","Remifentanil","Alfentanil"],
  a: 1,
  e: "<strong>Morphine</strong> (active metabolite morphine-6-glucuronide accumulates) and <strong>pethidine</strong> (normeperidine causes seizures) accumulate in renal failure; fentanyl/remifentanil are safer, titrated to effect.",
  key: "Avoid morphine &amp; pethidine in renal failure; prefer fentanyl.",
  pearl: "Acidosis and hypoalbuminaemia raise free drug fractions &mdash; titrate carefully.",
  src: "Stoelting"
},
{
  id: "anaes-avf-006", spec: "anaes", topic: "AV Fistula", difficulty: "easy", type: "direct",
  stem: "",
  q: "On the arm bearing the fistula (or reserved for future access), you should:",
  o: ["Place the NIBP cuff there","Avoid any BP cuff, IV cannula or venepuncture","Always cannulate for reliable access","Use it for arterial sampling"],
  a: 1,
  e: "The access limb is the patient&rsquo;s lifeline: place <strong>no NIBP cuff, no cannula and no venepuncture</strong> on the fistula/future-access arm; use the opposite arm or a foot.",
  key: "Never put a cuff/cannula on the fistula (access) arm.",
  pearl: "Document the protected arm and hand over the instructions post-op.",
  src: "Morgan &amp; Mikhail"
},
{
  id: "anaes-avf-007", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The ideal timing of dialysis before AV fistula surgery is:",
  o: ["Immediately before, on the morning of surgery","About 24 hours before","A week before","Never before surgery"],
  a: 1,
  e: "Dialyse <strong>~24 h before</strong> to correct potassium, volume and acidosis. Dialysing <strong>immediately before</strong> leaves residual heparin, acute fluid shifts and relative hypovolaemia/hypokalaemia.",
  key: "Dialyse ~24 h before &mdash; not immediately before.",
  pearl: "Re-check K&#8314;, acid&ndash;base, Hb, coagulation and dry weight before theatre.",
  src: "Stoelting"
},
{
  id: "anaes-avf-008", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "case",
  stem: "A patient is anaesthetised for a radiocephalic fistula; intra-operatively the blood pressure drifts down.",
  q: "Why is maintaining perfusion pressure particularly important here?",
  o: ["Hypotension improves fistula flow","Hypotension risks thrombosis of the newly-formed fistula","Blood pressure does not affect the fistula","Only oxygenation matters"],
  a: 1,
  e: "A newly-created fistula can <strong>thrombose if perfusion pressure falls</strong>; maintain blood pressure and perfusion, avoid vasoconstrictors around the fistula and keep the patient warm.",
  key: "Avoid hypotension &mdash; it thromboses a new fistula.",
  pearl: "Confirm a good thrill/bruit at the end of surgery.",
  src: "Miller"
},
{
  id: "anaes-avf-009", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Suxamethonium in an ESRD patient for fistula surgery:",
  o: ["Lowers potassium","Raises serum potassium by ~0.5 mmol/L and is avoided if the patient is already hyperkalaemic","Has no effect on potassium","Is always absolutely contraindicated in renal failure"],
  a: 1,
  e: "A single dose of <strong>suxamethonium raises K&#8314; by ~0.5 mmol/L</strong>; it is avoided if the patient is <strong>already hyperkalaemic</strong>, but is not absolutely contraindicated in renal failure per se if K&#8314; is normal.",
  key: "Sux raises K&#8314; ~0.5; avoid if already hyperkalaemic.",
  pearl: "Check the pre-op potassium and dialysis status before choosing suxamethonium.",
  src: "Stoelting"
},
{
  id: "anaes-avf-010", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A late complication of an AV fistula causing distal hand ischaemia is:",
  o: ["High-output cardiac failure","Steal syndrome","Fistula thrombosis","Infection"],
  a: 1,
  e: "<strong>Steal syndrome</strong> is diversion of arterial blood through the low-resistance fistula, causing distal limb ischaemia (pain, coolness, pallor); it may need banding or revision.",
  key: "Steal syndrome = distal ischaemia from diverted flow.",
  pearl: "A large, high-flow fistula can also cause high-output cardiac failure over time.",
  src: "Miller"
},
{
  id: "anaes-avf-011", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The bleeding tendency in ESRD is mainly due to:",
  o: ["Thrombocytopenia only","Uraemic platelet dysfunction (&plusmn; residual heparin/anticoagulants)","Vitamin K deficiency","Haemophilia"],
  a: 1,
  e: "<strong>Uraemic platelet dysfunction</strong> is the main cause, compounded by residual heparin from recent dialysis and other anticoagulants; DDAVP can be considered if bleeding.",
  key: "ESRD bleeding = uraemic platelet dysfunction (&plusmn; heparin).",
  pearl: "This also raises the bleeding risk of deep regional blocks &mdash; weigh the risk.",
  src: "Stoelting"
},
{
  id: "anaes-avf-012", spec: "anaes", topic: "AV Fistula", difficulty: "easy", type: "direct",
  stem: "",
  q: "The anaemia of chronic kidney disease is usually:",
  o: ["Acute and poorly tolerated","Chronic and well-compensated (right-shifted ODC via &uarr; 2,3-DPG)","Always requiring transfusion before surgery","Due to iron overload"],
  a: 1,
  e: "CKD anaemia is <strong>chronic and well-compensated</strong> (increased 2,3-DPG right-shifts the ODC, aiding O&#8322; unloading); avoid unnecessary transfusion, which can sensitise a future transplant recipient.",
  key: "CKD anaemia: chronic, compensated; avoid needless transfusion.",
  pearl: "Erythropoietin therapy usually maintains an acceptable haemoglobin.",
  src: "Stoelting"
},
{
  id: "anaes-avf-013", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Local anaesthetic dosing for a brachial plexus block in a uraemic patient should be:",
  o: ["Increased because clearance is fast","Kept to the lowest effective dose because acidosis/hypoalbuminaemia raise the free fraction","Unchanged from normal","Doubled for reliable block"],
  a: 1,
  e: "Uraemia, acidosis and hypoalbuminaemia <strong>increase the free LA fraction</strong> and may shorten block duration and lower the LAST threshold &mdash; use the <strong>lowest effective dose</strong> and ultrasound guidance.",
  key: "Use the lowest effective LA dose in uraemia (higher free fraction).",
  pearl: "Uraemic platelet dysfunction also raises the bleeding risk of deep blocks.",
  src: "Miller"
},
{
  id: "anaes-avf-014", spec: "anaes", topic: "AV Fistula", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Autonomic neuropathy in the diabetic ESRD patient contributes to:",
  o: ["Stable blood pressure","Labile blood pressure and blunted compensatory responses","Resistance to all anaesthetic agents","Reduced aspiration risk"],
  a: 1,
  e: "<strong>Autonomic neuropathy</strong> causes labile blood pressure and blunted compensation; with delayed gastric emptying it also increases aspiration risk &mdash; both favour a careful regional technique.",
  key: "Autonomic neuropathy &rarr; labile BP + aspiration risk.",
  pearl: "Delayed gastric emptying (uraemia, diabetes, autonomic) means treat as higher aspiration risk if GA is needed.",
  src: "Stoelting"
},
{
  id: "anaes-avf-015", spec: "anaes", topic: "AV Fistula", difficulty: "easy", type: "direct",
  stem: "",
  q: "The commonest wrist AV fistula for haemodialysis is the:",
  o: ["Brachiobasilic transposition","Radiocephalic (Brescia&ndash;Cimino) fistula","Femoral loop graft","Snuffbox graft only"],
  a: 1,
  e: "The <strong>radiocephalic (Brescia&ndash;Cimino)</strong> fistula at the wrist is the classic first-choice autogenous access; a brachiocephalic fistula at the elbow is the next option.",
  key: "Radiocephalic (Brescia&ndash;Cimino) is the classic wrist fistula.",
  pearl: "Autogenous fistulae are preferred over grafts for patency and lower infection rates.",
  src: "Miller"
},
{
  id: "anaes-mri-001", spec: "anaes", topic: "MRI", difficulty: "easy", type: "direct",
  stem: "",
  q: "The signature lethal hazard of the MRI environment is:",
  o: ["Radiation exposure","The ferromagnetic projectile (missile) effect","Electric shock","Ultrasound heating"],
  a: 1,
  e: "Any ferromagnetic object near the magnet is drawn in as a <strong>lethal projectile</strong> (steel cylinders, laryngoscopes, scissors, pumps). Rigorous screening and MR-safe/conditional equipment are the defence.",
  key: "Projectile effect = the signature MRI danger.",
  pearl: "Use aluminium gas cylinders and never take unchecked kit into the magnet room (Zone IV).",
  src: "AAGBI / ACR"
},
{
  id: "anaes-mri-002", spec: "anaes", topic: "MRI", difficulty: "easy", type: "direct",
  stem: "",
  q: "The MRI static magnetic field is:",
  o: ["Only on during scanning","Always on, even when no scan is running","Switched off between patients","Off when the console is off"],
  a: 1,
  e: "The static field is <strong>always on</strong> &mdash; it cannot be switched off for an emergency (only a costly, hazardous quench de-energises it). Treat the field as permanently live.",
  key: "The magnet is always on; you cannot switch it off for an emergency.",
  pearl: "De-energising means a quench (helium venting) &mdash; reserved for true catastrophes.",
  src: "ACR"
},
{
  id: "anaes-mri-003", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The correct response to cardiac arrest of an anaesthetised patient inside the MRI scanner is to:",
  o: ["Bring the defibrillator into the magnet room","Evacuate the patient out of Zone IV and resuscitate in a safe area","Press the quench button first","Start compressions inside the bore with standard equipment"],
  a: 1,
  e: "You cannot bring a ferromagnetic resus trolley/defibrillator into the magnet room, so the golden rule is to <strong>evacuate the patient out of Zone IV</strong> and perform full resuscitation in a safe area (Zone III / resus room).",
  key: "MRI emergency: evacuate the patient from Zone IV to resuscitate.",
  pearl: "Quench is only for a catastrophe (a person pinned by a projectile, fire), not routine arrest.",
  src: "AAGBI"
},
{
  id: "anaes-mri-004", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Radiofrequency energy in MRI can cause patient burns via:",
  o: ["Cold gas exposure","Heating of looped cables and monitoring leads against the skin","Ionising radiation","High blood pressure"],
  a: 1,
  e: "RF energy heats <strong>looped/coiled cables, ECG leads and pulse-oximeter fibres</strong> &rarr; skin burns. Remove unnecessary wires, avoid loops, insulate leads and keep cables straight.",
  key: "RF burns come from looped cables/leads &mdash; avoid coils, insulate.",
  pearl: "Use MR-conditional monitoring; the ECG is distorted by the magnetohydrodynamic effect.",
  src: "ACR"
},
{
  id: "anaes-mri-005", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A cryogen quench in MRI is dangerous mainly because it can cause:",
  o: ["Electrocution","Oxygen displacement (asphyxiation) and frostbite from venting helium","Radiation sickness","Hyperthermia"],
  a: 1,
  e: "A <strong>quench</strong> vents large volumes of cold helium gas &rarr; risk of <strong>O&#8322; displacement/asphyxiation</strong>, frostbite and a rapid room-pressure rise; evacuate. It is reserved for emergencies like a person pinned by a projectile or fire.",
  key: "Quench &rarr; asphyxiation/frostbite risk; use only in a true emergency.",
  pearl: "The routine response to an in-scanner emergency is to evacuate the patient, not to quench.",
  src: "ACR"
},
{
  id: "anaes-mri-006", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The four ACR MRI safety zones in order of increasing restriction are:",
  o: ["I magnet, II control, III screening, IV public","I public, II screening, III control room, IV magnet room","All zones are equal","I control, II magnet, III public, IV screening"],
  a: 1,
  e: "Zones run <strong>I (public) &rarr; II (reception/screening) &rarr; III (control room, restricted) &rarr; IV (the magnet room)</strong>. Ferromagnetic screening is mandatory before Zone III/IV.",
  key: "Zones: I public, II screening, III control, IV magnet.",
  pearl: "Screen every person and item for ferromagnetic hazards and implants before entry.",
  src: "ACR"
},
{
  id: "anaes-mri-007", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A patient with SpO&#8322; 98% but a bizarre, distorted ECG on the MRI monitor most likely has:",
  o: ["A myocardial infarction","ECG distortion from the magnetohydrodynamic effect (elevated T-wave)","Hyperkalaemia","Pericarditis"],
  a: 1,
  e: "The static field alters the ECG (the <strong>magnetohydrodynamic effect</strong> elevates the T-wave), so the trace is unreliable for ischaemia; rely on <strong>SpO&#8322; and capnography</strong> as primary signals.",
  key: "MRI distorts the ECG (magnetohydrodynamic effect); trust SpO&#8322;/capnography.",
  pearl: "Use MR-conditional monitors and maintain full remote-location monitoring standards.",
  src: "Miller"
},
{
  id: "anaes-mri-008", spec: "anaes", topic: "MRI", difficulty: "easy", type: "direct",
  stem: "",
  q: "Which patients commonly require anaesthesia or sedation for MRI?",
  o: ["All adults","Children, the uncooperative/claustrophobic, movement disorders and the critically ill","Only pregnant patients","Only patients with implants"],
  a: 1,
  e: "MRI needs a still patient for a long time, so anaesthesia/sedation is used for <strong>children, uncooperative or claustrophobic patients, movement disorders and the critically ill/ventilated</strong>.",
  key: "Anaesthesia for MRI: children, uncooperative/claustrophobic, movement disorders, critically ill.",
  pearl: "Screen for implants (pacemaker, cochlear, aneurysm clip, metallic foreign body) at pre-assessment.",
  src: "AAGBI"
},
{
  id: "anaes-mri-009", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "MR equipment labelled with a yellow triangle (&ldquo;MR Conditional&rdquo;) means it is:",
  o: ["Completely safe anywhere","Safe only under specified conditions (field strength, gradient, RF limits)","Banned from the MR environment","Non-metallic and non-magnetic"],
  a: 1,
  e: "<strong>MR Conditional</strong> (yellow triangle) = safe under <strong>specified conditions</strong>. MR Safe (green square) = no hazard in any MR environment; MR Unsafe (red circle) = ferromagnetic/hazardous, never enter.",
  key: "MR Conditional = safe under specified conditions.",
  pearl: "Most in-room anaesthetic equipment (machine, monitors, pumps) is MR Conditional.",
  src: "ACR"
},
{
  id: "anaes-mri-010", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Gadolinium contrast is particularly hazardous in patients with:",
  o: ["Mild asthma","Severe renal impairment (risk of nephrogenic systemic fibrosis)","Controlled hypertension","Osteoarthritis"],
  a: 1,
  e: "Gadolinium can cause anaphylaxis and, in <strong>severe renal impairment</strong>, <strong>nephrogenic systemic fibrosis (NSF)</strong>; check renal function before administration.",
  key: "Gadolinium &rarr; NSF risk in severe renal impairment.",
  pearl: "Acoustic noise (&gt;100 dB) also requires hearing protection for patient and staff.",
  src: "ACR"
},
{
  id: "anaes-mri-011", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "case",
  stem: "You are asked to anaesthetise a 3-year-old for a 45-minute brain MRI at a scanner remote from the main theatres.",
  q: "The monitoring and safety standard required is:",
  o: ["A relaxed standard because it is only a scan","The same minimum monitoring and safety standard as the main operating theatre","SpO&#8322; alone","No trained assistant needed"],
  a: 1,
  e: "Remote-location anaesthesia must meet the <strong>same standard as the operating theatre</strong>: a trained assistant, full monitoring including capnography, oxygen and scavenging, and full resuscitation equipment (AAGBI).",
  key: "Remote-location anaesthesia = full theatre monitoring/safety standards.",
  pearl: "Use MR-conditional monitors and plan how you will see the patient and displays from the control room.",
  src: "AAGBI"
},
{
  id: "anaes-mri-012", spec: "anaes", topic: "MRI", difficulty: "easy", type: "direct",
  stem: "",
  q: "To reduce the acoustic hazard of MRI, you should provide:",
  o: ["Bright lighting","Hearing protection (ear plugs/defenders) for the patient and staff","A warmer room","Faster scanning only"],
  a: 1,
  e: "Gradient switching can exceed <strong>100 dB</strong>; provide <strong>hearing protection</strong> for the patient (and staff who remain in the room).",
  key: "Loud scanner &rarr; hearing protection for patient and staff.",
  pearl: "The patient is also deep in a dim bore, out of easy reach during the scan &mdash; plan access.",
  src: "AAGBI"
},
{
  id: "anaes-mri-013", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Delivering general anaesthesia inside the MRI magnet room requires:",
  o: ["A standard theatre anaesthetic machine","An MR-conditional anaesthesia machine, ventilator and monitors (or induce-and-transfer with a long circuit)","No special equipment","Only sedation is ever possible"],
  a: 1,
  e: "Either use an <strong>MR-conditional machine, ventilator and monitors</strong> in Zone IV, or induce in an induction area (Zone III) and transfer, running the circuit through the waveguide; standard ferromagnetic equipment must stay out.",
  key: "GA in Zone IV needs MR-conditional equipment, or induce-and-transfer.",
  pearl: "Extend all breathing circuits and IV lines; use MR-conditional infusion pumps.",
  src: "AAGBI"
},
{
  id: "anaes-mri-014", spec: "anaes", topic: "MRI", difficulty: "moderate", type: "direct",
  stem: "",
  q: "Which sedative is favoured for spontaneously-breathing MRI sedation because of minimal respiratory depression?",
  o: ["Morphine","Dexmedetomidine","Thiopentone","Suxamethonium"],
  a: 1,
  e: "<strong>Dexmedetomidine</strong> (or a titrated propofol infusion) is favoured for cooperative, low-risk MRI sedation because it causes minimal respiratory depression, though airway obstruction out of reach remains a risk.",
  key: "Dexmedetomidine is a favoured MRI sedative (minimal respiratory depression).",
  pearl: "Full monitoring and a rescue plan are essential &mdash; the patient is inaccessible in the bore.",
  src: "Miller"
},
{
  id: "anaes-mri-015", spec: "anaes", topic: "MRI", difficulty: "easy", type: "direct",
  stem: "",
  q: "Which item must NEVER be taken into the MRI magnet room?",
  o: ["An MR-conditional infusion pump","A standard steel oxygen cylinder","An aluminium oxygen cylinder","MR-conditional ECG leads"],
  a: 1,
  e: "A <strong>standard steel (ferromagnetic) oxygen cylinder</strong> is a classic lethal projectile and must never enter Zone IV; use <strong>aluminium (non-ferromagnetic)</strong> cylinders and MR-conditional equipment.",
  key: "Never bring a steel O&#8322; cylinder into the magnet room; use aluminium.",
  pearl: "Screen every item; ferromagnetic (MR Unsafe) objects are banned from the MR environment.",
  src: "ACR"
},
{
  id: "anaes-cleft-101", spec: "anaes", topic: "Cleft Lip &amp; Palate", difficulty: "moderate", type: "direct",
  stem: "",
  q: "In the Nagpur classification of cleft, Group III denotes:",
  o: ["Cleft lip only","Cleft palate only","Cleft lip + cleft alveolus + cleft palate","Cleft lip + alveolus only"],
  a: 2,
  e: "The Nagpur classification (Balakrishnan): Group I = lip only, Group Ia = lip + alveolus, Group II = palate only, <strong>Group III = lip + alveolus + palate</strong>.",
  key: "Nagpur Group III = lip + alveolus + palate.",
  pearl: "Contrast with Veau (palate only, I&ndash;IV) and the descriptive LAHSHAL code.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-cleft-102", spec: "anaes", topic: "Cleft Lip &amp; Palate", difficulty: "moderate", type: "direct",
  stem: "",
  q: "The LAHSHAL descriptive code is read:",
  o: ["Left to right, lower case for complete clefts","As if looking at the patient, with a capital letter for a complete cleft and a dot for no cleft","Right lip last, no case distinction","Only for the palate"],
  a: 1,
  e: "LAHSHAL records Lip&ndash;Alveolus&ndash;Hard palate&ndash;Soft palate&ndash;Hard palate&ndash;Alveolus&ndash;Lip, read <strong>as if looking at the patient</strong>; a <strong>capital</strong> = complete cleft, <strong>lower case</strong> = incomplete, <strong>dot</strong> = no cleft.",
  key: "LAHSHAL: capital = complete, lower-case = incomplete, dot = none.",
  pearl: "The 6-character LAHSAL variant merges the hard palate into one character.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-cleft-103", spec: "anaes", topic: "Cleft Lip &amp; Palate", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A submucous cleft palate is characterised by:",
  o: ["An obvious open cleft of the hard palate","A muscle cleft covered by intact mucosa (bifid uvula, notched hard palate) &mdash; not obvious on inspection","Absence of the uvula","A cleft lip only"],
  a: 1,
  e: "A <strong>submucous cleft</strong> is a muscular defect covered by intact mucosa &mdash; suspected from a <strong>bifid uvula, zona pellucida and a notched hard palate</strong>; it is easily missed on inspection.",
  key: "Submucous cleft: hidden muscle cleft &mdash; bifid uvula, notched palate.",
  pearl: "It can still cause velopharyngeal incompetence and feeding/speech problems.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-cleft-104", spec: "anaes", topic: "Cleft Lip &amp; Palate", difficulty: "easy", type: "direct",
  stem: "",
  q: "The Veau classification applies to:",
  o: ["Cleft lip only","Cleft palate (Groups I&ndash;IV)","Both lip and palate equally","Only submucous clefts"],
  a: 1,
  e: "The Veau classification grades the <strong>cleft palate</strong> (Group I soft palate only; II hard + soft to the incisive foramen; III complete unilateral; IV complete bilateral). Its limitation is that it does <strong>not</strong> include the isolated cleft lip.",
  key: "Veau I&ndash;IV grades the cleft palate; excludes isolated cleft lip.",
  pearl: "Group IV: the pre-maxilla is suspended from the nasal septum.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-cleft-105", spec: "anaes", topic: "Cleft Lip &amp; Palate", difficulty: "moderate", type: "direct",
  stem: "",
  q: "A microform (forme fruste) cleft lip is:",
  o: ["A complete cleft to the nasal floor","A notch in the vermilion border only","A bilateral cleft","A cleft of the soft palate"],
  a: 1,
  e: "A <strong>microform cleft lip</strong> is the mildest form &mdash; a <strong>notch in the vermilion border</strong> only, without extension to the nasal floor.",
  key: "Microform cleft lip = vermilion-border notch only.",
  pearl: "Cleft lip is also classified as complete (to nasal floor) vs incomplete, and unilateral vs bilateral.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
},
{
  id: "anaes-cleft-106", spec: "anaes", topic: "Cleft Lip &amp; Palate", difficulty: "easy", type: "direct",
  stem: "",
  q: "The incisive foramen is the landmark that:",
  o: ["Divides the right from the left palate","Divides the primary (anterior) from the secondary (posterior) palate","Marks the soft palate only","Has no relevance to clefts"],
  a: 1,
  e: "The <strong>incisive foramen</strong> separates the <strong>primary (anterior) palate</strong> from the <strong>secondary (posterior) palate</strong> &mdash; the embryological and classification landmark for clefts.",
  key: "Incisive foramen divides primary (anterior) from secondary (posterior) palate.",
  pearl: "Veau Group II extends no further posteriorly than the incisive foramen.",
  src: "from Dr. Tanya Chawla&rsquo;s notes"
}

];
