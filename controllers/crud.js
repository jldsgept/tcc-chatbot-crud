//Invocamos a la conexion de la DB
const pool = require('../database/db');

//GUARDAR un REGISTRO
exports.save = async (req, res)=>{
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`INSERT INTO errores (codigo, descripcion) VALUES ('${codigo}' , '${descripcion}')`)
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
};

//ACTUALIZAR un REGISTRO
exports.update = async (req, res) => {
    const id = req.body.id;
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`UPDATE errores SET codigo = '${codigo}', descripcion = '${descripcion}' WHERE id = ${id}`)
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
};