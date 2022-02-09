const express = require('express');
const router = express.Router();

const crud = require('./controllers/crud');
const conexion = require('./database/db');

router.get('/', (req, res)=>{     
    conexion.query('SELECT * FROM errores',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('index.ejs', {results:results});            
        }   
    })
})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM errores WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {registro_error:results[0]});            
        }        
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM errores WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;