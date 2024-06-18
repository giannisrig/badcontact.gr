import styles from "@/styles/components/MusicLineupCarousel.module.scss";
import Carousel from 'nuka-carousel/es/index';
import Leonidas from "@/public/images/band/thumb/leonidas-zacharakis-vocals-bad-contact-band.jpg"
import Giannis from "@/public/images/band/thumb/giannis-riganas-guitars-bad-contact-band.jpg"
import Marios from "@/public/images/band/thumb/marios-fourlas-guitars-bad-contact-band.jpg"
import Ninos from "@/public/images/band/thumb/panagiotis-ninos-drums-percussion-bad-contact-band.jpg"
import Vangelis from "@/public/images/band/thumb/vangelis-galanis-synths-keyboards-piano-bad-contact-band.jpg"
import Andreas from "@/public/images/band/thumb/andreas-lagios-nightstalker-out-of-the-blue-bad-featuring.jpg"
import Image from "next/image";


export default function MusicLineupCarousel() {

    const lineUp = [
        {
            name: 'Andreas Lagios',
            role: 'Bass (Special Guest)',
            img: Andreas
        },
        {
            name: 'Leonidas Zacharakis',
            role: 'Vocals',
            img: Leonidas
        },
        {
            name: 'Giannis Riganas',
            role: 'Guitars',
            img: Giannis
        },
        {
            name: 'Marios Fourlas',
            role: 'Guitars',
            img: Marios
        },
        {
            name: 'Panagiotis Ninos',
            role: 'Drums',
            img: Ninos
        },
        {
            name: 'Vangelis Galanis',
            role: 'Synths/Piano',
            img: Vangelis
        },
    ]

    const config = {
        containerClassName: styles.container,
        nextButtonClassName: styles.nextButton,
        nextButtonText: '>',
        pagingDotsClassName: styles.pagingDots,
        pagingDotsContainerClassName: styles.pagingDotsContainer,
        prevButtonClassName: styles.prevButton,
        prevButtonText: '<'
    }

    return (
        <div className={styles.slider}>
            <Carousel wrapAround={true} slidesToShow={2} adaptiveHeight={true} cellAlign={'left'} defaultControlsConfig={config}>
                {lineUp.map((itemData, i) => {
                    return(
                        <div key={i} className={styles.item} >
                            <div className={styles.imgContainer}>
                                <Image src={itemData.img} alt={itemData.name + ' ' + itemData.role + ' Bad Contact Band'} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>
                                    {itemData.name}
                                </div>
                                <div className={styles.role}>
                                    {itemData.role}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );

}
