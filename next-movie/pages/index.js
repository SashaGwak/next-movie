import Seo from "../components/Seo";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home({results}) {
    const router = useRouter(); 
    // router를 이용하는 방법 1  
    // const onClick = (id, title) => {
    //     router.push(
    //       {
    //         pathname: `/movies/${id}`,
    //         query: {
    //           title,
    //         },
    //       },
    //       `/movies/${id}`
    //     );
    //   };
    return (
        <div className="container">
            <Seo title="Home"/>
            {!results && <h4>Loading...</h4>}
            {results?.map((movie) => (
                // <div onClick={() => onClick(movie.id, movie.original_title)}className="movie" key={movie.id}></div> 방법 1으로 요런식으로 덮어서 사용가능

                // Link를 사용하는 방법 2
                <Link href={{
                        pathname: `/movies/${movie.id}`, 
                        query : {
                            title : movie.original_title
                        }, 
                    }} 
                    as={`/movies/${movie.id}`}>  
                    {/* as를 통해 query masking 처리 가능 */}
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

export async function getServerSideProps() {

    const { results } = await(await fetch(`http://localhost:3000/api/movies`)).json();
    return {
        props: {
            results,
        }
    }
}