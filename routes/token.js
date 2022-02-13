const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { verifyToken } = require('./middlewares');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const id = 'skr';
        const nick = 'skr';
        const token = jwt.sign(
            {
                id,
                nick,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1m',
                issuer: '토큰 발급자',
            }
        );
    } catch (error) {}
});
