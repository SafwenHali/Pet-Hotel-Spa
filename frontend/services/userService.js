import axios from "axios";

export default axios.create({ baseURL: "http://localhost:7000/api/user"});

class userserv {
    affiche() { return axios.get(API_URL);  };

    getUserByid() {return axios.get(API_URL, {id});  };
}