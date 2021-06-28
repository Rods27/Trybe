const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Product, 
      {as: 'products', foreignKey: 'userId'}
    );
  }
  return Users;
}

module.exports = Users;