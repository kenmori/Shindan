import React, { useState, useCallback, useMemo } from "react"

const ExampleComponent = React.memo(({ count, ClickFn }) => {
    return <button onClick={ClickFn}>ボタン</button>
})
const CountState = React.memo(({count}) => {
    return (<div>count: {count.value}</div>);
})
const AnotherCountState = React.memo(({anotherCount}) => {
    return (<div>StateCount: {anotherCount.valueAnother}</div>);
})
export default () => {
    const [count, setState] = useState({ value: 1 })
    const [anotherCount, setAnotherCount] = useState({valueAnother: 1});
    const [a, setA] = useState(0);
    const onClickAnotherCount = useCallback(() => {
        setAnotherCount({valueAnother: anotherCount.valueAnother + 1})
    }, [anotherCount.valueAnother]);
    const onPureChange = useCallback(() => {
        setA(a+1)
    },[a]);
    return (
        <div>
            <button onClick={()=> {
                setState({value: count.value + 1})}}>+1</button><br/>
            <button onClick={onClickAnotherCount}>+1</button><br/>
           <CountState count={count} />
           <AnotherCountState anotherCount={anotherCount}/>
            <ExampleComponent ClickFn={onPureChange} count={a} />
        </div>
    )
}
