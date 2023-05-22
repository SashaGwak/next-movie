// next가 index를 렌더링하기 전에 가장 먼저 들리는 곳 !
import NavBar from '../components/NavBar';
// app.js에서는 모든 css파일 Import 가능. 다른 곳에서는 module만 가능
import '../styles/globals.css';

// 모든 페이지는 component, pageProps 를 통해 렌더링 됨
// props로 받은 componet는 요청한 페이지로  GET /요청을 보냈다면 /pages/index.js파일을 의미함
// pageProps는 페이지 genlnitialProps를 통해내려받은 props들
// genlnitialProps ? 페이지마다 사전에 불러와야할 데이터를 서버에서 미리 처리하도록 도와주는 것 (후에 데이터 처리하며 자세히 알아보자!)
export default function App({ Component, pageProps }) {
    return (
        <>
            <NavBar />
            <Component {...pageProps}/>
            <style jsx global>{`
                span {
                    color : green;
                }
            `}</style>
        </>
    );
}

/*
_app.js ? 

가장 최초로 실행되는 파일 
원래 생성하지 않아도 되는 파일이지만(next 자체제공) 커스텀 하기 위해서 사용

server only file으로 
client에서 사용하는 로직을 사용하면 안됨(window, DOM 로직)

*/