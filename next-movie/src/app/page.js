'use client';
import { useState } from 'react';
// useState나 useEffect같은 react mothod를 쓰고 싶은 경우 react를 import 해야함
// 하지만 부르지 않아도 jsx를 쓸 수 있기 때문에 모든 파일에 react를 import할 필요가 없음 

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div> 
      <h1>Hello {counter}</h1>
      <button onClick={()=> setCounter((prev) => prev + 1 )}>클릭</button>
    </div>
  );
} 