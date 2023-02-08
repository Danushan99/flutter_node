const multer = require("multer");
const { parse } = require("path");
const path = require("path");

const storage = multer.diskStorage({
    destiation: function (req,file ,cb){
        cb(null,"./uploads");

    },
    filename: function(req,file,cb){
        cb(null,Date.now() + file.originalname);
    }
});

const fileFilter =(req,file,callback ) =>{
    const validExts = [".png",".jpg",".jpeg"];
    if (!validExts.includes(path.extname(file.originalname))){
        return callback (new Error ("only .png,.jpg,.jpeg formated allowd"));
    }

 const fileSize = parse(req.headers["content-length"]);
 if (fileSize > 1048576){
    return callback (new Error("file size to big"));
 }
 callback(null,true);
}
let upload = multer ({
    storage: storage,
    fileFilter: fileFilter,
    fileSize: 1048576,
});

module.exports =upload.single("productImage");