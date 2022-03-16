
export const isOnClient = () => typeof window !== 'undefined';

export function setValue(key: string, value: string) {
  if (isOnClient()) {
    localStorage.setItem(key, value)
  }
}

export function clearValue(key: string) {
  if (isOnClient()) {
    localStorage.removeItem(key)
  }
}
export function getValue(key: string): string | undefined {
  if (isOnClient()) {
    const value = localStorage.getItem(key);
    return value !== "" ? value : undefined;
  }
  return undefined
}

export const isSet = (key: string) => getValue(key) !== undefined;