module.exports = function(sequelize, DataTypes) {
  var Nanny = sequelize.define("Nanny", {
    // This column store the information from the user input: Are you Nanny or Family.
    nanny: {
      //Nanny or Not
      type: DataTypes.BOOLEAN,
      defaultValue: null
    },
    googleId: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    googleId: {
      type: DataTypes.STRING
    },
    // The BLOB datatype allows you to insert data both as strings and as buffers.
    profilePicture: {
      type: DataTypes.BLOB
    },
    skillsCerts: {
      type: DataTypes.TEXT,
      len: [1]
    },
    zipCode: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.TEXT,
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
    },
    monday: {
      type: DataTypes.STRING
    },
    tuesday: {
      type: DataTypes.STRING
    },
    wednesday: {
      type: DataTypes.STRING
    },
    thursday: {
      type: DataTypes.STRING
    },
    friday: {
      type: DataTypes.STRING
    },
    saturday: {
      type: DataTypes.STRING
    },
    sunday: {
      type: DataTypes.STRING
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
