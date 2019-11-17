const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const Admin = require('../../models/admin/adminSchema');
const router = express.Router();
const jwt = require('jsonwebtoken');

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
                    res.status(201).json({
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

router.post('/login', (req, res, next) => {
   Admin.findOne({ email: req.body.email })
   .exec()
   .then(admin => {
       if(!admin){
          return res.status(401).json({
              message: 'Admin doesn\'t exists'
          });
       }

       bcrypt.compare(req.body.password, admin.password, (err, result) => {
           if(err){
               return res.status(500).json({
                   message: 'Login Failed'
               })
           }else{
               if(result){
                   //create token
                   const payload = {
                       userId: admin._id,
                       iat:  Math.floor(Date.now() / 1000) - 30,
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                   }
                   jwt.sign(payload, 'mylocalstore', (err, token) => {
                    if(err){
                        return res.status(500).json({
                            error: err
                        });
                    }else{
                        res.status(200).json({
                            message: 'Login Successfully',
                            data: {
                                token: token,
                                userId: admin._id,
                                email: admin.email
                            }
                        });
                    }
                   });
               }else{
                   res.status(401).json({
                       message: 'Wrong Password'
                   })
               }
           }
       })


   })
});

module.exports = router;