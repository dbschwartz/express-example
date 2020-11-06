const sequelize = require('../sequelize');
//const { pickRandom, randomDate } = require('./helpers/random');

async function reset() {
	console.log('Will rewrite the SQLite example database, adding some dummy data.');

	await sequelize.sync({ force: true });

	await sequelize.models.user.bulkCreate([
		{
			id: 0,
		 	firstName: 'Eric',
		 	lastName: 'Yuan'
		 },
		 { 
			id: 1,
			firstName: 'Mark',
			lastName: 'Zuckerberg'
		},
		{
			id: 2,
			firstName: 'Jack',
			lastName: 'Dorsey'
		},
		{
			id: 3,
			firstName: 'Kevin',
			lastName: 'Systrom'
		},
		{
			id: 4,
			firstName: 'Tom',
			lastName: 'Anderson'
		}
	]);

	await sequelize.models.friends.bulkCreate([
		{ 
			friend1: 0,
			friend2: 2
		 },
		 { 
			friend1: 1,
			friend2: 4
		},
		{ 
			friend1: 1,
			friend2: 2
		}
	]);

	console.log('Done!');
}

reset();
