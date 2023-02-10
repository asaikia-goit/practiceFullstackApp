import Users from '../models/User.js';
import asyncHandler from '../middleware/async.js';
import { v4 as uuid } from 'uuid';


/*
 * @desc     get users from Db
 * @route    GET /api/v1/users/
 * @access   Public
 */

const getUsers = asyncHandler(async (req, res, next) => {

    const allUsers = await Users.find({});

    return next(res.status(200).json({ success: true, data: allUsers }));
})

/*
 * @desc     Create user in Db
 * @route    GET /api/v1/users/
 * @access   Public
 */

const createUser = asyncHandler(async (req, res, next) => {
    // Validate Body is not empty
    if (!req.body.email || !req.body.password) {
        return next(
            res.status(400).send({
                message: 'Content can not be empty!',
            })
        );
    }

    const userId = req.body.userId || uuid();
    const user = await Users.create({
        userId: userId,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    });

    if (!user || user.length == 0) {
        console.log(`User Not Found with id ${res}`);
        return res.status(500).json({
            success: false,
            error: `"Some error occurred while creating the User.`,
        });
    }

    res.status(201).json({ success: true, data: user });
});

export {
    createUser,
    getUsers,
};
