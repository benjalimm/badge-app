import React from 'react';

<<<<<<< HEAD
export default function AutoPlayVideoView({ source, className, children }: 
{ source: string, className?: string, children?: JSX.Element | JSX.Element[] }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: 
    `<video autoPlay loop muted playsinline src="${source}"> 
      <source src="${source}" type="video/mp4">
      ${children}
       </source>
=======
export default function AutoPlayVideoView({ source }: { source: string }) {
  return <div dangerouslySetInnerHTML={{ __html: 
    `<video autoPlay loop muted playsinline src="${source}"> 
      <source src="${source}" type="video/mp4"/>
>>>>>>> main
    </video>` 
  }}/>
}