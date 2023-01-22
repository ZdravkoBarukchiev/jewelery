export const loginService = (section,email,password) => {
    const url="http://localhost:3030/users/"
    return fetch(url+section, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => res.json())
}