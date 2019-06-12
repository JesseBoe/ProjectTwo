module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    aditionalInfomation: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
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

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Nanny
    // A Post can't be created without an Nanny due to the foreign key constraint

    Post.belongsTo(models.Nanny, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
