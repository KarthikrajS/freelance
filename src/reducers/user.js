import {USER_LOGGED_IN,USER_LOGGED_OUT,GET_DATA} from "../types";

export default function user(state={},action={}){
    switch (action.type){
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return{};
        case GET_DATA:
            return action.user;
        default: return state;
    }
}
