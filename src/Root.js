import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers";

function Root(props) {
    const initialState = props.initialState || {};

    return (
        <Provider store={createStore(reducers, initialState)}>
            {props.children}
        </Provider>
    );
}

// // ALTER: Default initialState using destructuring:
// function Root({children, initialState = {}}) {
//     return (
//         <Provider store={createStore(reducers, initialState)}>
//             {children}
//         </Provider>
//     );
// }

export default Root;
