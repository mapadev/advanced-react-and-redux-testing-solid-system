import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import reducers from "reducers";

function Root(props) {
    const initialState = props.initialState || {};

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return <Provider store={store}>{props.children}</Provider>;
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
