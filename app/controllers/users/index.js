const express = require('express');

const ModelUser = require('../../models/user');

const createError = require('http-errors')
const router = express.Router();

router.get('/', (req, res, next) => {
    ModelUser.list_user((errListUsr, resListUsr) => {
        if (errListUsr) {
            next(errListUsr)
        } else {
            return res.json({
                status: 200,
                data: resListUsr
            })
        }
    })
})

router.post('/add', (req, res, next) => {
    if (req.body.user_name &&
        req.body.hash_pw &&
        req.body.full_name &&
        req.body.role) {
        ModelUser.add_user({user_name:req.body.user_name,
                            hash_pw:req.body.hash_pw,
                            full_name:req.body.full_name,
                            role:req.body.role}, 
            (errAddUsr, resAddU) => {
            if (errAddUsr) {
                next(errAddUsr)
            } else {
                return res.json({
                    status: 200,
                    message: "OK"
                })
            }
        })
    }
    else {
        next(createError(400))
    }
})

module.exports = router;