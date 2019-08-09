'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contents', [{
      idea_id : 1,
      post : 'Great lyrics',
      audio : 'sounds',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Contents', [{
      post :'Great lyrics'
    }])
  }
};
