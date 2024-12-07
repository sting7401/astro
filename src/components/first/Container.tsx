import { useState } from 'react';

export default function Container() {
    const [count, setCount] = useState<number>(0); // 타입스크립트를 사용하여 상태의 타입을 명시적으로 지정

    const countHandler = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <button type="button" onClick={countHandler}>
            Container : {count}
        </button>
    );
}
