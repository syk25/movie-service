import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => {
        setKeyword(event.target.value);
    };
    console.log("I run all the time");

    const iRunOnlyOnce = () => {
        console.log("I run only once");
    };

    useEffect(iRunOnlyOnce, []);
    useEffect(() => console.log("Call the API"), []); // 최초 랜더링 시에만 실행(추종하는 상태가 없으므로)
    useEffect(() => {
        if (keyword !== "" && keyword.length > 5) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]); // keyword 상태가 변경될 때만 useEffect의 콜백함수 실행
    useEffect(() => {
        console.log("I run when counter changes");
    }, [counter]);
    useEffect(() => {
        console.log("I run when keyword changes");
    }, [keyword]);

    useEffect(() => {
        console.log("I run when keyword and counter changes");
    }, [keyword, counter]);
    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type='text'
                placeholder='Search here'
            />
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default App;
