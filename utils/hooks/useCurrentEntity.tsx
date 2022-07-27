
import React, { useEffect, useState } from 'react';
import { EntityInfo } from '../../schemas/EntityInfo';
import EntityLocalStorageManager from '../EntityLocalStorageManager';
export default function useCurrentEntity(): EntityInfo | undefined {
  const [currentEntity, setCurrentEntity] = React.useState<EntityInfo | undefined>(undefined);
  const [id,setId] = useState<string>("")

  useEffect(() => {
    const idString = EntityLocalStorageManager.getLatestCurrentEntity((entityInfo) => { 
      setCurrentEntity(entityInfo);
    });
    setId(idString)

    return () => {
      EntityLocalStorageManager.stopListening(id);
    }
  },[])
  return currentEntity;
}