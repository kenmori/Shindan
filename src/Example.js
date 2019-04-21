import React, { useState, useEffect, useCallback, useMemo } from "react"

const ExampleComponent = useMemo(({ count }) => {
    console.log("render");
    return 1;
}, [])
export default () => {

    const [state, setState] = useState({ value: { count: 1 } })
    const ClickFn = useCallback(() => {
        // console.log(state);
        setState((state) => ({ ...state, ...{ value: { count: state.value.count + 1 } } }))
    })
    // useEffect(() => {

    // });
    return (
        <div>
            {state.value.count}
            <button onClick={ClickFn}>ボタン</button>
            <div>{"fa"}</div>
            <ExampleComponent count={state.value.count} />
        </div>
    )
}
