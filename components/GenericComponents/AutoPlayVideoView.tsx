import React from 'react';

export default function AutoPlayVideoView({ source }: { source: string }) {
  return <div dangerouslySetInnerHTML={{ __html: 
    `<video autoPlay loop muted playsinline src="${source}"> 
      <source src="${source}" type="video/mp4"/>
    </video>` 
  }}/>
}