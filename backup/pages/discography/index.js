import styles from "@/styles/pages/Discography.module.scss";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";
import AlbumItem from "@/components/albumItem";
import coverArtworkImg from "@/public/images/BadContact-OutOfTheBlue2023ArtworkCover.jpg";
import newAlbumImg from "@/public/images/new-album.jpg";
import ogimg from "@/public/images/social/og/discography-music-bad-contact-band.jpg";
import HeadSEO from "@/components/headSEO";

export default function Discography() {

    const desc = "Discover Bad Contact's 80s-inspired heavy metal/rock discography and listen to our latest single \"Out of the Blue\" featuring Andreas Lagios from Nightstalker, self-released in 2023. Stay tuned for our upcoming full album (2023/2024) and support us by making a donation."

    return (
        <>
            <HeadSEO title='Complete Discography, Music & Releases - Bad Contact' description={desc} image={ogimg.src} />
            <Layout>
                <div>
                    <PageHeader title='DISCOGRAPHY' subtitle='All official music releases of Bad Contact.' />
                </div>
                <div className={styles.albums}>
                    <AlbumItem title='OUT OF THE BLUE (2023)' subtitle='feat. Andreas Lagios (Nightstalker)' img={coverArtworkImg} link='/discography/out-of-the-blue/' release='SINGLE' />
                    <AlbumItem title='EIGHTBALL (2024)' subtitle='Our debut full lenght album featuring 8 tracks and bringing feelings of nostalgia.' img={newAlbumImg} link='/donate/' btnText='DONATE' release='LP ALBUM' />
                </div>
            </Layout>
        </>
    );
}
