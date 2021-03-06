const UserModel = require('../models/user');

//const { hashSync, genSaltSync } = require("bcrypt");

//const { sign } = require("jsonwebtoken");

// create new user
exports.createNewUser = (req, res) =>{
    const body = req.body;
    //crypt password
    //const salt = genSaltSync(10);
   // body.password = hashSync(body.password, salt);

    const userReqData = new UserModel(body);
    console.log('userReqData', userReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        });
    }
    
}

// get all users list
exports.getUsersList = (req, res)=> {
    //console.log('here all users list');
    UserModel.getAllUsers((err, users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}

// get User by ID
exports.getUserByID = (req, res)=>{
    //console.log('get user by id');
    UserModel.getUserByID(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}

// update user
exports.updateUser = (req, res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({message: 'User updated Successfully'})
        })
    }
}

// delete user
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, user)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!'});
    })
}

// get User by email
exports.getUserByEmail = (req, res)=>{
    UserModel.getUserByUserEmail(req.params.email, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single user data',user);
        res.send(user);
    })
}

exports.login = (req, res) => {
    UserModel.getUserByUserEmail(req.params.email, (err, user)=>{
        if(err)
        res.send(err);
        if(req.params.password===user.password){
            res.send(user);
        }
        else{
            res.json({ message: '3asba'});
        }
    })
  }