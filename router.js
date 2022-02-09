const express = require('express');
const router = express.Router();

const crud = require('./controllers/crud');
const pool = require('./database/db');

router.get('/', async (req, res) => {     
    let rs 
    try{
        rs = await pool.query('SELECT * FROM errores')
        res.render('index.ejs', {results:rs.rows});
    }catch(e){
        console.log(e)
    }
})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/edit/:id', async (req,res)=>{    
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`SELECT * FROM errores WHERE id = ${id}`)
        res.render('edit', {registro_error: rs.rows[0]});
    }catch(e){
        console.log(e)
    }
});

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    let rs
    try{
        rs = await pool.query(`DELETE FROM errores WHERE id = ${id}`)
        res.redirect('/');
    }catch(e){
        console.log(e)
    }
});

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;