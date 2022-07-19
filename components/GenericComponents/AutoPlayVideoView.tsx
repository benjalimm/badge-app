import React from 'react';

export default function AutoPlayVideoView({ source, className, children }: 
{ source: string, className?: string, children?: JSX.Element | JSX.Element[] }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: 
    `<video autoPlay loop muted playsinline src="${source}"> 
      <source src="${source}" type="video/mp4">
      ${children}
       </source>
    </video>` 
  }}/>
}

