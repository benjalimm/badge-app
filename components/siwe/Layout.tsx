import Header from "./Header"
import type { ReactChildren } from "react"
import React from 'react';

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}