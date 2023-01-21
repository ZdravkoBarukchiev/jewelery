export const jewelleryService = (section) => {
    const url="http://localhost:3030/data/"
    return fetch(url+section)
        .then((res) => res.json())
}