const hello =  (req, res, next)=>{
console.log(req.method);
    console.log('hello');
    next();
}

const welcome =  (req, res, next)=>{
        console.log('welcome');
        next();
    }
    
module.exports = {hello, welcome};