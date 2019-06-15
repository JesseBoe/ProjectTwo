module.exports = function(sequelize, DataTypes) {
  var Nanny = sequelize.define("Nanny", {
    // This column store the information from the user input: Are you Nanny or Family.
    WhoAreYou: {
      //Nanny or Family
      type: DataTypes.STRING,
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
    location: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.STRING,
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
    Nanny.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Nanny;
};