import fonts from '@/helpers/fonts'
import { useSelector, useDispatch } from 'react-redux'; // updated
import { selectMobileMenuOpen, setMobileMenuOpen } from '@/store/slices/mobileMenuSlice'; //updated
import styles from '@/styles/components/MobileMenu.module.scss'
import Link from 'next/link'
import logo from '@/public/images/logo.svg'
import {useEffect, useRef} from "react";

export default function MobileMenu() {

    const dispatch          = useDispatch();
    const mobileMenuOpen    = useSelector(selectMobileMenuOpen); // updated
    const header            = useRef(null);

    useEffect(() => {

        if( mobileMenuOpen ){
            header.current.style.transform = 'translateX(0)';
        }
        else {
            header.current.style.transform = 'translateX(100%)';
        }

    }, [mobileMenuOpen])

    function closeMobileMenu(e) {
        e.preventDefault();
        dispatch(setMobileMenuOpen(false));
    }

    return (
        <header className={` ${styles.mobileMenu} ${fonts.grava400.className}`} ref={header}>

            <div className={styles.close} onClick={closeMobileMenu}>
                <svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
            </div>

        </header>
    );
}
