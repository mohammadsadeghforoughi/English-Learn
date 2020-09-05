import {HomepageActionTypes} from '../actions/test';

 export const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HomepageActionTypes.TEST_ACTION: {
            console.log('does worked')
            return {
                ...state
            }
        }

        default: {
            return state;
        }
    }
};

export {reducer as homepageReducer};
