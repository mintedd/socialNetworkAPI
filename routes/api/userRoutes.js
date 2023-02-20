const router = require('express').Router();

//deconstruct the methods from the controllers and require it here
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/UserController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/thoughts')
    .post()

// api/users/:userId/friends
// router
//     .route('/:userId/friends')
//     .post(addFriend)

// api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;