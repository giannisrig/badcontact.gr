import styles from "@/styles/components/AboutLineupCarousel.module.scss";
import Carousel from 'nuka-carousel/es/index';
import Leonidas from "@/public/images/band/leonidas-zacharakis-vocals-bad-contact.jpg"
import Giannis from "@/public/images/band/giannis-riganas-guitars-bad-contact.jpg"
import Marios from "@/public/images/band/marios-fourlas-guitars-bad-contact.jpg"
import Ninos from "@/public/images/band/panagiotis-ninos-drums-percussion-bad-contact.jpg"
import Maria from "@/public/images/band/maria-leiloglou-bass-bad-contact.jpg"
import Vangelis from "@/public/images/band/vangelis-galanis-synths-piano-bad-contact.jpg"
import Image from "next/image";
import fonts from "@/helpers/fonts"

export default function AboutLineupCarousel() {

    const lineUp = [
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
            name: 'Maria Leiloglou',
            role: 'Bass',
            img: Maria
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
            <Carousel wrapAround={true} slidesToShow={1} adaptiveHeight={true} cellAlign={'left'} defaultControlsConfig={config}>
                {lineUp.map((itemData, i) => {
                    return(
                        <div key={i} className={styles.item} >
                            <div className={styles.imgContainer} >
                                <Image src={itemData.img} alt={'Bad Contact - '+ itemData.name + ' - ' + itemData.role } quality={100}/>
                            </div>
                            <div className={styles.info}>
                                <div className={` ${styles.name} ${fonts.voltec.className}`}>
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