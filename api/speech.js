var express = require('express');
var router = express.Router();

var http = require('http');


/* GET home page. */
router.get('/', function(req, res, next) {

console.log('asd');
const {Wit, log} = require('node-wit');
const client = new Wit({accessToken: 'PV5JC3Y42MSMBSTPWHGZ3P4UYQMRM66C'});
client.message(req.query.q, {})
.then((data) => {
  try {
  var intent = data.entities.intent!=undefined?data.entities.intent[0].value:null;
   var category = data.entities.article_category!=undefined?data.entities.article_category[0].value:null;
   var type = data.entities.type!=undefined?data.entities.type[0].value:null;

   var speechData = {

       Intent:intent,
       Category:category,
       Type : type

   }
    console.log('SUCCESS');
   
res.send(JSON.stringify(speechData));

} catch (err) {
    console.log('ERR');
    console.log(err);
  res.send(JSON.stringify(err));
}
   


})

});

module.exports = router;