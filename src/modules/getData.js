const getData = ( ) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
    
}

export default getData