const mysql = require('mysql2')


const  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'herman',
    database : 'datawrehouse_bunec'
});

connection.connect((err)=>{
    if (err) {
        console.log('connection error : ');
        return;
    }
    console.log("sucess connection");
});
connection.on('error' ,function (err){
    console.log("mysql error:" , err);
} )

module.exports = connection ;