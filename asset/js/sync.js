// Sync
let login = function(username, password) {
    setTimeout(() => {

        console.log("Data has Arrived !!!");

        return {
            username,
            password
        }

    }, 2000)
}

console.log("Start of Program !!!");

let user = login("user 1", "password");

console.log(user); //what will be the result 

console.log("End of Program !!!");