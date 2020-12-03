import { users } from "../apis";

export const fetchUsers = (data) => (dispatch) => {
    alert("ALERT")
    dispatch({ type: "FETCH_USERS" });

//copy cua auth

    users.fetchUsers(data)
        .then((resp) => {
            console.log("resp: ", resp);
            dispatch({
                type: "FETCH_USERS_SUCCESS",
                // payload: { token: resp.data.token },
            });
            // saveToken(resp.data.token);
            window.location = "/";
        })
        .catch((err) => {
            // console.log("err: ", err);
            dispatch({ type: "FETCH_USERS_FAILED" });
        });

};
