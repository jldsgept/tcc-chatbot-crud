//Invocamos a la conexion de la DB
const pool = require('../database/db');

//GUARDAR un REGISTRO
exports.save_error = async (req, res)=>{
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`INSERT INTO errores (codigo, descripcion) VALUES ('${codigo}' , '${descripcion}')`)
        res.redirect('/errores');
    }catch(e){
        console.log(e)
    }
};

//ACTUALIZAR un REGISTRO
exports.update_error = async (req, res) => {
    const id = req.body.id;
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`UPDATE errores SET codigo = '${codigo}', descripcion = '${descripcion}' WHERE id = ${id}`)
        res.redirect('/errores');
    }catch(e){
        console.log(e)
    }
};

//GUARDAR un REGISTRO
exports.save_servicio = async (req, res)=>{
    const especificaciones = req.body.especificaciones;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`INSERT INTO servicios (descripcion, especificaciones) VALUES ('${descripcion}' , '${especificaciones}')`)
        res.redirect('/servicios');
    }catch(e){
        console.log(e)
    }
};

//ACTUALIZAR un REGISTRO
exports.update_servicio = async (req, res) => {
    const id = req.body.id;
    const especificaciones = req.body.especificaciones;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`UPDATE servicios SET descripcion = '${descripcion}', especificaciones = '${especificaciones}' WHERE id_servicios = ${id}`)
        res.redirect('/servicios');
    }catch(e){
        console.log(e)
    }
};


//GUARDAR un REGISTRO
exports.save_cliente = async (req, res)=>{
    const nombre = req.body.nombre;
    const cedula = req.body.cedula;
    const ruc = req.body.ruc;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    let rs
    try{
        rs = await pool.query(`INSERT INTO clientes (nombre, cedula, ruc, direccion, telefono) VALUES ('${nombre}', '${cedula}', '${ruc}', '${direccion}', '${telefono}')`)
        res.redirect('/clientes');
    }catch(e){
        console.log(e)
    }
};

//ACTUALIZAR un REGISTRO
exports.update_cliente = async (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const cedula = req.body.cedula;
    const ruc = req.body.ruc;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;
    let rs
    try{
        rs = await pool.query(`UPDATE clientes SET nombre = '${nombre}', cedula = '${cedula}', ruc = '${ruc}', direccion = '${direccion}', telefono = '${telefono}' WHERE id_clientes = ${id}`)
        res.redirect('/clientes');
    }catch(e){
        console.log(e)
    }
};

//GUARDAR un REGISTRO
exports.save_sugerencia = async (req, res)=>{
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`select p_inserta_sugerencia ('${codigo}', '${descripcion}')`)
        res.redirect('/sugerencias');
    }catch(e){
        console.log(e)
    }
};

//ACTUALIZAR un REGISTRO
exports.update_sugerencia = async (req, res) => {
    const id = req.body.id;
    const descripcion = req.body.descripcion;
    let rs
    try{
        rs = await pool.query(`UPDATE sugerencias_errores SET descripcion = '${descripcion}' WHERE id = ${id}`)
        res.redirect('/sugerencias');
    }catch(e){
        console.log(e)
    }
};