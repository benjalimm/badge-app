
export const isOnClient = () => typeof window !== 'undefined';

type StorageKey = "CURRENT_ENTITY"

export function setValue(key: StorageKey, value: string) {
  if (isOnClient()) {
    localStorage.setItem(key, value)
  }
}

export function clearValue(key: StorageKey) {
  if (isOnClient()) {
    localStorage.removeItem(key)
  }
}
export function getValue(key: StorageKey): string | undefined {
  if (isOnClient()) {
    const value = localStorage.getItem(key);
    return value !== "" ? value : undefined;
  }
  return undefined
}

export const isSet = (key: StorageKey) => getValue(key) !== undefined;