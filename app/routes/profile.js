module.exports = app => {
    const passport = require('passport')
    const passportBearerStrategy  = require("passport-http-bearer").Strategy
    const auth = require("../helper/auth.js");
  
    var router = require("express").Router();
    app.use(passport.initialize());

    passport.use(new passportBearerStrategy(
        (token, done) => {
            const userCheck = auth.checkUserByToken(token)
            if(userCheck){
                return done(null, userCheck, { scope: 'all' });
            }else{
                return done(null, false);

            }
        }
    ));

    router.get('/', 
        passport.authenticate('bearer', { session: false }),
        (req, res) => {
            res.status(200).send({
                status: "200",  
                profile: req.user
            });
        }
    );
  
    app.use('/api/profile', router);
};