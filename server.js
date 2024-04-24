require('dotenv').config();

const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const mongoose = require('mongoose');
const schema = require('./model/csvToJson');

// db connect
mongoose
.connect("mongodb://127.0.0.1:27017/trial")
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(`Error is == ${err}`)
});

// const mongoose = require('mongoose');

// const jsonDataSchema = new mongoose.Schema({
//     firstName:{
//         type: String
//     },
//     lastName : {
//         type: String
//     }
// });

// const jsonData = mongoose.model("data",jsonDataSchema);


const uploadRouter = require('./routes/upload');

// app
const app = express();

// middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : false}));


app.use('/upload',uploadRouter);
// app.post('/upload',upload.single('uploadFile'),(req,res) =>{
//   console.log(req.file);
//     res.send('Done');
// })



// server
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})

