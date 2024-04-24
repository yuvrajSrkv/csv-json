const csvToJSON = require("csvtojson");
const data = require("../model/csvToJson").data;
const mongoose = require('mongoose');

exports.postReq = async (req, res) => {
  const filePath = req.file.path;
  console.log(req.file);

  // csvToJSON()
  // .fromFile(filePath)
  // .then((result)=>{
  //     console.log(result);

  // })
  const result = await csvToJSON().fromFile(filePath);
  console.log(result);
  const returningData = [];
  mongoose
    .connect("mongodb://127.0.0.1:27017/trial")
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(`Error is == ${err}`);
    });

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].FirstName);
    const data1 = await data.create({
      firstName: result[i].FirstName,
      lastName: result[i].LastName,
      id: result[i].id,
    });
    returningData.push(data1);
  }
  console.log(returningData);
  res.json(returningData);
};
