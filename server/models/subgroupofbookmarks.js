'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubGroupOfBookmarks = sequelize.define('SubGroupOfBookmarks', {
    name: DataTypes.STRING,
    GroupOfBookmarksId: DataTypes.INTEGER
  }, {});
  SubGroupOfBookmarks.associate = function(models) {
    SubGroupOfBookmarks.belongsTo(models.GroupOfBookmarks, {
      foreignKey: 'GroupOfBookmarksId'
    });
    SubGroupOfBookmarks.hasMany(models.Bookmarks, {
      foreignKey: 'SubGroupOfBookmarksId'
    });
  };
  return SubGroupOfBookmarks;
};