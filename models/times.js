module.exports = function(sequelize, DataTypes) {
  var Times = sequelize.define("Times", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    times: {
      type: DataTypes.STRING
    }
  });

  Times.associate = function(models) {
    Times.belongsToMany(models.DaysNannies, { through: "Times" });
  };
  return Times;
};
