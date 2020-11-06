const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('friends', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		friend1: {
			allowNull: false,
			type: DataTypes.INTEGER
		},
		friend2: {
			allowNull: false,
			type: DataTypes.INTEGER
		}
	});
};
