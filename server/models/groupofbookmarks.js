'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupOfBookmarks = sequelize.define('GroupOfBookmarks', {
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  GroupOfBookmarks.associate = function(models) {
    GroupOfBookmarks.belongsTo(models.User, {
      foreignKey: 'UserId'
    });
    GroupOfBookmarks.hasMany(models.SubGroupOfBookmarks, {
      foreignKey: 'GroupOfBookmarksId'
    });
  };
  return GroupOfBookmarks;
};