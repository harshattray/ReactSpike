/**
 * @Author: harsha
 * @Date:   2017-10-17T14:44:21+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2017-10-17T17:41:35+05:30
 */

const express = require('express');

const app = express();

app.get('/',(req,res) =>{
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
