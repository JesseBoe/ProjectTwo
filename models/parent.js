module.exports = function(sequelize, DataTypes) {
  var Parent = sequelize.define("Parent", {
    parent: {
      //FAMILY
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // The BLOB datatype allows you to insert data both as strings and as buffers.
    profilePicture: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    basePay: {
      type: DataTypes.DECIMAL
    },
    hasFinishedSingUp: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  });
  return Parent;
};
