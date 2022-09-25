import * as actionTypes from "../actions/actionTypes"
import initial from "./initial"

export default function teamsReducer(state = initial.teams, action) {

    switch (action.type) 
    {

        case actionTypes.GET_TEAMS_DATA_SUCCESS:
           
            return action.payload;
        
        default:

            return state;

    }
}
