import React, { useReducer} from "react";

const initialState = {count:0,name:"",age:0};

function reducer(state, action) {
    switch(action.type) {
        case "increment":
            return {count: state.count+1};
        case "decrement":
            return {count: state.count-1};
        default:
            throw new Error();
    }
}

function UseStateExample() {

    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <>
            <button onClick={()=>dispatch({type: "increment"})}>+</button>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type: "decrement"})}>-</button>
        </>
    )
}

export default UseStateExample;

