import React, { useEffect, useContext } from 'react'
import Head from 'next/head';

const title = "Badge."
const description = "Attract & reward talent with on-chain merit."
const largePreviewImage = "https://www.dropbox.com/s/1e7ns2g6qn4gkw2/walletEqualsResume.jpg?raw=1"

export default function BadgeHead() {
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <meta name="title" content={title} />
    <meta name="twitter:image" content={largePreviewImage}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@badgexyz"/>
    <meta name="og:title" content={title}/>
    <meta name="og:description" content={description}/>
    <meta name="og:image" content={largePreviewImage}/>
    <meta name="og:type" content="website"/>
    <meta name="og:url" content="https://badge.xyz"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/images/badgeWhiteFavIcon_32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/images/badgeWhiteFavIcon_16.png"/>
  </Head>
}