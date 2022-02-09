//Invocamos a la conexion de la DB
const pool = require('../database/db');

//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    pool.query('INSERT INTO users SET ?',{user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');         
        }
    });
};

//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    pool.query('UPDATE users SET ? WHERE id = ?',[{user:user, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    });
};