/**
 * @Author: harsha
 * @Date:   2017-10-17T14:44:21+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-10-17T21:50:12+05:30
 */

const express = require('express');
const passport = require('passport');
const passportGoogle = require('passport-google-oauth20').Strategy;

const app = express();
/*Auth factors*/
passport.use(new passportGoogle());

/*Port definition from heroku*/
const PORT = process.env.PORT || 5000;

app.listen(PORT);
