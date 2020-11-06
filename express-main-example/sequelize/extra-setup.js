function applyExtraSetup(sequelize) {
	const { user, friends } = sequelize.models;
	user.belongsTo(friends, { as:'friend1', foreignKey: 'friend_1'});
	user.belongsTo(friends, { as:'friend2', foreignKey: 'friend_2'});

}

module.exports = { applyExtraSetup };  
