'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', 
      [
        {
          name: 'Moto G Playson 4',
          description: 'Celular de 400 reais que faz tudo, menos tirar foto.',
          price: 399.99,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Samsung da Galáxia S-8',
          description: 'Celular de 1400 reais que faz tudo, menos ligar.',
          price: 1399.99,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mouse Ctrêis Tek',
          description: 'Mouse baratinho que clica duas vezes sem você pedir.',
          price: 4.69,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mouse Geimer Ge502',
          description: 'Mouse Geimer com luz colorida que é maior que sua mão clica sozinho pra você nao ter trabalho.',
          price: 249.99,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Teclado Geimer KulerMaster',
          description: 'Teclado Geimer KulerMaster com luz colorida, que não funciona as teclas: backspace, ponto, "h" e "w".',
          price: 189.99,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
