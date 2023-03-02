import styles from "@/styles/pages/ContactUs.module.scss";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";
import EmailItem from "@/components/emailItem";
import SocialLinks from "@/components/socialLinks";
import HeadSEO from "@/components/headSEO";
import ogimg from '@/public/images/social/og/contact-us.jpg'

export default function ContactUs() {

    const desc = "Contact Bad Contact, the Athens-based heavy metal/rock band founded in 2022, through our social links or email addresses. For general inquiries and information, reach out to us at info@badcontact.gr. To discuss bookings, collaborations, or serious matters, contact our manager at manager@badcontact.gr. Get in touch with us today!"

    return (
        <>
            <HeadSEO title='Contact Us - Bad Contact' description={desc} image={ogimg.src} />
            <Layout>
                <div>
                    <PageHeader title='CONTACT US' subtitle='Get in touch with us by sending us a message at our social or at the email addresses below.' />
                    <SocialLinks youtube={false} />
                </div>
                <div className={styles.emailItems}>
                    <EmailItem title='INFORMATION' text='For questions, general information or just to connect with us use the following email address to contact us:' email={'info@badcontact.gr'} />
                    <EmailItem title='MANAGEMENT' text='For bookings, collaborations and serious stuff, use the following email address to speak with our manager:' email={'manager@badcontact.gr'} />
                </div>
             </Layout>
        </>
    );
}
