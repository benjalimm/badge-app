import { Signer } from "ethers";
import { Entity, Entity__factory } from "../typechain";

const entityAddress: string = "0x3f488862578CaE52E6BA4f71cb7d34956FdAA783"
const user2Address: string = "0x845B62836650b762996FDf596AabFd19AfFAE02D"
export async function awardPermissionToken(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)

  await entity.assignPermissionToken(user2Address, 2, "")
}

export async function revokePermissionToken(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.revokePermissionToken(user2Address);
}

export async function surrenderPermissionToken(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.surrenderPermissionToken();
}

export async function reassignGenesisToken(signer: Signer) {
  const entity = Entity__factory.connect(entityAddress, signer)
  await entity.reassignGenesisToken(user2Address, "", true, "");
}