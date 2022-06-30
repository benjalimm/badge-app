export function isReallyEmpty(str: string | null | undefined): boolean {
  if (str) {
    return str.trim().length === 0;
  }
  return true 
}
