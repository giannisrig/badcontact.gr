import Head from 'next/head'
import styles from "@/styles/pages/Discography.module.scss";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";
import AlbumItem from "@/components/albumItem";
import coverArtworkImg from "@/public/images/BadContact-OutOfTheBlue2023ArtworkCover.jpg";
import newAlbumImg from "@/public/images/new-album.jpg";

export default function Discography() {
    return (
        <>
            <Head>
                <title>Complete Discography - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='DISCOGRAPHY' subtitle='All official music releases of Bad Contact.' />
                </div>
                <div className={styles.albums}>
                    <AlbumItem title='OUT OF THE BLUE (2023)' subtitle='feat. Andreas Lagios (Nightstalker)' img={coverArtworkImg} link='/discography/out-of-the-blue/' release='SINGLE' />
                    <AlbumItem title='FULL ALBUM (2023/2024)' subtitle='Composing for the album is finished and we are on a pre-production phase. You can support our future release, by making a donation.' img={newAlbumImg} link='/donate/' btnText='DONATE' release='LP ALBUM' />
                </div>
            </Layout>
        </>
    );
}
