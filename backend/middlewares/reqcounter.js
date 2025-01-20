let reqcount = 0;
function reqcounter(req , res , next) {
    reqcount = reqcount + 1; 
    let time = new Date();                  // this is inbuilt feautres of node javascript actually this is class 
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    console.log(`This is ${reqcount}rd request hit at ${hours}:${minutes}:${seconds}`);   //using () instead of {} never forget ur mistakes
    // console.log(`The Host is ${req.hostname}`)
    
    next();
}

module.exports = {
    reqcounter : reqcounter
}