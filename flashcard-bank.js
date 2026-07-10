// ============================================================
// CritCare.in — Flashcard Bank (data)
// ------------------------------------------------------------
// Structured by SPECIALTY → DECK → cards. Each card is
// [front (prompt), back (high-yield answer, HTML allowed)].
// Content triangulated from Marino, The Washington Manual of
// Critical Care and Irwin & Rippe (+ anaesthesia texts and
// current society guidelines). Original wording.
//
//   window.FLASHCARDS = [ { spec, deck, cards:[[f,b],...] }, ... ]
//   spec: 'ccm' | 'em' | 'anaes'
//
// To scale toward 1000: append decks / cards below. The page
// auto-discovers specialties and decks from this array.
// ============================================================
window.FLASHCARDS = [

/* ===================== CRITICAL CARE ===================== */
{ spec: 'ccm', deck: 'Sepsis & Septic Shock', cards: [
  ["Sepsis-3 definition", "Life-threatening organ dysfunction from a <strong>dysregulated host response to infection</strong> — operationally, infection + an acute rise in <strong>SOFA ≥2</strong>."],
  ["Septic shock criteria", "Vasopressor need to keep <strong>MAP ≥65</strong> <strong>and</strong> lactate <strong>&gt;2 mmol/L</strong> despite adequate fluids. Mortality &gt;40%."],
  ["Hour-1 bundle", "<strong>Lactate</strong> · <strong>cultures</strong> before antibiotics · <strong>broad-spectrum antibiotics</strong> · <strong>30 mL/kg</strong> crystalloid · <strong>vasopressors</strong> for MAP ≥65."],
  ["First-line vasopressor", "<strong>Noradrenaline</strong> → add <strong>vasopressin 0.03 U/min</strong> (at NA ~0.25–0.5 µg/kg/min) → add <strong>hydrocortisone 200 mg/day</strong> if refractory."],
  ["Resuscitation target", "<strong>Lactate clearance</strong> and capillary refill (ANDROMEDA-SHOCK) — not CVP, which does not predict fluid responsiveness."],
  ["The forgotten step", "<strong>Source control</strong> — drain/debride/remove the focus. No antibiotic rescues an undrained source."]
]},
{ spec: 'ccm', deck: 'ARDS', cards: [
  ["Berlin severity (P/F on PEEP ≥5)", "Mild 200–300 · Moderate 100–200 · <strong>Severe ≤100</strong>. Acute, bilateral opacities not fully explained by cardiac failure."],
  ["Lung-protective ventilation", "<strong>6 mL/kg predicted</strong> body weight, <strong>plateau &lt;30</strong>, <strong>driving pressure &lt;15</strong>; permissive hypercapnia (pH &gt;7.2)."],
  ["Proning", "<strong>≥16 h/day if P/F &lt;150</strong> — PROSEVA mortality benefit. Start early."],
  ["Driving pressure", "ΔP = Pplat − PEEP; the ventilator variable most strongly linked to mortality. Target &lt;15 cmH₂O."],
  ["Neuromuscular blockade", "Not routine (ROSE); reserve for severe ARDS with dyssynchrony/high driving pressure."],
  ["VV-ECMO", "Rescue for refractory hypoxaemia (e.g. P/F &lt;80) in experienced centres (EOLIA) after optimised ventilation + proning."]
]},
{ spec: 'ccm', deck: 'Shock', cards: [
  ["The four types", "Hypovolaemic · Cardiogenic · Obstructive · Distributive. Localise with focused echo (pump/tank/pipes)."],
  ["Cold vs warm", "Cold + flat neck veins → hypovolaemic. Cold + full veins → cardiogenic/obstructive. Warm → distributive."],
  ["Fluid responsiveness", "<strong>Passive leg raise + real stroke volume</strong> (valid in AF/spontaneous breathing). PPV/SVV need passive, regular, ventilated. CVP does not predict."],
  ["Obstructive fixes", "Tamponade → pericardiocentesis · tension pneumothorax → decompress · massive PE → thrombolyse."],
  ["Cardiogenic shock (post-MI)", "Noradrenaline ± dobutamine + <strong>culprit-lesion PCI</strong> (CULPRIT-SHOCK). Routine IABP: no benefit (IABP-SHOCK II)."]
]},
{ spec: 'ccm', deck: 'Acid–Base', cards: [
  ["6-step approach", "pH → primary disorder → compensation → <strong>anion gap</strong> → delta-delta → cause (± osmolar gap)."],
  ["Anion gap", "Na − (Cl + HCO₃); normal 8–12; <strong>+2.5 per 1 g/dL fall in albumin</strong>."],
  ["Winter's formula", "Expected PaCO₂ = <strong>1.5 × HCO₃ + 8 ± 2</strong> in metabolic acidosis."],
  ["High-AG causes (GOLD MARK)", "Glycols, Oxoproline, L-/D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis."],
  ["Delta ratio", "&lt;1 + normal-gap acidosis · 1–2 pure high-gap · &gt;2 + metabolic alkalosis."],
  ["Osmolar gap + high AG", "Suspect <strong>toxic alcohol</strong> (methanol/ethylene glycol) → fomepizole ± dialysis."]
]},
{ spec: 'ccm', deck: 'Electrolytes', cards: [
  ["Hyperkalaemia — first drug", "<strong>IV calcium</strong> (stabilises membrane). Then shift (insulin+dextrose, salbutamol), then remove (dialysis/binders)."],
  ["Hyponatraemia correction limit", "<strong>≤8 mmol/L per 24 h</strong> (avoid osmotic demyelination). Acute symptomatic: 3% saline 100–150 mL boluses."],
  ["Refractory hypokalaemia", "Replace <strong>magnesium</strong> — hypomagnesaemia drives renal K⁺ wasting."],
  ["Corrected calcium", "Measured Ca + <strong>0.8 × (4.0 − albumin)</strong>; confirm with ionised Ca."],
  ["Refeeding syndrome", "Feeding-induced insulin surge → ↓<strong>phosphate</strong>/K/Mg. Give thiamine, start low & slow, replace electrolytes."]
]},
{ spec: 'ccm', deck: 'DKA & HHS', cards: [
  ["DKA order of treatment", "<strong>Fluids → check potassium → insulin</strong>. Hold insulin until K⁺ ≥3.5."],
  ["Fixed-rate insulin", "0.1 U/kg/h; add dextrose when glucose &lt;14 mmol/L to keep clearing ketones."],
  ["DKA resolution", "Ketones &lt;0.6, pH &gt;7.3 (or HCO₃ ≥15), patient eating — overlap SC insulin before stopping."],
  ["HHS vs DKA", "HHS = profound hyperglycaemia + high osmolality + <strong>minimal ketosis</strong>; slower onset, higher mortality, large fluid deficit."],
  ["Euglycaemic DKA", "On <strong>SGLT2 inhibitors</strong> — ketoacidosis with near-normal glucose. Treat as DKA, add dextrose early."],
  ["Cerebral oedema", "New drowsiness/headache in a young DKA patient → cerebral oedema; treat with hypertonic saline/mannitol, do not delay for imaging."]
]},
{ spec: 'ccm', deck: 'Acute Kidney Injury', cards: [
  ["KDIGO Stage 1", "Creatinine ↑ ≥0.3 mg/dL in 48 h, or 1.5–1.9× baseline in 7 days, or urine &lt;0.5 mL/kg/h for 6–12 h."],
  ["RRT timing", "Watchful waiting — start for a <strong>definite indication</strong>, not pre-emptively (STARRT-AKI, AKIKI)."],
  ["Urgent RRT (AEIOU)", "Acidosis · Electrolytes (refractory hyperK) · Intoxication · Overload · Uraemia."],
  ["ATN sediment", "<strong>Muddy-brown granular casts</strong>; contrast with bland (pre-renal) or WBC casts (AIN)."],
  ["CRRT vs IHD", "No mortality difference; choose by haemodynamic stability (CRRT for the unstable)."]
]},
{ spec: 'ccm', deck: 'Mechanical Ventilation', cards: [
  ["Peak ↑ / Plateau normal", "<strong>Resistance</strong> problem — secretions, bronchospasm, kinked/blocked tube."],
  ["Peak ↑ / Plateau ↑", "<strong>Compliance</strong> problem — pneumothorax, oedema, atelectasis, right mainstem, abdominal distension."],
  ["Auto-PEEP", "Expiratory flow not reaching zero → dynamic hyperinflation → hypotension. Disconnect to deflate; ↓RR/V<sub>T</sub>, ↑expiratory time."],
  ["Readiness to wean", "Daily <strong>SBT</strong> + <strong>SAT</strong>; RSBI (RR/V<sub>T</sub>) &lt;105 predicts success."],
  ["Before extubation", "Adequate cough, manageable secretions, airway patency (cuff leak), resolving cause — not just SBT tolerance."]
]},
{ spec: 'ccm', deck: 'Sedation & Delirium', cards: [
  ["PADIS sedation target", "<strong>Analgesia-first, light sedation</strong>, RASS 0 to −2, daily awakening; prefer propofol/dexmedetomidine over benzodiazepines."],
  ["Delirium screening", "<strong>CAM-ICU</strong> or ICDSC. Management mostly non-pharmacological; antipsychotics don't shorten it (MIND-USA)."],
  ["Propofol infusion syndrome", "High-dose/prolonged propofol → lactic acidosis, rhabdomyolysis, ↑triglycerides, bradyarrhythmia. Stop propofol."],
  ["Benzodiazepines", "Increase delirium and prolong ventilation — avoid as routine sedation."]
]},
{ spec: 'ccm', deck: 'Transfusion', cards: [
  ["Restrictive threshold", "Hb <strong>&lt;70 g/L</strong> for most stable patients; <strong>&lt;80</strong> for ACS/cardiac surgery (TRICC/TRISS)."],
  ["TRALI", "Non-cardiogenic pulmonary oedema &lt;6 h; <strong>normal filling pressures</strong>; supportive care; resolves 48–96 h."],
  ["TACO", "Circulatory overload — hypertension, raised JVP; responds to <strong>diuresis</strong>."],
  ["Massive transfusion", "Balanced ~1:1:1 RBC:FFP:platelets; early <strong>TXA within 3 h</strong>; avoid the lethal triad."]
]},
{ spec: 'ccm', deck: 'Cardiac Arrest (ACLS)', cards: [
  ["Shockable drug timing", "Adrenaline 1 mg <strong>after 2nd shock</strong> (then q3–5min); amiodarone 300 mg <strong>after 3rd shock</strong> (150 mg after 5th)."],
  ["Non-shockable", "PEA/asystole → adrenaline 1 mg <strong>immediately</strong>, CPR, find reversible cause."],
  ["Hs & Ts", "Hypoxia, Hypovolaemia, H⁺/K⁺, Hypothermia · Thrombosis, Tamponade, Tension pneumothorax, Toxins."],
  ["Post-ROSC temperature", "<strong>Actively prevent fever</strong> (≤37.5 °C); routine deep hypothermia no longer mandated (TTM2)."],
  ["High-quality CPR", "Rate 100–120/min, depth 5–6 cm, full recoil, minimal interruptions, avoid hyperventilation."]
]},

/* ===================== EMERGENCY MEDICINE ===================== */
{ spec: 'em', deck: 'Anaphylaxis', cards: [
  ["First-line drug", "<strong>IM adrenaline 0.5 mg</strong> (0.5 mL 1:1000) into the anterolateral thigh; repeat every 5 min."],
  ["Position", "<strong>Lie flat</strong> (legs up) — sitting a hypotensive patient up can cause fatal empty-ventricle arrest."],
  ["Adjuncts", "Oxygen, IV fluids; antihistamines/steroids are adjuncts only — never replace adrenaline."],
  ["Refractory / beta-blocked", "Adrenaline infusion; add <strong>glucagon</strong> if on beta-blockers."],
  ["Discharge", "Two adrenaline auto-injectors, warn about biphasic reaction, allergy referral."]
]},
{ spec: 'em', deck: 'Acute Stroke', cards: [
  ["Thrombolysis window", "IV alteplase/tenecteplase within <strong>4.5 h</strong> of last-known-well after excluding haemorrhage."],
  ["Thrombectomy", "Large-vessel occlusion up to <strong>24 h</strong> in selected patients (DAWN/DEFUSE-3, HERMES)."],
  ["BP before lysis", "Must be <strong>&lt;185/110</strong>; if not lysing, only treat if &gt;220/120."],
  ["Time metrics", "Door-to-needle &lt;60 min; 'time is brain'."]
]},
{ spec: 'em', deck: 'Acute Coronary Syndrome', cards: [
  ["STEMI reperfusion", "Primary <strong>PCI if ≤120 min</strong> from first medical contact; otherwise fibrinolysis within 30 min + transfer."],
  ["Inferior STEMI + hypotension on GTN", "Suspect <strong>RV infarction</strong> — do right-sided leads (V4R); give fluids, avoid nitrates."],
  ["STEMI ECG", "ST-elevation ≥1 mm in ≥2 contiguous limb leads or ≥2 mm chest leads, or new LBBB with ischaemia."],
  ["Dual antiplatelet", "Aspirin + a P2Y12 inhibitor; anticoagulation per pathway."]
]},
{ spec: 'em', deck: 'Toxicology', cards: [
  ["Paracetamol antidote", "<strong>N-acetylcysteine</strong> — most effective &lt;8 h; give without a level if &gt;8 h/staggered/unknown time."],
  ["Organophosphate", "Cholinergic toxidrome → <strong>atropine</strong> titrated to drying of secretions + <strong>pralidoxime</strong>."],
  ["TCA overdose", "Wide QRS / tall R in aVR → <strong>sodium bicarbonate</strong>; avoid class Ia/Ic/III antiarrhythmics."],
  ["CCB / beta-blocker toxicity", "<strong>High-dose insulin euglycaemic therapy</strong> + calcium, glucagon, vasopressors."],
  ["Toxic alcohol", "High osmolar + anion gap → <strong>fomepizole</strong> ± dialysis."]
]},
{ spec: 'em', deck: 'Trauma / ATLS', cards: [
  ["TXA timing", "Within <strong>3 h</strong> of injury (CRASH-2); later may harm."],
  ["Damage-control resuscitation", "Permissive hypotension until control (not in TBI), balanced products, early TXA, avoid the lethal triad."],
  ["Beck's triad", "Hypotension + distended neck veins + muffled heart sounds = <strong>cardiac tamponade</strong> (trachea central)."],
  ["Tension pneumothorax", "Distended veins + tracheal deviation + absent breath sounds → immediate decompression."]
]},
{ spec: 'em', deck: 'GI Bleeding', cards: [
  ["Variceal bleed", "<strong>Terlipressin</strong> + prophylactic antibiotics + endoscopy within 24 h (band ligation)."],
  ["Transfusion in UGIB", "Restrictive target <strong>Hb ~70–80 g/L</strong> — over-transfusion raises portal pressure and rebleeding."],
  ["Blatchford score", "Score 0–1 = very low risk; may avoid urgent endoscopy/admission."],
  ["Peptic ulcer bleed", "IV PPI + endoscopic haemostasis."]
]},

/* ===================== ANAESTHESIA ===================== */
{ spec: 'anaes', deck: 'Airway', cards: [
  ["CICO rescue", "'Cannot intubate, cannot oxygenate' → declare it, <strong>scalpel–bougie–tube</strong> front-of-neck access; don't delay for more laryngoscopy."],
  ["DAS Plans A–D", "A tracheal intubation · B supraglottic airway · C face-mask ventilation · D emergency FONA."],
  ["Attempts limit", "Max 3 + 1 laryngoscopy attempts; change something each time; oxygenation is the priority."],
  ["Preoxygenation", "3 min tidal breathing (or 8 vital-capacity breaths) of 100% O₂; apnoeic oxygenation extends safe apnoea time."],
  ["Rapid sequence", "Preoxygenate, predetermined induction + rapid-onset neuromuscular blocker, cricoid (debated), no/limited mask ventilation."]
]},
{ spec: 'anaes', deck: 'Local Anaesthetics & LAST', cards: [
  ["LAST first-line", "<strong>20% lipid emulsion</strong> (Intralipid) 1.5 mL/kg bolus + infusion, alongside airway/seizure control and modified ACLS."],
  ["Max lidocaine dose", "~3 mg/kg plain; ~7 mg/kg with adrenaline (approximate; individualise)."],
  ["LAST in cardiac arrest", "Reduce adrenaline doses (&lt;1 µg/kg), avoid vasopressin/CCBs/beta-blockers/lidocaine; prolonged resuscitation, consider bypass."],
  ["Order of blockade", "Autonomic → pain/temperature → touch → motor (small, myelinated fibres blocked first)."]
]},
{ spec: 'anaes', deck: 'Neuraxial Anaesthesia', cards: [
  ["Total spinal", "High block → hypotension, bradycardia, apnoea → support airway/ventilation, fluids, vasopressors/atropine."],
  ["Post-dural-puncture headache", "Postural headache after dural puncture; conservative measures, then <strong>epidural blood patch</strong> if severe/persistent."],
  ["Neuraxial + anticoagulation", "Follow ASRA timing intervals (e.g. LMWH) to reduce epidural haematoma risk."],
  ["Spinal vs epidural onset", "Spinal — rapid, dense, small dose; epidural — slower, titratable, catheter-based."]
]},
{ spec: 'anaes', deck: 'PONV & Recovery', cards: [
  ["Apfel risk factors", "Female, non-smoker, history of PONV/motion sickness, postoperative opioids — more factors, higher risk."],
  ["Prophylaxis", "Multimodal — combine agents from different classes (5-HT3 antagonist, dexamethasone, droperidol/haloperidol), opioid-sparing."],
  ["Rescue antiemetic", "Use a drug from a <strong>different class</strong> than that used for prophylaxis."]
]}

];
