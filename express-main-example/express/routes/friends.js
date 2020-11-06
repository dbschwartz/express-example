const { models } = require('../../sequelize');
const { Op } = require("sequelize");
const { getIdParam } = require('../helpers');
const users = require('./users');



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


module.exports = {
	getById

};
