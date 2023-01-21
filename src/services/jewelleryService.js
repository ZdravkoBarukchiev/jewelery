export const jewelleryService = () => {
    return fetch("http://localhost:3030/data/jewellery")
        .then((res) => res.json())
}