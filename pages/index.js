import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import ButtonLink from '../components/buttonLink'
import fonts from '../helpers/fonts'
import singleBgIllustration from '../public/images/singleIllustration.svg'
import coverArtworkImg from '../public/images/BadContact-OutOfTheBlue2023ArtworkCover.jpg'
export default function Home() {


  return (
      <div className={styles.container}>
        <Head>
          <title>Bad Contact - 80s Heavy Rock Band from Athens Greece</title>
          <link rel="icon" href="/images/favicon.png" />
        </Head>

        <main className={fonts.grava400.className}>

          <Header/>


          <section className={styles.aboutSection}>

            <h1 className={` ${styles.title} ${fonts.voltec.className}`}>
              <span className={styles.glitch}><span>80'S</span> HEAVY ROCK</span>
              <span className={styles.glitch}>80'S HEAVY ROCK</span>
              <span className={styles.glitch}>80'S HEAVY ROCK</span>
            </h1>

            <div className={styles.line}/>

            <h2 className={styles.subtitle}>
              Bad Contact from Athens Greece, is a band formed to create a rousing impassioned music of heavy rock, reflecting the sound of the 80's era by combining music elements of the beloved motivational bands we grew up with, integrating a rock n roll attitude and conveying positive vibes through our art.
            </h2>

            <div className={` ${styles.btn} ${fonts.voltec.className}`}>
              <Image
                  src="/images/metal.svg"
                  alt="Heavy Rock Metal Sign"
                  width={22}
                  height={22}
              />
              Learn More About Us
            </div>

          </section>

          <section className={styles.singleSection}>

            <div className={styles.illustrationContainer}>

              <Image src={singleBgIllustration} alt="Bad Contact Out of the Blue Background Illustration" title="Bad Contact Out of the Blue Background Illustration" />

            </div>

            <div className={styles.content}>

              <div className={styles.artworkCover}>

                <Image src={coverArtworkImg} alt="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" title="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" width={315} height={315} />

              </div>

              <div className={styles.contentContainer}>

                <h3 className={` ${styles.singleTitle} ${fonts.voltec.className}`}>
                  OUT OF THE BLUE <span>(2023)</span>
                </h3>

                <div className={styles.line}/>

                <h4 className={styles.subtitle}>
                  “Out of the Blue” is our first single and official release.
                  Listen to it on all the streaming platforms:
                </h4>

                <div className={styles.buttonsContainer}>

                  <ButtonLink href="#" image="/images/spotify.svg" text="SPOTIFY" />
                  <ButtonLink href="#" image="/images/bandcamp-bad-contact.svg" text="BANDCAMP" />
                  <ButtonLink href="#" image="/images/youtube-bad-contact.svg" text="YOUTUBE" />
                  <ButtonLink href="#" image="/images/apple-music-bad-contact.svg" text="APPLE MUSIC" />
                  <ButtonLink href="#" image="/images/pandora-bad-contact.svg" text="PANDORA" />

                </div>

              </div>

            </div>

          </section>


        </main>

        <Footer/>

      </div>
  )
}