// import styled from 'styled-components'
import { Flames } from '@/components/artwork/flames/Flames'
import { Metadata } from 'next'
import PageTitle from '@/components/common/page/PageTitle'

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
      <div className='flex w-[70%] flex-col items-center justify-center'>
        <h1>{`80'S INSPIRED HEAVY METAL/ROCK`}</h1>
        <p>
          ...Bad Contact from Athens, Greece, is a band dedicated to creating passionate heavy metal music. Inspired by
          the iconic sounds of the 80s, we blend elements from beloved bands of that era, to evoke you feelings of
          nostalgia...
        </p>
        <p>
          Etiam mollis diam libero, in suscipit odio luctus nec. Phasellus sit amet blandit augue, et viverra nunc.
          Pellentesque quis erat egestas, bibendum ante in, laoreet orci. Morbi dapibus luctus interdum. Nunc fermentum
          pellentesque erat sed malesuada. Mauris finibus lobortis dui. Integer dignissim, dui vitae aliquet tincidunt,
          purus augue euismod massa, vitae eleifend purus lacus vel mi. Praesent tempus ligula eros, porta sodales
          mauris lacinia vehicula. Curabitur ullamcorper ut tellus a tristique. Phasellus ex tortor, elementum quis
          facilisis ac, laoreet vel urna. Etiam lacinia eros a risus mollis tempor. Aliquam ornare ipsum elit, sit amet
          feugiat lorem scelerisque non. Suspendisse auctor mi leo, a tempor nisi dictum vitae. Vestibulum eu cursus
          dui. Pellentesque tincidunt, ante non laoreet tempus, massa purus iaculis risus, eu condimentum eros diam
          vitae purus. Sed facilisis risus luctus augue blandit faucibus.
        </p>
        <p>
          In sollicitudin vehicula dictum. Aliquam erat volutpat. Donec in nibh a lacus auctor sagittis. Aliquam commodo
          turpis id ullamcorper posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Maecenas at mollis elit. Proin tortor odio, bibendum at neque at, malesuada tristique sem. Ut
          tristique arcu erat, et volutpat purus suscipit eget. Donec vel sodales odio. Etiam euismod nulla at justo
          maximus maximus. Sed porttitor nisl quam, at finibus tortor porttitor et. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Integer sed magna sollicitudin, fringilla
          ligula ac, vehicula augue. Quisque fermentum vulputate elementum. Aliquam eget augue dolor.
        </p>
        <p>
          Ut porttitor sodales lacus, vel congue nibh sollicitudin non. Vivamus a aliquam enim. Donec tempus luctus
          maximus. Donec bibendum, velit ac ornare commodo, quam purus finibus tellus, quis ornare tellus dolor vitae
          enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec est a elit fermentum rhoncus a
          vel mi. Praesent porttitor eros eros, at cursus turpis ornare quis. Suspendisse potenti. Morbi faucibus
          vestibulum lobortis. Vivamus venenatis placerat hendrerit. Aliquam ornare eget nibh eget sollicitudin.
          Suspendisse ornare augue sem, ac bibendum lorem consectetur vitae. In dictum lacus tellus, at auctor nisl
          suscipit in.
        </p>
        <p>
          Nulla imperdiet varius neque, vel mollis ipsum faucibus vel. Integer fermentum egestas nulla sed tempor. Nam
          euismod, dolor ut ultricies lobortis, risus justo faucibus arcu, a pulvinar felis odio et erat. Vestibulum
          pretium molestie metus, ut convallis odio porta at. Vestibulum nec convallis augue. Praesent maximus pulvinar
          sodales. Suspendisse diam ligula, volutpat in condimentum nec, feugiat non mauris. Vestibulum mattis, metus eu
          laoreet elementum, lacus felis tempus risus, in placerat turpis nunc in ante. Pellentesque orci odio,
          vestibulum dignissim condimentum quis, volutpat ac ipsum. Donec dui nibh, dictum a ligula vel, pellentesque
          vulputate tellus. Morbi mattis dolor viverra tristique tempus. Vivamus volutpat eget mi sed mattis. Ut a augue
          nec nulla tempus porttitor id et nulla. Etiam vulputate imperdiet erat, lobortis egestas est eleifend sit
          amet. Nam in eros congue, lacinia arcu et, mollis tortor. Morbi metus ante, blandit sit amet nisi sit amet,
          blandit egestas lacus.
        </p>
      </div>
      {/*<StyledTerrainImage src={'/images/Terrain.svg'} alt={'Logo of the Project'} width={1085} height={536} />*/}
    </>
  )
}
