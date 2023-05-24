import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    const [title, id] = params || [];
    return (
        <div> 
            <Seo title={title}/>
            <h4>{title}</h4>
        </div>
    );
}

// api 요청하지 않고도 이렇게 SSR하고있어서 속도도 빠르고 SEO측면에서 장점 가질 수 있음 ! 
export function getServerSideProps({params: {params}}) {
    console.log(params); // [ title, id ]
    return {
        props:{
            params
        }, 
    }
}