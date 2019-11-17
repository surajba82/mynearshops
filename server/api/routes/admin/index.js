const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../../models/admin/adminSchema');
const router = express.Router();

router.post('/signup', (req, res, next) => {

    const { fullName, email, password } = req.body;

    if(fullName.trim() === ""){
        return res.status(404).json({
            message: 'Empty Full Name'
        });
    }

    

    Admin.findOne({email: email})
    .exec()
    .then(admin => {
        if(admin){
            return res.status(401).json({
                message: 'Email Already Exists'
            })
        }

        bcrypt.hash(password, 10, (err, hash) => {
            if(err){
                return res.status(500).json({
                    message: err
                });
            }else{
                const admin = new Admin({
                    _id: new mongoose.Types.ObjectId(),
                    fullName: fullName,
                    email: email,
                    password: hash
                });

                admin.save()
                .then(admin => {
                    res.status.json({
                        message: 'Admin Created'
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: error
                    })
                });

            }


        })
        .catch(error => {
            res.status(500).json({
                message: error
            });
        });

        

    })

});

module.exports = router;