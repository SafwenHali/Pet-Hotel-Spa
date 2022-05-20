var dbConn  = require('../config');

var User = function(user){
    this.first_name     =   user.first_name;
    this.last_name      =   user.last_name;
    this.email          =   user.email;
    this.phone          =   user.phone;
    this.password       =   user.password;
    this.cin            =   user.cin;
    this.adresse        =   user.adresse;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// create new user
User.createUser = (userReqData, result) =>{
    dbConn.query('INSERT INTO user SET ? ', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data'+err);
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM user', (err, res)=>{
        if(err){
            console.log('Error while getting users', err);
            result(null,err);
        }else{
            console.log('Get all users successfully');
            result(null,res);
        }
    })
}

// get user by ID from DB
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM user WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while getting user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get user by Email
User.getUserByUserEmail = (email, result) =>{
    dbConn.query('SELECT * FROM user WHERE email=?', email, (err, res)=>{
        if(err){
            console.log('Error while getting user by email', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// update User
User.updateUser = (id, userReqData, result)=>{
    dbConn.query("UPDATE user SET first_name=?,last_name=?,email=?,phone=?,cin=?,adresse=? WHERE id = ?", 
            [userReqData.first_name,userReqData.last_name,userReqData.email,userReqData.phone,userReqData.cin,userReqData.adresse, id], (err, res)=>{
        if(err){
            console.log('Error while updating the user');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// delete user
User.deleteUser = (id, result)=>{
    dbConn.query('DELETE FROM user WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            console.log('User Deleted');
             result(null, res);
        }
    });
}


module.exports = User;