"use client"
import React from 'react'

import styles from '../assets/style/Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {

}

const Navbar = (props: Props) => {
    const router = useRouter();
    return (
        <div  className={styles.navigationBar}>
            <div onClick={()=>{router.push('/')}} className={styles.navigationBarTitle}>
                <div className={styles.navigationBarTitleMain}>
                    Authors
                </div>
                <div className={styles.navigationBarTitleSecondary}>
                    next.js
                </div>

            </div>

            <div className={styles.navigationBarMenu}>
                <ul className={styles.navigationBarMenuList}>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                    <Link href="/authors">AUTHORS</Link>
                    </li>
                    <li>
                    <Link href="/addAuthor">ADD AUTHOR</Link>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar