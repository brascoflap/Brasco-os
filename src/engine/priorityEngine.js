export function calculateScore(task) {
  let score = 0;

  const now = new Date();

  // 📅 DEADLINE (belangrijkste factor)
  if (task.deadline) {
    const daysLeft = (new Date(task.deadline) - now) / (1000 * 60 * 60 * 24);

    if (daysLeft < 1) score += 5;      // vandaag
    else if (daysLeft < 3) score += 4; // bijna
    else if (daysLeft < 7) score += 2;
  }

  // 💰 WAARDE
  if (task.value === "high") score += 4;
  if (task.value === "medium") score += 2;

  // ⏳ LEEFTIJD (blijft liggen = belangrijker)
  const age = (now - new Date(task.createdAt)) / (1000 * 60 * 60 * 24);

  if (age > 7) score += 3;
  else if (age > 3) score += 2;

  // 🚨 STUCK DETECTIE
  if (age > 10) score += 5;

  return score;
}

export function getTopTasks(tasks) {
  return tasks
    .map(task => ({ ...task, score: calculateScore(task) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}