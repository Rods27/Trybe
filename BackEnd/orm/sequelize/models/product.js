const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });
  Product.associate = (models) => {
    Product.belongsTo(models.Users, 
      {as: 'user', foreignKey: 'userId'}
    );
  }
  return Product;
}

module.exports = Product;