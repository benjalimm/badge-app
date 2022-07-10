
export const isOnClient = () => typeof window !== 'undefined';

const BadgeStoragePrecursorKey = "badge."
type StorageKey = "current_entity"

export function generateKey(key: StorageKey): string {
  return `${BadgeStoragePrecursorKey}${key}`;
}

export function setValue(key: StorageKey, value: string) {
  if (isOnClient()) {
    const finalKey = generateKey(key)
    localStorage.setItem(finalKey, value)
  }
}

export function clearValue(key: StorageKey) {
  if (isOnClient()) {
    const finalKey = generateKey(key)
    localStorage.removeItem(finalKey)
  }
}
export function getValue(key: StorageKey): string | undefined {
  const finalKey = generateKey(key)

  if (isOnClient()) {
    const value = localStorage.getItem(finalKey);
    return value !== "" ? value : undefined;
  }
  return undefined
}

export const isSet = (key: StorageKey) => getValue(key) !== undefined;