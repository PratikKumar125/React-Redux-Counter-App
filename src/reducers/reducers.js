export const counting = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state += action.payload;
        case "DECREMENT":
            if (state <= 0){
                return state = 0;
            }
            else{
                return state -= action.payload;
            }
        default:
            return state;
    }
}
export const authmanage  = (state = "YOU ARE NOT LOGED-IN", action) => {
    switch (action.type){
        case "LOGIN":
            return state = action.payload;
            break;
        case "LOGOUT":
            return state = action.payload;
            break;
        default:
            return state;
    }
}
