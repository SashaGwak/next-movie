/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
    reactStrictMode: true, 
    // Redirect를 통해 다른 페이지나 사이트로 이동할 수 있게 해줄 수있음 
    // 아래 예시는 /contanct path로 들어오면 /form으로 이동하게 하는 것
    async redirects() {
        return [
            {
                source: '/contact',  // 들어오는 request 경로 패턴
                destination: '/form',  // 라우팅하려는 경로(redirect할 경로)
                permanent: false, 
                // true 일경우 client와 search엔진에 redirect를 영구적으로 cache하도록 지시하는 308 code 사용 
                // false 일경우 일시적이고 cache되지 않은 307 status code 사용
            },
            {
                source: '/siha/:params', 
                destination: `/hihi?key=${API_KEY}${encodeURIComponent("&")}:params`, // &처리 이렇게
                permanent: false,
            }// 이런식으로 계속 해서 써주면 됨
        ]
    }, 
    // rewrites는 유저를 이동시키기는 하지만 Url은 변하지 않음(프록시 역할을 하며 destination 경로를 mask)
    async rewrites() {
        return [
            {
                source: '/api/movies', 
                destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            }, 
            {
                source: '/api/movies/:id', 
                destination : `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
            }
        ]
    }
}

module.exports = nextConfig
