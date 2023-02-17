import styles from "@/styles/components/MusicLineupCarousel.module.scss";
import Carousel from 'nuka-carousel/es/index';
import fonts from "@/helpers/fonts";

export default function MusicLineupCarousel() {

    const lineUp = [
        {
            name: 'Andreas Lagios',
            role: 'Bass (Special Guest)',
            img: ''
        },
        {
            name: 'Giannis Riganas',
            role: 'Guitars',
            img: ''
        },
        {
            name: 'Marios Fourlas',
            role: 'Guitars',
            img: ''
        },
        {
            name: 'Panagiotis Ninos',
            role: 'Drums',
            img: ''
        },
        {
            name: 'Leonidas Zacharakis',
            role: 'Vocals',
            img: ''
        },
        {
            name: 'Vaggelis Galanis',
            role: 'Synths/Piano',
            img: ''
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
                            <div className={styles.imgContainer} />
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
