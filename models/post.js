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
    schedule: {
      type: DataTypes.STRING,
      defaultValue: "All Hours"
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
