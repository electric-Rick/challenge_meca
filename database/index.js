// Tratamento do banco de dados cliente Macapá
   
    // Trata o tipo de cliente se é cliente VAREJÃO ou MACAPÁ.
// Lembrete, modificar parâmetros no índice de banco de dados
var database = "";
function database_changer(param){
    i = 0
    database = "CLIENTES_VAREJAO"
       if(param == "login"){

        console.log(`Database foi modificado para login`)
        database="AUTH_USER";
    } else{        
        if(i == 'varejao'){
            console.log('Database foi modificado para USUÁRIOS')
            database = "CLIENTES_varejao".toUpperCase();
        } else if(i == 'macapa'){
            console.log('Database foi modificado para USUÁRIOS')
            database= "CLIENTES_macapa".toUpperCase();
        }
    }
}

async function connect(){
  
    database_changer("login")
  
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require('mysql2/promise');
    const connection  = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'passwordpassword',
        database: database,
    });
   
    global.connection = connection;
    
    

    return connection;
}

module.exports = {
  connection: connect
}