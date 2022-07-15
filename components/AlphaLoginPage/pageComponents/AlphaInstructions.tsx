import React from 'react';
import AutoPlayVideoView from '../../GenericComponents/AutoPlayVideoView';
import style from "./AlphaInstructions.module.scss";

export default function AlphaInstructions() {
  return <div className={style.container}>
    <AutoPlayVideoView 
      className={style.video}
      source={"videos/sampleNFTVideos/badgeKeyboard.mp4"}
    />

    <h1 className={style.header}>Get an intro from someone on Badge</h1>
    <p></p>

  </div>
} 