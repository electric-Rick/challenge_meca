
// Inicia a função e trata os erros, caso existam.
try{
    async function Delete(param, id){
        // Requisita o arquivo Index do database
        const database_conn = require('./index');
       // const Search = require('./search_user');
        // Aguarda a conexão com o banco de dados
        const conn = await database_conn['connection']();
            // Constante SQL para evitar SQL injection 
           
        sql = "DELETE FROM contacts WHERE id=?";
        
        
        values = [id];
        console.log(values)
        if(values[0] == undefined){
            values = [id];
            sql = "DELETE  FROM contacts WHERE id=?";    
            
            return await conn.query(sql, values);

        } else if(values[1] == undefined) {
 
            sql = "DELETE FROM contacts WHERE id=?";    
            return await conn.query(sql, values);
        }
            return await conn.query(sql, values)
        };

    module.exports = {
        delete: Delete
     };
 

}catch(e){
    return 'Erro Inesperado Encontrado>>> //::\\' + e;
}