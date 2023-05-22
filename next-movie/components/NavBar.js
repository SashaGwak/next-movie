'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 
import styles from './NavBar.module.css';

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav> 
            {/* 문자열 만들어서 여러 css 먹이기 */}
            <Link className={`${styles.link} ${pathname === "/" ? styles.active : "" }`} href="/">
                Home
            </Link>
            {/* 배열 만들어서 여러 css 먹이기 */}
            <Link className={[styles.link, pathname === "/about"? styles.active : "" ].join(' ')} href="/about">
                About
            </Link>
        </nav>
    );
}