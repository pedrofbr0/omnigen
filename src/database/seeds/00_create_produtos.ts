import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('produtos').insert([
        { nome: 'Sapatenis hughes - preto 4', custo: '24', valor: '30' },
        { nome: 'Tenis corrida hyndel - feminino', custo: '190', valor: '400' },
        { nome: 'Bota couro legitimo - cinza', custo: '200', valor: '500' },
        { nome: 'Sandalia francesa - beje', custo: '100', valor: '130' },
    ])
}