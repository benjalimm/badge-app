
export function calculateBadgePrice(baseBadgePrice: number, level: number): number {
  const multiplier = Math.pow(2.5, level - 1)
  return (baseBadgePrice) * multiplier
}