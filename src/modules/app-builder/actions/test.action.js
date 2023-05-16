import { RESET_TEST, TEST_FAILURE, TEST_SUCCESS } from "../types/test.types";

export const testSuccess = () => {
    return (dispatch) => {
        dispatch({
            type: TEST_SUCCESS,
        });
    }
}

export const testFailure = () => {
    return (dispatch) => {
        dispatch({
            type: TEST_FAILURE,
        });
    }
}

export const resetTest = () => {
    return (dispatch) => {
        dispatch({
            type: RESET_TEST,
        });
    }
}