// import styles from "@/styles/pages/Merchandise.module.scss";

import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import Notice from "@/components/notice";
import HeadSEO from "@/components/headSEO";
import ogimg from "@/public/images/social/og/merchandise-bad-contact-band.jpg";

export default function Merch() {

    return (
        <>
            <HeadSEO title='Merchandise Shop - Bad Contact' image={ogimg.src} />
            <Layout>
                <div>
                    <PageHeader title='MERCHANDISE' subtitle='The official band online shop to purchase our merchandise.' />
                </div>
                <Notice title='MERCH IS NOT AVAILABLE YET' btnLink='/donate' btnText='MAKE A DONATION' text='We are doing what we can in order to create our first merch and make it available to you through our official online shop. You can help us speed things up by making a donation.' />
            </Layout>
        </>
    );
}
