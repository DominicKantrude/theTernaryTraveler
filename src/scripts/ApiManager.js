const API = {
    GET: (dbArrayString) => {
        return fetch(`http://localhost:8088/${dbArrayString}`)
            .then(response => response.json())
    },
    POST: (dbArray, object) => {
        return fetch(`http://localhost:8088/${dbArray}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
        .then(response => response.json())
    },
    DELETE: (dbArray) => {
        return fetch(`http://127.0.0.1:8088/${dbArray}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}
export default API