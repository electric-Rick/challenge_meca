const { redirect } = require("express/lib/response");

// Inicia o servidor de maneira assíncrona
try{

    (async()=>{

const express = require("express");
global.app = express();
var engines = require("consolidate");
const bodyParser = require("body-parser");
//const router = require("./routers/router");
const middlewares_man = require("./middlewares/middleware_manager");


const Insert = require('./database/insert_user');
const Update = require('./database/update_user');
const Delete = require('./database/delete_user');
const finder = require('./database/auth_finder');
const path = require("path");




//Update.update({nome: "Michelangelo", celular: undefined }, 7);
//Delete.delete({nome: "Miss. Robertina", celular: "21487457177"}, 9)
//Insert.insert({nome: "Miss. Robertina", celular: "21487457177"});

// Analisa o Body!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas! 

app.get("/login",(req, res)=>{
   
    res.socket.destroy();
})


app.get("/", (req, res)=>{
    

    res.socket.destroy();
});




app.post("/login", (req, res)=>{
    var c = req.body.user_name;
    var f = req.body.pass_word;
    finder.finder(c, f)
    console.log(req.IncomingMessage);
    res.sendFile(path.join(__dirname, '/views', 'javabinary.png'));
   
});

})();

} catch(e) {
        return "Algo errado não está certo: Erro: " + e; 
} finally{
    // Porta do servidor e consequentemente onde o app estará ouvindo as requisições
    app.listen(8080, ()=>{console.log('Running: 8080')});

}