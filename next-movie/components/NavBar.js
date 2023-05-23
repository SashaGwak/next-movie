'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; 

export default function NavBar() {
    const pathname = usePathname();
    // styles jsx로 작업하더라도 각 style 들은 유니크 값을 가지기때문에 같은 h1태그 등을 쓰더라도 다른 파일의 css에 간섭받지 않음
    // 결국 스타일의 적용범위를 해당 컴포넌트 내부로 한정하는 것
    return (
        <nav> 
            <img src="/vercel.svg" />
            <div>
                <Link href="/">
                    <span className={pathname === "/" ? "active" : ""}>Home</span>
                </Link>
                <Link href="/about">
                    <span className={pathname === "/about" ? "active" : ""}>About</span>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 10px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                    max-width: 100px;
                    margin-bottom: 5px;
                }
                nav span {
                    font-weight: 600;
                    font-size: 18px;
                }
                .active {
                    color: tomato;  
                }
                nav div {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    );
}