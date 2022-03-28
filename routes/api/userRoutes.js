const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserById,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

router.route('/')
    .post(createUser)
    .get(getAllUsers)
    .post(createUser);

router.route('/:Id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

 router.route('/:userId/friends/:friendId')   
    .post(addFriend)
    .delete(removeFriend)

    module.exports = router;