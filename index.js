let matchers = 2;
const express = require('express');
const app = express();

const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

const port = process.env.PORT || 3000;
app.listen(port,() => console.log('Starting server at ' + port));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (request, response) => {
    const data = request.body;
    //const timestamp = Date.now();
    //data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});
/*
app.get('/api', (request, response) =>{
    if(matchers >0)
    database.find({}, (err, data) => {
        if(err){
            response.end();
            return;
        }
        response.json(data);
    });
});

function checkForMatch(items){
    for(item in items){
        const matcher1 = item.ID_USER;
        for(item2 in items2){
            if(matcher1 != item.ID_USER){
                const matcher2 = item2.ID_USER;
                if(matcher2.age){

                }
            }

        }
        }
    }
}*/