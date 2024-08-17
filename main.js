let players = {};

addEventHandler("OnPlayerJoined", (event, client) => {
    players[client.id] = { loggedIn: false };
});

addCommandHandler("register", function(command, text, client) {
    let args = text.split(" ");
    if(players[client.id].loggedIn == true) {    messageClient('Вы уже зарегистрировались!' ,client,MessageColour);  }
    if (args.length < 2) {
        messageClient('Используйте: /register [username] [password]' ,client,MessageColour);
        return;
    }
    
    let username = args[0];
    let password = args[1];
    
    if (username && password) { registerUser(username, password, client); }
});

addCommandHandler("login", function(command, text, client) {
    let args = text.split(" ");
    if(players[client.id].loggedIn == true) {   messageClient('Вы уже авторизовались!' ,client,MessageColour);  }
    if (args.length < 2) {
        messageClient('Используйте: /login [username] [password]' ,client,MessageColour);
        return;
    }
    
    let username = args[0];
    let password = args[1];
    if (username && password) { loginUser(username, password, client); }
});