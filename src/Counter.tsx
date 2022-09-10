export type CounterPropsType = {
    display: number
    incrementHandler: () => void
    resetHandler: () => void
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className={'counter'}>
            <div className={'counter-value'}>
                {props.display}
            </div>
            <div>
                <button
                    className={"counter-btn counter-increment-btn"}
                    disabled={props.display === 5}
                    onClick={props.incrementHandler}
                >
                    inc
                </button>
                <button
                    className={'counter-btn counter-reset-btn'}
                    disabled={props.display === 0}
                    onClick={props.resetHandler}
                >
                    reset
                </button>
            </div>
        </div>
    )
}
