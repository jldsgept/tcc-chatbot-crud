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
})

router.get('/servicios', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM servicios ORDER BY descripcion')
        res.render('index_servicios', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
})

router.get('/errores', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM errores ORDER BY 1')
        res.render('index', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
})



router.get('/errores/create', (req,res)=>{
    res.render('create');
})

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





router.get('/servicios/create', (req,res)=>{
    res.render('create_servicios');
})

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



router.post('/errores/save', crud.save_error);
router.post('/errores/update', crud.update_error);
router.post('/servicios/save', crud.save_servicio);
router.post('/servicios/update', crud.update_servicio);

module.exports = router;