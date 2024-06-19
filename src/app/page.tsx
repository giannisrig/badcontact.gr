import styled from 'styled-components'
import { Flames } from '@/components/flames/Flames'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Bad Contact Home',
    description: 'Welcome to Next.js',
    icons: {
        icon: '/images/favicon.png',
    },
}

// export const StyledTerrainImage = styled.img`
//   position: fixed;
//   max-width: 103%;
//   width: 103%;
//   bottom: -2%;
// `
//
// export const StyledEyeImage = styled.img`
//   position: fixed;
//   width: 100%;
//   top: 10%;
// `

/**
 * Keep this as a Server Component
 * @constructor
 */
export default function HomePage() {

  return (
    <>
        <Flames />
        {/*<StyledEyeImage src={'/images/EyeFlames.svg'} alt={'Logo of the Project'} width={869} height={718} />*/}
        {/*<StyledTerrainImage src={'/images/Terrain.svg'} alt={'Logo of the Project'} width={1085} height={536} />*/}
    </>
  )
}
