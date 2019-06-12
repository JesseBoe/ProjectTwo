module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    googleID: DataTypes.STRING,
    googleName: DataTypes.STRING
  });
  return Example;
};
