const { models } = require('../../sequelize');
const { Op } = require("sequelize");
const { getIdParam } = require('../helpers');
const users = require('./users');

async function getAll(req, res) {
	const users = await models.user.findAll({
		attributes: ['id', 'firstName', 'lastName']
	}
	);
	res.status(200).json(users);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const friends1 = await models.friends.findAll({
		attributes: ['friend2'],
		where: {
			friend1: {
			  [Op.eq]: id
			}
		}
	});

	const friends1Ids = friends1.map(obj => obj.get('friend2'));

	
	
const friends2 = await models.friends.findAll({
	attributes: ['friend1'],
    where: {
        friend2: {
          [Op.eq]: id
        }
    }
})

const friends2Ids = friends2.map(obj => obj.get('friend1'));

const friendsIds = friends1Ids.concat(friends2Ids)

	if (friendsIds.length) {
	const friends = await models.user.findAll({
			attributes: ['id', 'firstName', 'lastName'],
			where: {
				id: friendsIds
			}

		}
		);
		res.status(200).json(friends);
	} else {
		res.status(404).send('No friends for user found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else {
		await models.user.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.user.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.user.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};
