'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define(
    'Follower',
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      level: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  );
  Follower.associate = function (models) {
    // Follower.belongsTo(models.User, {
    //   foreignKey: 'UserId',
    // });
  };
  return Follower;
};
