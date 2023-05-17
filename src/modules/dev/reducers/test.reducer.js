import { TEST_FAILURE, TEST_SUCCESS } from "../types/test.types";

const initialState = {
    success: false,
    error: false,
    message: "This is a test module."
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_SUCCESS:
            return {
                ...state,
                success: true
            };
        case TEST_FAILURE:
            return {
                ...state,
                success: true
            };
        case TEST_FAILURE:
            return initialState;
        default:
            return state;
    }
}

export default testReducer;