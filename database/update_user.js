
// Inicia a função e trata os erros, caso existam.
try{
    async function Update(param, id){
        // Requisita o arquivo Index do database
        const database_conn = require('./index');
       // const Search = require('./search_user');
        // Aguarda a conexão com o banco de dados
        const conn = await database_conn['connection']();
            // Constante SQL para evitar SQL injection 
           
        sql = "UPDATE contacts SET nome=?, celular=? WHERE id=?";
        
        
        values = [param.nome, param.celular, id];
        console.log(values)
        if(values[0] == undefined){
            values = [param.celular, id];
            sql = "UPDATE contacts SET celular=? WHERE id=?";    
            
            return await conn.query(sql, values);

        } else if(values[1] == undefined) {
            values = [param.nome, id];
            sql = "UPDATE contacts SET nome=? WHERE id=?";    
            return await conn.query(sql, values);
        }
            return await conn.query(sql, values)
        };

    module.exports = {
        update: Update
     };
 

}catch(e){
    return 'Erro Inesperado Encontrado>>> //::\\' + e;
}