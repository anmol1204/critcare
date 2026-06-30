// CritCare.in — Pearl of the Day (interactive MCQ)
// window.renderPearl('elementId') renders the day's MCQ into that element.
(function () {
  var PEARLS = [
    { q: "A septic patient remains hypotensive after 30 mL/kg crystalloid. Per SSC, which vasopressor is first-line?",
      o: ["Dopamine", "Noradrenaline (norepinephrine)", "Adrenaline", "Phenylephrine"], a: 1,
      e: "Noradrenaline is first-line in septic shock. Add vasopressin (0.03 U/min) when the noradrenaline dose exceeds ~0.25 µg/kg/min.", t: "Sepsis" },
    { q: "In ARDS, the ARDSNet lung-protective tidal volume target is:",
      o: ["10 mL/kg actual body weight", "6 mL/kg predicted body weight", "8 mL/kg actual body weight", "4 mL/kg predicted body weight"], a: 1,
      e: "6 mL/kg PBW with plateau pressure <30 cmH₂O. Prone positioning (PROSEVA) for P/F <150.", t: "ARDS" },
    { q: "During VF arrest, amiodarone 300 mg is given:",
      o: ["Before the first shock", "After the 2nd shock", "After the 3rd shock", "Only if torsades"], a: 2,
      e: "Adrenaline 1 mg after the 2nd shock (then q3–5min); amiodarone 300 mg after the 3rd shock (then 150 mg).", t: "ACLS" },
    { q: "Which is the safe maximum correction of chronic hyponatraemia in 24 h (to avoid osmotic demyelination)?",
      o: ["4 mEq/L", "8–10 mEq/L", "15 mEq/L", "20 mEq/L"], a: 1,
      e: "≤8–10 mEq/L per 24 h. For acute symptomatic hyponatraemia (seizures): 3% NaCl 100–150 mL bolus to raise Na ~4–6 mEq/L acutely.", t: "Electrolytes" },
    { q: "In a CICO ('cannot intubate, cannot oxygenate') emergency, the adult rescue of choice is:",
      o: ["Another laryngoscopy attempt", "Scalpel–bougie–tube cricothyroidotomy", "Blind nasal intubation", "More bag-mask ventilation only"], a: 1,
      e: "Declare CICO and perform emergency front-of-neck access — scalpel–bougie–tube. Don't delay for further laryngoscopy.", t: "Airway" },
    { q: "Winter's formula for expected PaCO₂ in metabolic acidosis is:",
      o: ["(1.5 × HCO₃) + 8 ± 2", "(0.7 × HCO₃) + 21", "HCO₃ + 15", "(2 × HCO₃) − 4"], a: 0,
      e: "Expected PaCO₂ = 1.5 × HCO₃ + 8 ± 2. Actual higher → concurrent respiratory acidosis; lower → respiratory alkalosis.", t: "Acid–Base" },
    { q: "First-line drug for stable, regular, narrow-complex SVT after vagal manoeuvres fail:",
      o: ["Amiodarone 300 mg", "Adenosine 6 mg rapid IV push", "Verapamil 5 mg", "Synchronised cardioversion"], a: 1,
      e: "Adenosine 6 mg rapid push (then 12 mg). Unstable SVT → synchronised cardioversion.", t: "Arrhythmias" },
    { q: "In DKA, insulin infusion should be withheld until serum potassium is at least:",
      o: ["≥2.5 mEq/L", "≥3.0 mEq/L", "≥3.5 mEq/L", "≥4.5 mEq/L"], a: 2,
      e: "Hold insulin if K⁺ <3.5 — insulin drives K⁺ intracellularly and can precipitate fatal hypokalaemia. Replace K⁺ first.", t: "Endocrine" },
    { q: "Restrictive transfusion threshold for most stable critically ill adults (TRICC/TRISS):",
      o: ["Hb <70 g/L", "Hb <90 g/L", "Hb <100 g/L", "Hb <80 g/L for everyone"], a: 0,
      e: "Transfuse at Hb <70 g/L (<80 for cardiac surgery / active ACS). Single-unit transfusions, reassess between units.", t: "Transfusion" },
    { q: "Severe falciparum malaria — the recommended first-line treatment is:",
      o: ["IV quinine", "Oral ACT", "IV artesunate", "IV chloroquine"], a: 2,
      e: "IV artesunate (superior to quinine — SEAQUAMAT/AQUAMAT). Watch for delayed post-artesunate haemolysis.", t: "Tropical" },
    { q: "Tranexamic acid in trauma haemorrhage reduces death only if given within:",
      o: ["1 hour", "3 hours", "6 hours", "12 hours"], a: 1,
      e: "TXA 1 g over 10 min then 1 g over 8 h, within 3 h of injury (CRASH-2). Given late it provides no benefit / may harm.", t: "Trauma" },
    { q: "First-line treatment for torsades de pointes:",
      o: ["Amiodarone", "Magnesium sulphate 2 g IV", "Lidocaine", "Adenosine"], a: 1,
      e: "Magnesium 2 g IV (even if Mg normal). Stop QT-prolonging drugs, correct K⁺/Ca²⁺; overdrive pace if bradycardia-dependent.", t: "Arrhythmias" },
    { q: "In acute ischaemic stroke, IV thrombolysis is generally given within what window of last-known-well?",
      o: ["3 hours only", "4.5 hours", "6 hours", "24 hours"], a: 1,
      e: "IV alteplase/tenecteplase ≤4.5 h. Thrombectomy for large-vessel occlusion up to 24 h in selected (perfusion-eligible) patients.", t: "Stroke" },
    { q: "Anaphylaxis — the first-line, life-saving drug and route is:",
      o: ["IV hydrocortisone", "IV chlorphenamine", "IM adrenaline 0.5 mg", "Nebulised salbutamol"], a: 2,
      e: "IM adrenaline 0.5 mg (anterolateral thigh), repeat q5min. Keep the patient supine. Antihistamines/steroids are adjuncts only.", t: "Anaphylaxis" },
    { q: "The current internationally recommended eGFR equation is:",
      o: ["MDRD with race factor", "CKD-EPI 2021 (race-free)", "Cockcroft–Gault", "Schwartz"], a: 1,
      e: "CKD-EPI 2021 creatinine (race-free), endorsed by NKF/ASN & KDIGO. Cockcroft–Gault is still often used for drug dosing.", t: "Renal" },
    { q: "After ROSC, current guidance for temperature management is:",
      o: ["Mandatory 32–34 °C hypothermia", "Actively prevent fever (≤37.5 °C)", "No temperature control needed", "Warm to 38.5 °C"], a: 1,
      e: "TTM2 shifted practice to active fever prevention (target ≤37.5 °C) rather than routine deep hypothermia.", t: "ROSC" },
    { q: "Best test to predict fluid responsiveness in a spontaneously breathing or arrhythmic patient:",
      o: ["Central venous pressure", "Passive leg raise (with CO/SV measurement)", "PPV/SVV", "Urine output"], a: 1,
      e: "PLR is a reversible 'auto-bolus' valid even in spontaneous breathing/arrhythmia. CVP does NOT predict fluid responsiveness.", t: "Haemodynamics" },
    { q: "Acute severe asthma — GINA oxygen saturation target is:",
      o: ["100%", "92–95%", "88–92%", ">98%"], a: 1,
      e: "Target SpO₂ 93–95% (GINA). Hyperoxia is avoided. Controlled O₂ 88–92% is the COPD target, not asthma.", t: "Asthma" }
  ];

  function dayIndex() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var doy = Math.floor((now - start) / 86400000);
    return doy % PEARLS.length;
  }

  window.renderPearl = function (elId) {
    var el = document.getElementById(elId);
    if (!el) return;
    var p = PEARLS[dayIndex()];
    var opts = p.o.map(function (txt, i) {
      return '<button class="pearl-opt" data-i="' + i + '">' +
        '<span class="pearl-letter">' + String.fromCharCode(65 + i) + '</span>' + txt + '</button>';
    }).join('');
    el.innerHTML =
      '<div class="pearl-head"><span class="pearl-badge">💡 Pearl of the Day</span><span class="pearl-topic">' + p.t + '</span></div>' +
      '<div class="pearl-q">' + p.q + '</div>' +
      '<div class="pearl-opts">' + opts + '</div>' +
      '<div class="pearl-exp" id="' + elId + '-exp"></div>';
    var answered = false;
    el.querySelectorAll('.pearl-opt').forEach(function (b) {
      b.onclick = function () {
        if (answered) return; answered = true;
        var chosen = parseInt(b.getAttribute('data-i'), 10);
        el.querySelectorAll('.pearl-opt').forEach(function (x, i) {
          x.classList.add('locked');
          if (i === p.a) x.classList.add('correct');
          else if (i === chosen) x.classList.add('wrong');
        });
        var exp = document.getElementById(elId + '-exp');
        exp.innerHTML = (chosen === p.a ? '<strong class="pearl-ok">✓ Correct.</strong> ' : '<strong class="pearl-no">✗ Not quite.</strong> ') + p.e;
        exp.classList.add('show');
      };
    });
  };
})();
