import Head from "next/head";
import {useRouter} from "next/router";
import defaultImg from "@/public/images/social/og/bad-contact-band.jpg";

export default function HeadSEO( props ) {

    const router        = useRouter()
    const canonicalUrl  = (`https://badcontact.gr` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    const img           = ( props.image ? props.image : defaultImg );
    const desc          = ( props.description ? props.description :"Get ready to rock with Bad Contact, a fresh new heavy metal/rock band from Athens, Greece. Their rousing and impassioned music reflects the sound of the 80's era, blending elements of beloved motivational bands with a modern rock n roll attitude. Their debut single 'Out of the Blue' features a special guest appearance by Andreas Lagios from Nightstalker on bass. Discover the latest addition to the heavy metal/rock scene with Bad Contact." )


    return (
        <Head>
            <title>{props.title}</title>
            <link rel='canonical' href={canonicalUrl} />

            <meta name="description" content={desc} />
            <meta name='robots' content='index,follow' />
            <meta name="copyright" content="Bad Contact" />
            <meta name="author" content="Bad Contact" />
            <meta name="distribution" content="global" />

            <meta property="og:title" content={props.title} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={img} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={desc} />
            <meta property="og:site_name" content="Bad Contact" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site:id" content="@badcontactband" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={img} />
        </Head>
    );

}
