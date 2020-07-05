import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('dados_pagamentos', table => {
        table.increments('id').primary();
        table.integer('id_forma')
            .notNullable()
            .references('id')
            .inTable('formas_pagamento');
        table.integer('n_campos').notNullable();
        table.string('campo_1').nullable();
        table.string('campo_2').nullable();
        table.string('campo_3').nullable();
        table.string('campo_4').nullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('dados_pagamentos');
}