var dbConn  = require('../Database');

var User = function(user){
    this.first_name     =   user.first_name;
    this.last_name      =   user.last_name;
    this.email          =   user.email;
    this.phone          =   user.phone;
    this.cin            =   user.cin;
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

module.exports = User;