import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import fonts from "@/helpers/fonts";
import styles from "@/styles/components/Breadcrumbs.module.scss";

export default function Breadcrumbs() {

    const router = useRouter();
    const interleave = (arr, thing) => [].concat(...arr.map(n => [n, thing])).slice(0, -1)
    let breadcrumbs = null;

    function formatText(string) {
        string = string.replace(/-/g, ' ')
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (router) {
        const linkPath = router.asPath.split('/');
        linkPath.shift();

        breadcrumbs = interleave(
            linkPath.map((path, i) => {

                return {breadcrumb: path, type: 'link', href: '/' + linkPath.slice(0, i + 1).join('/')};

            }), {breadcrumb: '/', type: 'separator'}
        );

    }

    if( !breadcrumbs ){
        return null;
    }

    let counter = 1;

    return (
        <nav aria-label="breadcrumbs" className={styles.breadcrumbs}>
            <ol className={fonts.grava400.className}
                itemScope={true}
                itemType="https://schema.org/BreadcrumbList">

                <li itemProp="itemListElement"
                    itemScope={true}
                    itemType="https://schema.org/ListItem">
                    <Link href="/"
                          itemScope={true}
                          itemType="https://schema.org/WebPage"
                          itemProp="item"
                          itemID={'https://badcontact.gr/'}>
                        <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content={'1'} />
                </li>
                <li className={styles.separator}>
                    /
                </li>
                {breadcrumbs.map((breadcrumb, i) => {

                    if( breadcrumb.type !== 'separator' ){
                        counter++;
                    }

                    return (
                        <li key={breadcrumb.breadcrumb + breadcrumb.type}
                            className={breadcrumb.type === 'separator' ? styles.separator : styles.link }
                            itemProp={breadcrumb.type === 'link' ? 'itemListElement' : undefined }
                            itemScope={breadcrumb.type === 'link' ? true : undefined }
                            itemType={breadcrumb.type === 'link' ? 'https://schema.org/ListItem' : undefined }>
                            {
                                breadcrumb.type === 'link' ?
                                   <>
                                       <Link href={breadcrumb.href}
                                             className={(i + 1) === breadcrumbs.length ? styles.current : undefined}
                                             itemScope={true}
                                             itemType="https://schema.org/WebPage"
                                             itemProp="item"
                                             itemID={breadcrumb.href}>
                                           <span itemProp="name">{  formatText(breadcrumb.breadcrumb) }</span>
                                       </Link>
                                       <meta itemProp="position" content={(counter).toString()} />
                                   </>
                                    :
                                    <span itemProp="name" className={breadcrumb.type === 'current' ? styles.current : styles.link }>
                                        {formatText(breadcrumb.breadcrumb)}
                                    </span>
                            }

                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
