const { response } = require('express');
const express = require('express');
const app = express();      //sulud tähendavad käsku

app.use(express.static('public'));

app.get('/', (request, response)=>{         // /tähendab päringut pealehele
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (request, response) => {
    response.send('Hello, I Am Janar. Nice Meet You.');
});

//paneme rakenduse ootama päringut
app.listen(3000, ()=>{
    console.log('Server is running on Port 3000');
});