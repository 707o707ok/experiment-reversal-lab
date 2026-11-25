function analyze(control, variant, reference, rates) {
  const aggregate = (mix, arm) => mix * arm.mobile + (1 - mix) * arm.desktop;
  const a = aggregate(control, rates.control);
  const b = aggregate(variant, rates.variant);
  const referenceA = aggregate(reference, rates.control);
  const referenceB = aggregate(reference, rates.variant);
  const gap = rates.variant.mobile - rates.variant.desktop;
  const crossing = gap === 0 ? null : (a - rates.variant.desktop) / gap;
  return {a, b, raw: b - a, referenceA, referenceB, adjusted: referenceB - referenceA, crossing};
}

if (typeof module !== "undefined") module.exports = {analyze};
