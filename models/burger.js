module.exports = function(sequlize, DataTypes) {
    const Burger = sequlize.define("Burger", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
};