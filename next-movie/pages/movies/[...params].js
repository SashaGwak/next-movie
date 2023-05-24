import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    const [title, id] = router.query.params || [];
    // SSR을 하지 않는 경우 pre-rendering 되기 때문에 useRouter를 제대로 가져오지 못함(선 html 후 js)
    // 그래서 초기값으로 빈배열을 줘서 오류 발생 막고, js 가져온 뒤 재랜더링 하면 router를 제대로 가져오는것
    return (
        <div> 
            <h4>{title}</h4>
        </div>
    );
}