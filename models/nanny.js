module.exports = function(sequelize, DataTypes) {
  var Nanny = sequelize.define("Nanny", {
    // This column store the information from the user input: Are you Nanny or Family.
    nanny: {
      //Nanny or Not
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
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
    skillsCerts: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    zipCode: {
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
    }
  });

  Nanny.associate = function(models) {
    // Associating Nanny with Posts
    // When an Nanny is deleted, also delete any associated Posts
    Nanny.belongsToMany(models.Days, { through: "DaysNannies" });
    // {onDelete: "cascade"}
  };

  return Nanny;
};
