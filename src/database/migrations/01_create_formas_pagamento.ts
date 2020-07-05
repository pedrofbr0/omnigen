import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('formas_pagamento', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('taxa_inicial').notNullable();
        table.string('taxa_fixa').notNullable();
        table.string('taxa_inicial_per').notNullable();
        table.string('taxa_deb').notNullable();
        table.string('taxa_cred').notNullable();
        table.string('taxa_cred_parc').notNullable();
        table.string('taxa_universal').notNullable();
        table.string('lucro_bruto_mes').nullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('formas_pagamento');
}