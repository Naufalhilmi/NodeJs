const express = require('express')
const router = express.Router()

router.post('/car/insertCar', (req,res) => {
    let values = [];
    let query = "INSERT INTO car (id, name, model, color, height, lenght, width, engine, power, fuel, misc) VALUES ?"
    const element = req.body;
    let data = [element.id, element.name, element.model, element.color, element.height, element.lenght, element.width, element.engine, element.power, element.fuel, element.misc];
    values.push(data);

    conDB.query(query, [values], (err,result,fields)=>{
        console.log('isi : ', req.body);
        if (err) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + '-' + time;

            let response = {
                timestamp : dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
        } else {
        let response = {
                status : true,
                data : "Berhasil disimpan"
            }
        res.send(response)
        }   
    })  
    
})

router.post('/car/insertMultiCar', (req,res) => {
    let values = [];
    let query = "INSERT INTO car (id, name, model, color, height, lenght, width, engine, power, fuel, misc) VALUES ?"

    for (let index = 0; index < req.body.length; index++) {
        const element = req.body[index];
         let data = [element.id, element.name, element.model, element.color, element.height, element.lenght, element.width, element.engine, element.power, element.fuel, element.misc];
         values.push(data); 
    }

    conDB.query(query, [values], (err,result,fields)=>{
        console.log('isi : ', req.body);
        if (err) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + '-' + time;

            let response = {
                timestamp : dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
        } else {
        let response = {
                status : true,
                data : "Berhasil disimpan"
            }
        res.send(response)
        }   
    })  
    
})

router.get('/car/getAllCar', (req, res) =>{
    conDB.query("SELECT * FROM car", (err, result, fields) => {
        if(err){
            var  today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;

            let response = {
                timeStamp: dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
        }else{
            let response = {
                status: true,
                data: result
            }
            res.send(response)
        }
    })
    
})

router.get('/car/getCarById', (req, res) => {
    conDB.query("SELECT * FROM car WHERE id = " + req.query.id,  (err, result, fields) =>{
        console.log('id ; ', req.query.id);
        if (err) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + '-' + time;

            let response = {
                timestamp : dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
            
        } else {
        let response = {
            status : true,
                data : result
            }
        res.send(response)
}
            
        
    })
})

router.get('/car/getCarByName', (req, res) => {
    console.log('name ; ', req.query.name);
    conDB.query("SELECT * FROM car WHERE name = '" + req.query.name + "'",  (err, result, fields) =>{
        if (err) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + '-' + time;

            let response = {
                timestamp : dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
            
        } else {
        let response = {
            status : true,
                data : result
            }
        res.send(response)
}
            
        
    })
})

router.put('/car/updateCar', (req,res) => {
    let id = req.body.id
    let name = req.body.name
    let model = req.body.model
    let color = req.body.color
    let height = req.body.height
    let lenght = req.body.lenght
    let width = req.body.width
    let engine = req.body.engine
    let power = req.body.power
    let fuel = req.body.fuel
    let misc = req.body.misc
    conDB.query("UPDATE car SET name = '"+ name +"', model = '"+ model +"', color = '"+ color +"', height = '"+ height +"', lenght = '"+ lenght +"', width = '"+ width +"', engine = '"+ engine +"', power = '"+ power +"', fuel = '"+ fuel +"', misc = '"+ misc +"' WHERE id = '"+ id +"'", (err,result,fields)=>{
        console.log('isi : ', req.body);
        if (err) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + '-' + time;

            let response = {
                timestamp : dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
        } else {
        let response = {
                status : true,
                data : "Berhasil disimpan"
            }
        res.send(response)
        }   
    })  
    
})

router.delete('/car/deleteCarById', (req, res) => {
    conDB.query("DELETE FROM car WHERE id = " + req.query.id, function (err, result, fields){
        console.log('id ; ', req.query.id);
        if (err) {
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + '-' + time;

            let response = {
                timestamp : dateTime,
                status: false,
                message: err.sqlMessage
            }
            res.send(response)
            
        } else {
        let result = "Data Berhasil Terhapus"
        let response = {
            status : true,
                data : result
            }
        res.send(response)
}
            
        
    })
})













module.exports = router;