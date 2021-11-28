
// Inicia a função e trata os erros, caso existam.
try{
    async function Search(param,param2,param3){
        // Requisita o arquivo Index do database
        
        const database_conn = require('./index');
        let aux_var;
        let id = 'N/E';
        let name = 'Digite um nome válido';
        let phone = 'Digite um celular válido';

        // Aguarda a conexão com o banco de dados

        const conn = await database_conn['connection']();
        // Sinalizador para o parâmetro indefinido
        
        if(param === undefined){
            let result;
            
            return {
        
                result: "Resultado da sua pesquisa sem parâmetros: \nNome: " + "Nada para ser encontrado." + "\nCelular: " + "Nada para ser encontrado."+ "\n"
        
            }; // ATENÇÃO: Modificar, pois este item é apenas um teste! 
          
           // Caso o parâmetro seja diferente de indefinido, execute o SQL na constante
        } else if( param != undefined){  
            if(param2 == "AUTH_USER"){
                sql = `SELECT nome,SHA512 FROM usuario_acesso WHERE nome=?`;
                values = [param.nome]
                const result = await conn.query(sql,values).then((x)=>{return x[0]}, (x)=>{return 'Falhou:  ' + x});
                aux_var = result;             
                
                nome = aux_var[0].nome;
                PASS = aux_var[0].SHA512;
                
                if(nome === param.nome && param2 === "AUTH_USER"){                    
                    if(nome.includes(param.nome) === true){
                            name = nome;
                            pass_word = PASS
                            return {
                                nome: name,
                                SHA: pass_word,
                            }
                        } else{
                            return{
                                
                                nome: undefined,
                                senha: undefined
                            }
                        }               
                    }                 
                }    
            if(param2 == "CLIENTE"){
                sql = "SELECT * FROM contacts";                
                const result = await conn.query(sql).then((x)=>{return x[0]}, (x)=>{return 'Falhou:  ' + x});
                aux_var = result;
                for(var i = 0; i < aux_var.length; i++){    
                   
                    if(aux_var[i].nome == param.nome && param.nome !== '' && param2.includes("CLIENTE")){                    
                        
                        if(aux_var[i].nome.includes(param.nome) === true){
                            console.log(param.nome.includes(aux_var[i].nome));    
                            id = aux_var[i].id; // Pode ser um array!! 
                            name = aux_var[i].nome;
                            phone = aux_var[i].celular;
                       }               
                    }
                }
            }
                 // Confirma e seleciona o índice com o array correto 
                
      }
};

    module.exports = {
        search: Search
     };
 

}catch(e){
    return 'Erro Encontrado>>> //::\\' + e;
}