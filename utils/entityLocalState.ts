import { EntityInfo } from "../schemas/EntityLocalStorage";
import { setValue, getValue } from "../utils/storage";

export function setCurrentEntity(entity: EntityInfo) {
  setValue("currentEntity", JSON.stringify(entity));
}

export function getCurrentEntity(): EntityInfo | undefined {
  const currentEntity = getValue("currentEntity");
  if (currentEntity) {
    return JSON.parse(currentEntity);
  }
  return undefined;
}

