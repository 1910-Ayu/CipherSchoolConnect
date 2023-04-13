const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.auth = async(req, res, next)=> {
  // Get token from header

  let token;
  if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
      ) {
        try {
          token = req.headers.authorization.split(" ")[1];
    
          //decodes token id
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
          req.user = decoded.user;
    
          next();
        } catch (error) {
         
         res.status(401).json({ msg: 'Token failed' });
        }
      }
    
      if (!token) {
        res.status(401).json({ msg: 'No token' });
      }
 
};
