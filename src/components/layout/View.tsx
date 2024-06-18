import React from "react";
import {ScreenLevelView} from "@/components/layout/ScreenLevelView/ScreenLevelView";
import {PageContentContainer} from "@/components/common/page/PageContentContainer";

export const View = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            {/* For BG decorations */}
            <ScreenLevelView level={0} />
            {/* For Flames */}
            <ScreenLevelView level={1} />
            {/* Eye */}
            <ScreenLevelView level={2} />
            <PageContentContainer>
                {children}
            </PageContentContainer>
            {/* Anything that covers content, Terrain */}
            <ScreenLevelView level={4} />
            {/* Anything that's above everything, logo, buttons */}
            <ScreenLevelView level={5} />
        </>
    )
}