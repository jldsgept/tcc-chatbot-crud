//Invocamos a la conexion de la DB
const pool = require('../database/db');

//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    pool.query('INSERT INTO errores SET ?',{codigo:codigo, descripcion:descripcion}, (error, results)=>{
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
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    pool.query('UPDATE errores SET ? WHERE id = ?', [{ codigo: codigo, descripcion: descripcion }, id], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
};