module.exports = function(sequelize, DataTypes) {
  var Days = sequelize.define("Days", {
    day: {
      type: DataTypes.ENUM,
      values: [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday ",
        "sunday"
      ]
    }
  });

  Days.associate = function(models) {
    Days.belongsToMany(models.Nanny, { through: "DaysNannies" });
  };

  return Days;
};
