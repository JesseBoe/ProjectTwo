module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        aditional_infomation: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    return Post;
};
