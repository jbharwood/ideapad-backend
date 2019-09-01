'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    idea_id: DataTypes.INTEGER,
    post: DataTypes.STRING,
    audio: DataTypes.STRING,
    html: DataTypes.STRING
  }, {
      indexes:[
       {
         unique: true,
         fields:['idea_id']
       }
      ]
  });
  Content.associate = function(models) {
    Content.belongsTo(models.Idea, {
      as: 'idea',
      foreignKey: 'idea_id'
    });
  };
  return Content;
};
