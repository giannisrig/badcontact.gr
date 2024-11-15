import Band2 from '@/images/band/Bad-Contact-BandGroupPhoto2.jpg'
import Image from 'next/image'
import { MembersGallery } from '@/components/common/MembersGallery/MembersGallery'
import Band from '@/images/band/bad-contact-band-heavy-metal-rock.jpg'

/**
 * Keep this as a Server Component
 * @constructor
 */
export const AboutContent = () => {
  return (
    <div className='flex w-full flex-col gap-35px'>
      <section>
        <div className='square-img-container'>
          <Image
            src={Band}
            alt={'Bad Contact - Band Group Photo'}
            title={'Bad Contact - Band Group Photo'}
            quality={100}
          />
        </div>
      </section>
      <section>
        <h3>ABOUT US</h3>
        <p>
          Bad Contact from Athens Greece, is a band formed to create a rousing impassioned music of heavy rock,
          reflecting the sound of the 80s era by combining music elements of the beloved motivational bands we grew up
          with, integrating a rock n roll attitude and conveying positive vibes through our art.
        </p>
      </section>

      <section>
        <Image
          src={Band2}
          alt={'Bad Contact - Band Group Photo'}
          title={'Bad Contact - Band Group Photo'}
          quality={100}
        />
      </section>

      <section>
        <h3>OUR STORY</h3>

        <div>
          <p>
            Bad Contact is a fresh new band formed in 2022 by Giannis, Marios and Panagiotis, friends who have been
            playing with each other in various bands for many years but never in the same one altogether.
          </p>

          <p>
            The band started composing original music since day zero and after a couple of months and some lineup
            changes, the material for the first album was finished.
          </p>

          <p>
            In 2023 Bad Contact released their first official music Out of the Blue a single record featuring Andreas
            Lagios from Nightstalker as a special guest on the bass.
          </p>
        </div>
      </section>

      <section>
        <h3>LINEUP</h3>

        <p>The current lineup of Bad Contact:</p>

        <MembersGallery />
      </section>
    </div>
  )
}
