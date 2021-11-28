function declare_type(){
    // adicionar condição lógica para entrada do tipo de cliente
    return {
        tipo_1: 'varejao',
        tipo_2: 'macapa'
    }
}


module.exports = {
    tipo_1: declare_type().tipo_1,
    tipo_2: declare_type().tipo_2
};