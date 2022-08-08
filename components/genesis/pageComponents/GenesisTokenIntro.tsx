import React from 'react';
import AutoPlayVideoView from '../../GenericComponents/AutoPlayVideoView';
import style from './GenesisTokenIntro.module.scss';

export default function GenesisTokenIntro({ onContinue }: { onContinue: () => void }) {
  return <div className={style.container}>
    <AutoPlayVideoView 
      source="videos/permissionTokens/genesisToken.mp4" 
      className={style.video}
    />
    <h1 className={style.title}>
      Mint Genesis token
    </h1>
    <p className={style.body}>
      The Genesis permission token is minted to the original registrant of an entity. It gives you the ability to reward Badges as well as issue permission tokens to others. Athough only one Genesis token exists, they can be reassigned to someone else in the future.
    </p>
    <button className={style.button} onClick={onContinue}>
      Continue
    </button>

  </div>
}