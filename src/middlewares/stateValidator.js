import tv4 from "tv4"; // Tiny Validator (for v4 JSON Schema)

import stateSchema from "middlewares/stateSchema";

export default ({ dispatch, getState }) => next => action => {
    next(action);

    if (!tv4.validate(getState(), stateSchema)) {
        console.warn("Invalid State schema detected");
    }
};
