import Seo from "../components/Seo";
import Link from 'next/link';

export default function Home({results}) {
    return (
        <div className="container">
            <Seo title="Home"/>
            {!results && <h4>Loading...</h4>}
            {results?.map((movie) => (
                <Link href={`/movies/${movie.id}`} key={movie.id}> 
                    <div className="movie">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                        <h4>{movie.original_title}</h4>
                    </div>
                </Link>
            ))}
            <style jsx>{`
                .container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 20px;
                gap: 20px;
                }
                .movie img {
                max-width: 100%;
                border-radius: 12px;
                transition: transform 0.2s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie{
                    cursor: pointer;
                }
                .movie:hover img {
                transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                font-size: 18px;
                text-align: center;
                }
            `}</style>
        </div>
    );
}

// server 선행
export async function getServerSideProps() {

    const { results } = await(await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results, // 요 result를 위에서 받아줌
            // 무엇을 return하던지 props로서 Page에게 주게됨 
            // _app.js에서 사용하는 pageProps에서 받는 정보 
        }
    }
}