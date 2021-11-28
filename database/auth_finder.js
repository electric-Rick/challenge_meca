const Search = require('./search_user');

const finder = async (o, f) =>{
    find = await Search.search({nome: o, senha: f}, 'AUTH_USER').then((e)=>{
        console.log(e)
    }).catch(()=>{
        return{
            nome: undefined,
            senha: undefined
        }
    });
    return find;

}


module.exports = {
    finder: finder
}