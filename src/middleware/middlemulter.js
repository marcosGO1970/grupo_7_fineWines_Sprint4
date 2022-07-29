const multer = require('multer');
const path = require('path')

function upload (folderName, entity) {

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,'../../public/images/'+folderName));
    },
    filename : function(req,file,cb){
        cb(null, `${entity}-img-${Date.now()}hola${path.extname(file.originalname)}`)
    }
});

return multer({storage});

}

module.exports = upload;