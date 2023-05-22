'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 
import styles from './NavBar.module.css';

export default function NavBar() {
    const pathname = usePathname();
    return (
        // css modules 적용하기
        // 실제 브라우저 class name 에선 NarBar_nav__0Bjy이런식으로 무작위로 생성되기때문에 충돌 발생하지 않음
        // 다른곳에서도 nav라는 class명 쓸수 있는것 
        <nav className={styles.nav}> 
            <Link style={{color: pathname === "/" ? "red" : "blue" }} href="/">
                Home
            </Link>
            <Link style={{color: pathname === "/about"? "red" : "blue" }} href="/about">
                About
            </Link>
        </nav>
    );
}