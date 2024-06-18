import styles from "@/styles/components/Layout.module.scss";
import Header from "@/components/header";
import fonts from "@/helpers/fonts";
import Footer from "@/components/footer";

export default function Layout({ children }) {

    return (
        <>
            <Header/>
            <main className={fonts.grava400.className}>
                <div className={styles.pageContainer}>
                    <div className='container'>
                        <div className={styles.content}>
                            { children }
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );

}
