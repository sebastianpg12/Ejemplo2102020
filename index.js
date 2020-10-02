const express = require ('express');
const path = require ('path');
const app = express ();

app.get ('/', (req, res) => {
    res.send('Hola peludos')
})   

app.listen (3000, ()=>{
    console.log('El servidor esta encendido')
}) 