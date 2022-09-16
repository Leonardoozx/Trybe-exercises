const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // phoneNum: DataTypes.STRING
  }, { tableName: 'Users'});
  return User
};

module.exports = UserModel;
