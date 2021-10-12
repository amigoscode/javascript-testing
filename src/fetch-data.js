const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        return Promise.resolve().then(() => {
            setTimeout(() => {
                resolve("data back from the server")
            }, 100)
            setTimeout(() => {
                reject("oops error")
            }, 50)
        })
    });
    return promise;
}

export default fetchData;