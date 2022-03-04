const express = require('express');
const router = express.Router();

const crud = require('./controllers/crud');
const pool = require('./database/db');

//raiz de la app
router.get('/', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM servicios ORDER BY descripcion')
        res.render('index_servicios', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
});

router.get('/servicios', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM servicios ORDER BY descripcion')
        res.render('index_servicios', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
});

router.get('/clientes', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM clientes ORDER BY nombre')
        res.render('index_clientes', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
});

router.get('/errores', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM errores ORDER BY 1')
        res.render('index', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
});

router.get('/sugerencias', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT se.id, e.codigo, se.descripcion FROM sugerencias_errores se inner join errores e on (e.id = se.id_errores) order by e.codigo')
        res.render('index_sugerencias', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
});

router.get('/tickets', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('select * from v_tickets')
        res.render('index_tickets', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
});


router.get('/servicios/create', (req,res)=>{
    res.render('create_servicios');
});
router.get('/clientes/create', (req,res)=>{
    res.render('create_clientes');
});
router.get('/errores/create', (req,res)=>{
    res.render('create');
});
router.get('/sugerencias/create', (req,res)=>{
    res.render('create_sugerencias');
});
router.get('/tickets/create', (req,res)=>{
    res.render('create_tickets');
});



router.get('/servicios/edit/:id', async (req,res)=>{    
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`SELECT * FROM servicios WHERE id_servicios = ${id}`)
        res.render('edit_servicios', {servicio: rs.rows[0]});
    }catch(e){
        console.log(e)
    }
});
router.get('/clientes/edit/:id', async (req,res)=>{    
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`SELECT * FROM clientes WHERE id_clientes = ${id}`)
        res.render('edit_clientes', {cliente: rs.rows[0]});
    }catch(e){
        console.log(e)
    }
});
router.get('/errores/edit/:id', async (req,res)=>{    
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`SELECT * FROM errores WHERE id = ${id}`)
        res.render('edit', {registro_error: rs.rows[0]});
    }catch(e){
        console.log(e)
    }
});
router.get('/sugerencias/edit/:id', async (req,res)=>{    
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`SELECT * FROM sugerencias_errores WHERE id = ${id}`)
        res.render('edit_sugerencias', {sugerencia: rs.rows[0]});
    }catch(e){
        console.log(e)
    }
});
router.get('/tickets/edit/:id', async (req,res)=>{    
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`SELECT * FROM tickets WHERE id = ${id}`)
        res.render('edit_tickets', {tk: rs.rows[0]});
    }catch(e){
        console.log(e)
    }
});


router.get('/servicios/delete/:id', async (req, res) => {
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`DELETE FROM servicios WHERE id_servicios = ${id}`)
        res.redirect('/servicios');
    }catch(e){
        console.log(e)
    }
});
router.get('/clientes/delete/:id', async (req, res) => {
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`DELETE FROM clientes WHERE id_clientes = ${id}`)
        res.redirect('/clientes');
    }catch(e){
        console.log(e)
    }
});
router.get('/errores/delete/:id', async (req, res) => {
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`DELETE FROM errores WHERE id = ${id}`)
        res.redirect('/errores');
    }catch(e){
        console.log(e)
    }
});
router.get('/sugerencias/delete/:id', async (req, res) => {
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`DELETE FROM sugerencias_errores WHERE id = ${id}`)
        res.redirect('/sugerencias');
    }catch(e){
        console.log(e)
    }
});
router.get('/tickets/delete/:id', async (req, res) => {
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`DELETE FROM tickets WHERE id = ${id}`)
        res.redirect('/tickets');
    }catch(e){
        console.log(e)
    }
});


router.post('/servicios/save', crud.save_servicio);
router.post('/servicios/update', crud.update_servicio);
router.post('/clientes/save', crud.save_cliente);
router.post('/clientes/update', crud.update_cliente);
router.post('/errores/save', crud.save_error);
router.post('/errores/update', crud.update_error);
router.post('/sugerencias/save', crud.save_sugerencia);
router.post('/sugerencias/update', crud.update_sugerencia);
router.post('/tickets/save', crud.save_ticket);
router.post('/tickets/update', crud.update_ticket);

module.exports = router;