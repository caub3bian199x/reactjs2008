const initialState = {
    list:{
        users: [],
        loading: false,
    }
};

export default function userReducer(state = initialState, action = {}) {
    console.log("ACTION: ", action);
    switch (action.type) {
        
    }
    return state;
}
