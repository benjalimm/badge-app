
export interface EntityInfo {
  address: string,
  name: string,
  genesisTokenHolder: string,
  tokenHolderEnsName?: string
}

export type AnimationType = "EntryToLoading" | "LoadingToSuccess" | "None"
