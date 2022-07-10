import { EntityInfo } from "../schemas/EntityInfo";
import { setValue, getValue } from "./storage";
import { v4 as uuidv4 } from 'uuid';

export function setCurrentEntityInLocalStorage(entity: EntityInfo) {
  setValue("CURRENT_ENTITY", JSON.stringify(entity));
}

export function getCurrentEntityFromLocalStorage(): EntityInfo | undefined {
  const currentEntity = getValue("CURRENT_ENTITY");
  if (currentEntity) {
    return JSON.parse(currentEntity);
  }
  return undefined;
}

type Update = (info?: EntityInfo) => void;
export default class EntityLocalStorageManager {

  static updates: { update: Update, id: string }[] = [];
  
  static getLatestCurrentEntity(update: Update): string {
    const currentEntity = getCurrentEntityFromLocalStorage();

    //1. If latest exist, update;
    if (currentEntity) {
      update(currentEntity);
    } 

    // 2. Listen for future updates;
    const id = uuidv4()
    this.updates.push({update, id });
    return id;
  }

  static stopListening(id: string) {
    const index = this.updates.findIndex((update) => update.id === id);
    delete this.updates[index];
  }

  static setLatestCurrentEntity(entity: EntityInfo) {
    setCurrentEntityInLocalStorage(entity);
    this.updates.forEach(update => update.update(entity));
  }
}