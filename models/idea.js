'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idea = sequelize.define('Idea', {
    subject: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Idea.associate = function(models) {
    Idea.hasMany(models.Content, {
      foreignKey: 'idea_id',
      as: 'contents'
    });
  };
  return Idea;
};
