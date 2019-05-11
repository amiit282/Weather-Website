const path = require('path')
const express = require('express')
const hbs=require('hbs')

//Define path for Express Config
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath=path.join(__dirname,'../Templates/views')
const partialsPath=path.join(__dirname,'../Templates/partials')
const port=process.env.PORT || 3000

app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page'
    })
})
 
app.get('*',(req,res)=>{
    res.send('My 404 Page');
    
})
app.listen(port, () => {
    console.log('Server is up on port.'+port)
})