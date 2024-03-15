import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.get('/',(req,res) =>{
    res.setHeader("set-cookie",['setFromServer=1' , "jscantseethis=1; httponly"]);
    res.sendFile(path.join(__dirname,`./index.html`));
});
// app.get('/name',(req,res)=>{
//     res.json({'name':'My name is saba azeem.'});
// })
// app.get('/name/father',(req,res)=>{
//     res.json({'name':'My father name is m azeem.'});
// })
// app.get('/name/father/grand',(req,res)=>{
//     res.json({'name':'My grand father name is m ameen.'});
// })


// app.get('/path1',(req,res) => {
//     res.send(`Path-1 cookie: ${req.headers.cookie}`)
// });

// app.get('/path2',(req,res) => {
//     res.send(`Path-2 cookie: ${req.headers.cookie}`)
// });

// app.post('/login',(req,res)=>{
//     const cookie = "user=saba; samesite=strict";

//     res.setHeader("set-cookie",[cookie]);
//     res.send("ok");
// })

// app.get('/img',(req,res)=>{
//     const cookie = req.headers.cookie;
//     if(cookie){
//         res.json({'exist':"cookie exist"});
//     }else{
//         res.json({'not-exist':'cookie is not exist.'});
//     }
// })

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})