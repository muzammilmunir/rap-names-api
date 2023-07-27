const express = require('express')
const app = express();
const PORT = 8000;


const rappers = { 
    '21savage' : {
        'age': 29,
        'birthName': 'Sheyaa bin Abraham',
        'birthLocation': 'London,England'
    },
    'chancetherapper' : {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago,Illinois'
    },
    'unknown' : {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },

}
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/:name',(req,res)=>{
    const rapperName = req.params.name.toLowerCase().split(" ").join("")
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})