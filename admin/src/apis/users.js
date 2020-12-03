import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchUsers: (data) => axios.post("http://localhost:8080/api/users"),
};
