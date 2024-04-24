const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
      return cb(null, './uploads'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb){
      let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
      return cb(null,`${Date.now()}-${file.fieldname}.${extension}`); // Rename the file to include the timestamp
    },
  });

   // Initialize Multer with the storage configuration
   exports.upload = multer({ storage: storage });

//    exports.module = upload;