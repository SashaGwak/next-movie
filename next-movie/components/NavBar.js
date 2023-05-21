'use client'
import Link from 'next/link';
// link는 client side navigation을 제공
// 그냥 a href만 쓰면 전체페이지를 다 렌더링해서 속도가 느려짐
import { usePathname, useRouter } from 'next/navigation';
// next/router 사용되지 않음 -> navigation으로 변경 

export default function NavBar() {
    const pathname = usePathname();
    return (
        <nav>
            <Link style={{color: pathname === "/" ? "red" : "blue" }} href="/">
                Home
            </Link>
            <Link style={{color: pathname === "/about"? "red" : "blue" }} href="/about">
                About
            </Link>
        </nav>
        // <nav>
        //     <a href="/">Home</a>
        //     <a href="/about">About</a>
        // </nav>
    );
}