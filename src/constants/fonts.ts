// import localFont from 'next/font/local'
import { VT323, Space_Mono } from 'next/font/google'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'

interface AppFonts {
  primary: NextFontWithVariable
  secondary: NextFontWithVariable
}

//load the Google fonts
const VT323Font = VT323({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
})

const SpaceMonoFont = Space_Mono({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary',
})

//load the local fonts
// const drallen = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Drallen.woff',
//     },
//   ],
//   variable: '--font-secondary',
// })
//
// // load the local fonts
// const spiritedAway = localFont({
//   src: [
//     {
//       path: '../../public/fonts/SpiritedAway/SpiritedAway.woff',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/SpiritedAway/SpiritedAwayBold.woff',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-secondary',
// })

//define the fonts object
const fonts: AppFonts = {
  primary: VT323Font,
  secondary: SpaceMonoFont,
}

export default fonts
