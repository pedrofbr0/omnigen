import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('pagamentos', table => {
        table.increments('id').primary();
        table.string('id_produto')
            .notNullable()
            .references('id')
            .inTable('produtos');
        table.integer('id_forma')
            .notNullable()
            .references('id')
            .inTable('formas_pagamento');
        table.integer('qtde').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('dados_pagamentos');
}