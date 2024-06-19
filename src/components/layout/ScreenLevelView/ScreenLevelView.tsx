import React from 'react'

export type PageLevel = 0 | 1 | 2 | 3 | 4 | 5

export const ScreenLevelView = ({ children, level }: { children?: React.ReactNode; level: PageLevel }) => (
  <div id={`level-view-${level}`} className={`fixed left-0 top-0 flex h-screen w-full justify-center z-${level}`}>
    {children}
  </div>
)
