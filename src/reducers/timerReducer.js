
export default function timerReducer(state=3,action){
    switch (action.type){
        case "FOCUS":
            return ;
        case "BREAK":
            return state-60;
        case "LONG_BREAK":
            return state-100;
        default:
            return state;
    }
}