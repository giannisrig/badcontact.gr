// import styles from "@/styles/pages/News.module.scss";
// import fonts from "@/helpers/fonts";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";
import Notice from "@/components/notice";
import ogimg from "@/public/images/social/og/news-announcements-bad-contact-band.jpg";
import HeadSEO from "@/components/headSEO";

export default function News() {

    const desc = "Stay up-to-date with Bad Contact's latest news, announcements, releases, collaborations, and live shows. Be the first to know about our newest merchandise drops. Keep rocking with your favorite heavy metal/rock band!"

    return (
        <>
            <HeadSEO title='News & Announcements - Bad Contact' description={desc} image={ogimg.src} />
            <Layout>
                <div>
                    <PageHeader title='NEWS & ANNOUNCEMENTS' subtitle='Keep posted on the latest news of the band, such as releases, merchandise, live shows collaborations & more.' />
                </div>
                <Notice title='THERE ARE NO NEWS POSTED' btnLink='/#subscribeForm' btnText='SUBSCRIBE' text='Subscribe to our newsletter if you want to be the first to know about something awesome and new of Bad Contact.' />
            </Layout>
        </>
    );
}
