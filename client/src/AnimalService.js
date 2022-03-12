const baseURL = 'http://localhost:5000/api/animals';

export const postAnimal = (payload)=>{
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res =>res.json())
}