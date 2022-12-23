export const increment = (byhowmuch) => {
    return (dispatch) =>{
        dispatch({
            type : "INCREMENT",
            payload : byhowmuch
        })
    }
}

export const decrement = (byhow) => {
    return (dispatch) => {
        dispatch({
            type : "DECREMENT",
            payload : byhow
        })
    }
}

export const login = () => {
    return(dispatch) => {
        dispatch({
            type : "LOGIN",
            payload : "CURRENT USER IS PRATIK TIWARI"
        })
    }
}

export const logout = () => {
    return(dispatch) => {
        dispatch({
            type : "LOGOUT",
            payload : "YOU ARE NOT LOGED-IN"
        })
    }
}