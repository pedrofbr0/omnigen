import {Request, Response} from 'express'
import knex from '../database/connection'

class FormasPagController{
    async index (request: Request, response: Response) {
        const itens = await knex('formas_pagamento').select('*');
    
        const pagamentos = await knex('pagamentos').select('*');

        const serializedItens = itens.map(item => {

            var redimento = 0;
            var receita = 0;

            pagamentos.map(pagamento => {
                if(pagamento.id_forma == item.id){
                    receita = receita + 0;
                }
            })

            return {
                id: item.id,
                nome: item.nome,
                rendimento: '',
                porcentagem: '',
            }
        })



        const joins = await knex('pagamentos')
            .join('formas_pagamento', 'formas_pagamento.id', '=', 'pagamentos.id_forma')
            .join('produtos','produtos.id','=','pagamentos.id_produto')
            .select('*');

        const dados = pagamentos.map(pagamento => {
            
        })
    
        return response.json(serializedItens);
    }
}
export default FormasPagController;