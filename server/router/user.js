const express = require('express')
const multiparty = require('connect-multiparty');
const UserController = require('../controllers/user');
const md_auth = require('../middlewares/authenticated');

const md_upload = multiparty({uploadDir: './uploads/profile'});

const api = express.Router();

api.get("/user/me",[md_auth.asureAuth], UserController.getMe);
api.get("/users",[md_auth.asureAuth], UserController.getUsers);
api.post("/user",[md_auth.asureAuth, md_upload], UserController.createUser);

module.exports = api;