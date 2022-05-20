const UserModel = require('../models/user');

// create new user
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, user)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: user.insertId})
        })
    }
}