export function calculateBXP(level:number): number {
  const baseXP = 10;
    
  if (level > 0) {

    let totalXP = 0
    for (let i = level; i > 0; i--) {
      const xp = (baseXP) + (0.25 * totalXP)
      totalXP += xp;
    }
    return totalXP
  }
    
  return 0
}