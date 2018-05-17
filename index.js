const   express    = require('express'),
        app        = express(),
        bodyParser = require('body-parser'),
        data       = require("./data/comingSoon.json"),
        port       = process.env.PORT || 3000,
        comingSoon = require('./bookDate');  
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/getAllData', (req,res) =>{ 
        res.status(200).json(comingSoon.getAllData());
     }); 
app.post('/getDateBookType/',(req,res) =>{ 
        res.status(200).json(comingSoon.checkBookComing(req.body.book_id));        
});
app.get('/getbookData/:book_id/:name' ,(req,res) =>{ 
        res.status(200).json(comingSoon.checkIdAndBook(req.params.book_id,req.params.name));
});
app.put('/getbookData/:book_id/:name' ,(req,res) =>{ 
        res.status(200).json(comingSoon.checkIdAndBook(req.params.book_id,req.params.name));
}); 
app.post ('/getbookData/' ,(req,res) =>{ 
        res.status(200).json(comingSoon.checkIdAndBook(req.body.book_id,req.body.name));
}); 
app.get('/' ,
    (req,res) =>{
    res.sendFile(`${__dirname}/index.html`);
    });
app.get('/includes/style.css',
    (req,res) =>{
    res.sendFile(`${__dirname}/includes/style.css`);
    });
app.all('*',(req,res) =>{ 
        res.json('not found');
}); 

app.listen(port,
    () => {
        console.log(`listening on port ${port}`);
    });
