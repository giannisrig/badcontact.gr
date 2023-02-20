import Head from "next/head";
import {useRouter} from "next/router";

export default function HeadSEO( props ) {

    const router        = useRouter()
    const canonicalUrl  = (`https://badcontact.gr` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

    return (
        <Head>
            <title>{props.title}</title>
            <link rel='canonical' href={canonicalUrl} />
            {/*<meta name="description" content="Some description here 2" />*/}
        </Head>
    );

}
