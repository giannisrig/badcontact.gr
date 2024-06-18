import React from "react";

export type PageLevel = 0 | 1  | 2 | 3 | 4 | 5

export const ScreenLevelView = ({ children, level }: { children?: React.ReactNode, level:PageLevel  }) => (
    <div className={`fixed top-0 left-0 w-full h-screen z-${level}`}>{children}</div>
)