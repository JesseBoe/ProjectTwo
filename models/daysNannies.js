module.exports = function(sequelize, DataTypes) {
  var DaysNannies = sequelize.define("DaysNannies", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  });

  return DaysNannies;
};
