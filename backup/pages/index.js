import Head from 'next/head'
import styles from '@/styles/index.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import ButtonLink from '@/components/buttonLink'
import fonts from '@/helpers/fonts'
import singleBgIllustration from '@/public/images/singleIllustration.svg'
import rocks from '@/public/images/rocks.svg'
import coverArtworkImg from '@/public/images/BadContact-OutOfTheBlue2023ArtworkCover.jpg'
import ogimg from '@/public/images/social/og/bad-contact-band.jpg'
import HeadSEO from '@/components/headSEO'
export default function Home() {
  const desc =
    "Get ready to rock with Bad Contact, a fresh new heavy metal/rock band from Athens, Greece. Their rousing and impassioned music reflects the sound of the 80's era, blending elements of beloved motivational bands with a modern rock n roll attitude. Their debut single 'Out of the Blue' features a special guest appearance by Andreas Lagios from Nightstalker on bass. Discover the latest addition to the heavy metal/rock ui with Bad Contact."

  return (
    <div className={styles.container}>
      <HeadSEO
        title='Bad Contact - 80s Heavy Metal / Rock Band from Athens Greece'
        description={desc}
        image={ogimg.src}
      />
      <Header />

      <main className={fonts.grava400.className}>
        <section className={styles.aboutSection}>
          <Image className={styles.rocks} src={rocks} alt='Heavy Rock' />

          <div className={styles.aboutContent}>
            <div>
              <h1 className={` ${styles.title} ${fonts.voltec.className}`}>
                <span className={styles.glitch}>
                  <span>80'S</span> INSPIRED
                </span>
                <span className={styles.glitch}>80'S INSPIRED</span>
                <span className={styles.glitch}>80'S INSPIRED</span>
              </h1>

              <h2 className={` ${styles.title} ${fonts.voltec.className}`}>
                <span className={styles.glitch}>HEAVY METAL/ROCK</span>
                <span className={styles.glitch}>HEAVY METAL/ROCK</span>
                <span className={styles.glitch}>HEAVY METAL/ROCK</span>
              </h2>
            </div>

            <div className={styles.line} />

            <h2 className={styles.subtitle}>
              Bad Contact from Athens Greece, is a band formed to create a rousing impassioned music of heavy rock,
              reflecting the sound of the 80's era by combining music elements of the beloved motivational bands we grew
              up with, integrating a rock n roll attitude and conveying positive vibes through our art.
            </h2>

            <Link href='/about-us' className={` ${styles.btn} ${fonts.voltec.className}`}>
              <Image src='/images/metal.svg' alt='Heavy Rock Metal Sign' width={22} height={22} />
              Learn more about us
            </Link>
          </div>
        </section>

        <section className={styles.singleSection}>
          <div className={styles.illustrationContainer}>
            <Image
              src={singleBgIllustration}
              alt='Bad Contact Out of the Blue Background Illustration'
              title='Bad Contact Out of the Blue Background Illustration'
            />
          </div>

          <div className={styles.content}>
            <Link href='/discography/out-of-the-blue' className={styles.artworkCover}>
              <Image
                src={coverArtworkImg}
                alt='Bad Contact - Out of the Blue (Single 2023) - Artwork Cover'
                title='Bad Contact - Out of the Blue (Single 2023) - Artwork Cover'
                width={315}
                height={315}
                quality={100}
              />
            </Link>

            <div className={styles.contentContainer}>
              <div className={styles.titleContainer}>
                <h3 className={` ${styles.singleTitle} ${fonts.voltec.className}`}>
                  OUT OF THE BLUE <span>(2023)</span>
                </h3>

                <h4 className={styles.feat}>
                  Featuring Andreas Lagios from{' '}
                  <a href={'https://nightstalkerband.com/'} rel='noreferrer' target={'_blank'}>
                    Nightstalker
                  </a>{' '}
                  as a special guest on the bass.
                </h4>
              </div>

              <div className={styles.buttonsContainer}>
                <ButtonLink
                  href='https://open.spotify.com/album/3KtsGWIZ3O1IlQULcWsUei'
                  image='/images/spotify.svg'
                  text='SPOTIFY'
                />
                <ButtonLink
                  href='https://badcontact.bandcamp.com/album/out-of-the-blue'
                  image='/images/bandcamp-bad-contact.svg'
                  text='BANDCAMP'
                />
                <ButtonLink
                  href='https://youtu.be/HIao6tbW-5I'
                  image='/images/youtube-bad-contact.svg'
                  text='YOUTUBE'
                />
                <ButtonLink
                  href='https://music.apple.com/us/album/out-of-the-blue-feat-andreas-lagios-single/1674087605'
                  image='/images/apple-music-bad-contact.svg'
                  text='APPLE MUSIC'
                />
                <ButtonLink
                  href='https://pandora.app.link/YHOJW136Mxb'
                  image='/images/pandora-bad-contact.svg'
                  text='PANDORA'
                />
              </div>

              <Link href='/discography/out-of-the-blue' className={` ${styles.readMore} ${fonts.voltec.className}`}>
                more information
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
