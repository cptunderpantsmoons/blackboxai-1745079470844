export function calculateCarbonImpact(app) {
  if (!app || !app.stats || !app.hosting) {
    console.warn('Invalid app data for carbon calculation');
    return null;
  }

  const dataTransfer = app.stats.totalKb * 0.06; // grams CO2 per KB
  const processing = app.stats.complexity * 0.002; // grams CO2 per JS operation
  const hosting = app.hosting.green ? 0 : 0.12; // grams CO2 per request

  const total = (dataTransfer + processing + hosting) * app.estimatedUsers;

  return {
    total,
    equivalent: {
      cars: total / 404000, // grams per mile
      trees: total / 21000  // grams sequestered per tree/year
    }
  };
}
