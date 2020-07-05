import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('formas_pagamento').insert([
        { nome: 'Cielo', 
          taxa_inicial: '00.00', 
          taxa_fixa: '00.00', 
          taxa_inicial_per: '00.00', 
          taxa_deb: '0.02', 
          taxa_cred: '0.025', 
          taxa_cred_parc: '0.0325', 
          taxa_universal: '00.00',
          lucro_bruto_mes: ''
        },
        { nome: 'GetNet', 
          taxa_inicial: '00.00', 
          taxa_fixa: '00.40', 
          taxa_inicial_per: '00.00', 
          taxa_deb: '0.028', 
          taxa_cred: '0.028', 
          taxa_cred_parc: '0.03', 
          taxa_universal: '00.00',
          lucro_bruto_mes: ''
        },
        { nome: 'MagaLu', 
          taxa_inicial: '00.00', 
          taxa_fixa: '00.00', 
          taxa_inicial_per: '00.00', 
          taxa_deb: '0.00', 
          taxa_cred: '0.00', 
          taxa_cred_parc: '0.00', 
          taxa_universal: '00.20',
          lucro_bruto_mes: ''
        },
        { nome: 'MecadoLivre', 
          taxa_inicial: '00.00', 
          taxa_fixa: '05.00', 
          taxa_inicial_per: '00.00', 
          taxa_deb: '0.00', 
          taxa_cred: '0.00', 
          taxa_cred_parc: '0.00', 
          taxa_universal: '00.16',
          lucro_bruto_mes: ''
        },
    ])
}