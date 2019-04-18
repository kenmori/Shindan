import React, { useState, useEffect, useCallback } from "react"

export default () => {

    const [state, setState] = useState({ value: { count: 1 } })
    const ClickFn = useCallback((state) => {
        console.log(state);
        setState((state) => ({ ...state, ...{ value: { count: state.value.count + 1 } } }))
    })
    useEffect(() => {

    });
    return (
        <div>
            {state.value.count}
            <button onClick={ClickFn}>ボタン</button>
            <div>{"fa"}</div>
        </div>
    )
}
