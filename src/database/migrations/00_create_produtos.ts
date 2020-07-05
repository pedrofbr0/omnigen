import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('custo').notNullable();
        table.string('valor').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('produtos');
}