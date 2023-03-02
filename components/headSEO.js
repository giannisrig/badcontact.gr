import Head from "next/head";
import {useRouter} from "next/router";

export default function HeadSEO( props ) {

    const router        = useRouter()
    const canonicalUrl  = (`https://badcontact.gr` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
    const img           = ( props.image ? props.image : '' );

    return (
        <Head>
            <title>{props.title}</title>
            <link rel='canonical' href={canonicalUrl} />

            <meta name="description" content={props.description} />
            <meta name='robots' content='index,follow' />
            <meta name="copyright" content="Bad Contact" />
            <meta name="author" content="Bad Contact" />
            <meta name="distribution" content="global" />

            <meta property="og:title" content={props.title} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={img} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={props.description} />
            <meta property="og:site_name" content="Bad Contact" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site:id" content="@badcontactband" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={img} />
        </Head>
    );

}
