
import React, { useEffect } from 'react';
import { EntityInfo } from '../../schemas/EntityInfo';
import EntityLocalStorageManager from '../EntityLocalStorageManager';
export default function useCurrentEntity(): EntityInfo | undefined {
  const [currentEntity, setCurrentEntity] = React.useState<EntityInfo | undefined>(undefined);

  useEffect(() => {
    const id = EntityLocalStorageManager.getLatestCurrentEntity((entityInfo) => { 
      setCurrentEntity(entityInfo);
    });

    return () => {
      EntityLocalStorageManager.stopListening(id);
    }
  },[])

  return currentEntity
}