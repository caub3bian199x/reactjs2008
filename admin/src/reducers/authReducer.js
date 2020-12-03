const initialState = {
    isLoggedIn: false,
    token: "",
    message: "",
    loading: false,
};

export default function authReducer(state = initialState, action = {}) {
    console.log("ACTION: ", action);
    switch (action.type) {
        case "LOGGING":
            return {
                ...state,
                message: "",
                loading: true,
            };
        case "LOGGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                loading: false,
                username: action.payload.username,
                token: action.payload.token,
                message: "Logged in success",
            };
        case "LOGGIN_FAILED":
            return {
                ...state,
                isLoggedIn: false,
                loading: false,
                message: "Logged in failed",
            };
    }
    return state;
}
