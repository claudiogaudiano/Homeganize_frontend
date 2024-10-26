import React from "react";
import { link } from "react-router-dom";
import { addUser } from "./api";

export function SignUp() {
    const [user, setUser] = React.useState({
        username: '',
        password: ''
    })

    function handleChange(e){
        setUser({...user, [e.target.id]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault();
        let res = await addUser(user);
        console.log(res);
    }

/* export async function createUser(user) {
    return (
        await axios.post('http://localhost:3000/signup', user)
    )
} */

return (
    <div>
        <h2>Registrati</h2>
        <form action='post' onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
            />

            <label for="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
            />

            <button type="submit" /*onClick={handleClick}*/>Submit</button>
        </form>
    </div>
)
}