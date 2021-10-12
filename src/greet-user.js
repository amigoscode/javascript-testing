const greetUser = (username, callback) => {
    if (callback) {
        callback(username);
    } else {
        console.log(username)
    }
}

const greetUser2 = (username, callback) => {
    if (callback) {
        return callback(username)
    } else {
        return `Hello ${username}` 
    }
}

export {
     greetUser,
     greetUser2
}