const connect = require('../../config/connect');

const list_user = (callback) =>
 {
     return connect.query(
         
     " SELECT "+ 
     "      user_name, full_name, role, is_active FROM users",
     [],
     callback
     )
 }

 const add_user = (user_name,hash_pw,full_name,role,callback) =>{
     return connect.query(
        " INSERT INTO " +
		"        users( user_name, hash_pw, full_name, role, is_active)" +
        " VALUES "+
		"        (?,?,?,?,1)",
        [
            user_name,
            hash_pw,
            full_name,
            role
        ],
        callback
     )
 }


 module.exports = {
     list_user,
     add_user
 }