import axios from "axios";

export async function addUser(user) {
    return await axios.post('http://localhost:3000/signup', user)
}