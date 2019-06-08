module.exports = function (sequelize, DataTypes) {
    var Nanny = sequelize.define("Nanny", {
        authentication_id: {
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
        Profile_picture: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        Skills_Certs: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        Location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Bio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
            base_pay: {
            type: DataTypes.DECIMAL,
        }
    });
    return Nanny;
};
