
export interface EntityInfo {
  address: string,
  name: string,
  genesisTokenHolder: string,
  tokenHolderEnsName?: string,
  badgeToken: string,
  permissionToken: string
}

export type AnimationType = "EntryToLoading" | "LoadingToSuccess" | "None"
