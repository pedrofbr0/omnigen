import {Request, Response} from 'express'
import knex from '../database/connection'

class FormasPagController{
    async index (request: Request, response: Response) {
        const itens = await knex('formas_pagamento').select('*');
    
        const serializedItens = itens.map(item => {
            return {
                id: item.id,
                nome: item.nome,
            }
        })

        const pagamentos = await knex('pagamentos').select('*');

        const formas_pagamento = await knex('formas_pagamento').select('*');

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