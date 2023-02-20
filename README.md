# socialNetworkAPI

This is a backend application that utilizes mongoDB. MongoDb is a noSQL database that lets us use mongoose, similar to MySQL sequelize. Which allows us to create documents which we can then add, update, and delete data. In this project specifically it was, users, thoughts, reactions, and friends.

## Installation

* This application requires the use of [MongoDb](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/)
* Clone the repository in github.
* Run an npm i.
* Then run the server with either node or nodemon.

## Usage 

User can create, update, delete and view, users, thoughts, reactions, and friends. 


### All users
* /api/users - GET
![screenshot](./assets/getUsers.png)

### Single user
* /api/:userId - GET 
![screenshot](./assets/singleUser.png)

### Update user
* /api/:userId - PUT 
![screenshot](./assets/update.png)
![screenshot](./assets/updateUser.png)

### All thoughts
* /api/thoughts - GET
![screenshot](./assets/allThoughts.png)

### Single thought
* /api/thoughts/:thoughtId - GET
![screenshot](./assets/oneThought.png)

### Update thought
* /api/thought/:thoughtId - PUT 
![screenshot](./assets/beforeUpdate.png)
![screenshot](./assets/afterUpdate.png)

## Add reaction
* /api/thoughts/:thoughtId/reactions/ - POST
![screenshot](./assets/addReaction.png)

## Add friend
* /api/users/:userId/friends/:friendId - POST
![screenshot](./assets/addFriend.png)
![screenshot](./assets/addFriend2.png)

[Github](https://github.com/mintedd/socialNetworkAPI)

[Recording Part 1](https://drive.google.com/file/d/1P8DXoBVGDByLThF_IbCd-eWbxaH-pQHY/view)

[Recording Part 2](https://drive.google.com/file/d/1Cnp-fsirTBTmpkKAWgakTaTK_DNkrZdQ/view)