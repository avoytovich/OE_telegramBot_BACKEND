'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isActivated: DataTypes.BOOLEAN,
    },
    {
      classMethods: {
        associate(models) {
          // User.hasMany(models.Follower, {
          //   foreignKey: 'UserId',
          // });
        },
      },
    }
  );
  return User;
};
