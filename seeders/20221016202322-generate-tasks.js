'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('tasks', [
        {id: 1, description: 'lavar la losa', createdAt: new Date(), updatedAt: new Date()},
        {id: 2, description: 'comprar tacos', createdAt: new Date(), updatedAt: new Date()},
        {id: 3, description: 'vender cocaina', createdAt: new Date(), updatedAt: new Date()},
        {id: 4, description: 'salvar al mundo', createdAt: new Date(), updatedAt: new Date()},
        {id: 5, description: 'robar autos', createdAt: new Date(), updatedAt: new Date()}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('tasks', null, {});
     
  }
};
