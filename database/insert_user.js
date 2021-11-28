
// Inicia a função e trata os erros, caso existam.
try{
    async function Insert(param){
        // Requisita o arquivo Index do database
        const database_conn = require('./index');
       // const Search = require('./search_user');
        // Aguarda a conexão com o banco de dados
        const conn = await database_conn['connection']();
            // Constante SQL para evitar SQL injection 
            sql = "INSERT INTO contacts(nome, celular) VALUES(?,?)";
            if(param.nome == undefined || param.celular == undefined || param.celular.length < 8 || param.nome.length < 2){
                console.log(param.nome == undefined || param.nome.length < 3?"Nome inválido":param.celular==undefined || param.celular.length < 8?"Celular inválido":"Nome e celular são inválidos");
                return param.nome == undefined || param.nome.length < 8?"Nome inválido":param.celular==undefined || param.celular.length < 2?"Celular inválido":"Nome e celular são inválidos";
                
            } else{
                values = [param.nome, param.celular];            
            // Resultado da query é associado à varíavel. 
            return await conn.query(sql, values);
            }
            
        };

    module.exports = {
        insert: Insert
     };
 

}catch(e){
    return 'Erro Encontrado>>> //::\\' + e;
}