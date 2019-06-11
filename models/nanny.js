module.exports = function(sequelize, DataTypes) {
  var Nanny = sequelize.define("Nanny", {
    authenticationId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.STRING,
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
    Nanny.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Nanny;
};
