let user1 = {
    username: "davit2002",
    password: "125"
};
let user2 = {
    username: "nino21",
    password: "1225"
};
let user3 = {
    username: "giga212",
    password: "425"
};
let user4 = {
    username: "saba22",
    password: "635"
};

let users = [];
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

let minPassword = 8;

function getFoundUser (users, possibleUsername) {
    for (let i = 0; i < users.length; i ++){
        if (users[i].username === possibleUsername) {
            return users[i];
        }
    }
}

function checkPassword (user, possiblePassword) {
    let isSame = user.password === possiblePassword;
    return isSame;
}

function login(username, password) {
    let possibleUser = getFoundUser(users, username);
    if (!possibleUser) {
        console.log("მომხმარებელი ვერ მოიძებნა")
    } else {
        let isPasswordVaild = checkPassword(possibleUser, password);
        if (isPasswordVaild) {
            console.log("წარმატებით შეხვედით სისტემაში");
        } 
        else {
            console.log("პაროლი არასწორია");
        } 
    
    }
}


login("davit2002", "125");
