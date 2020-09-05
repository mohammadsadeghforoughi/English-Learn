import {action} from "typesafe-actions";

export const HomepageActionTypes = {
    TEST_ACTION: '@@test/TEST_ACTIONNNN',
 
}

export const testAction = (data) => action(HomepageActionTypes.TEST_ACTION, data);
 