var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '104.154.173.130',
  user     : 'root',
  password : 'Fw5hKZv56zSmbrjf',
  database : 'muhammadnaufal'
});

connection.connect((err) => {
    if (!err) {
        console.log("Koneksi db Ok");
    }else{
        console.log("Koneksi db error")
    }
});

module.exports = connection;