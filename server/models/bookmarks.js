'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmarks = sequelize.define('Bookmarks', {
    title: DataTypes.STRING,
    searchWords: DataTypes.ARRAY(DataTypes.STRING),
    SubGroupOfBookmarksId: DataTypes.INTEGER
  }, {});
  Bookmarks.associate = function(models) {
    Bookmarks.belongsTo(models.SubGroupOfBookmarks, {
      foreignKey: 'SubGroupOfBookmarksId'
    });
  };
  return Bookmarks;
};