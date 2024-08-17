let db = module.mysql.connect("127.0.0.1", "root", "", "gtaconnected", 3306);

function registerUser(username, password, client) {
    let checkUser = db.query(`SELECT id FROM accounts WHERE username = '${db.escapeString(username)}'`);
    if (checkUser.numRows > 0) {
        messageClient('Пользователь с таким именем уже существует.' ,client,MessageColour);
        checkUser.free();
        return false;
    }
    checkUser.free();
    let result = db.query(`INSERT INTO accounts (username, password) VALUES ('${db.escapeString(username)}', '${db.escapeString(password)}')`);
    if(result && result.affectedRows > 0)
    {
        result.free(); 
        messageClient('Регистрация прошла успешно.' ,client,MessageColour);
    }
    if(result) result.free();
}
function loginUser(username, password, client) {
    let result = db.query(`SELECT id, password FROM accounts WHERE username = '${db.escapeString(username)}'`);
    if(result != null)
    { 
        if (result.numRows === 0) {
            messageClient('Пользователь не найден.' ,client,MessageColour);
            result.free();
            return false;
        }
            
        let row = result.fetchRow();
        let storedHashedPassword = row[1];
        result.free();
            
        if (storedHashedPassword === password) {
            messageClient('Авторизация успешна.' ,client,MessageColour);
            players[client.id].loggedIn = true;
            return true;
        } else {
            messageClient('Неверный пароль.' ,client,MessageColour);
            return false;
        }
    }
}