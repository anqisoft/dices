// https://blog.csdn.net/liruiqing520/article/details/107262653/
var fs = require("fs");  
var path = require("path");  
   
function mkdirs(dirname, callback) {  
    fs.exists(dirname, function (exists) {  
        if (exists) {  
            callback();  
        } else {  
            // console.log(path.dirname(dirname));  
            mkdirs(path.dirname(dirname), function () {  
                fs.mkdir(dirname, callback);
            });  
        }  
    });  
}

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
      return true;
    } else {
      if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
      }
    }
  }
 
// mkdirs('hello/a/b/c',() => { console.log('done'); });
mkdirsSync('hello/a/b/c');