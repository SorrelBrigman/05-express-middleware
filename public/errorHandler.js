const errorHandler =(req, res, next)=>{
  res.send(`page not found, try chickens or eggs`);
  console.log(`other route`)
};


module.exports = errorHandler;
