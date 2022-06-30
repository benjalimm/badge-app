import { Provider } from "@wagmi/core";

export function shortenAddress(address: string): string {
  return address.substring(0, 4) + ".." + address.substring(address.length - 3, address.length);
}

export function isValidEthAddress(address: string | null | undefined): boolean {
  if (address) {
    const contains0x = address.includes("0x");
    const isValidLength = address.length === 42;
    return contains0x && isValidLength;
  }
  return false
}

export function isEns(ens: string | null | undefined): boolean {
  if (ens) {
    const splitString = ens.toLowerCase().split(".");
    return splitString.length >= 2 && splitString[splitString.length - 1] === "eth";
  }
  return false
}

export function getAddressForEns(ens: string, provider: Provider): Promise<string> {
  return provider.resolveName(ens);
}