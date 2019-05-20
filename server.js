'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser= require('body-parser')
var cors = require('cors');
var dns = require('dns');
var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connect(process.env.MONGOLAB_URI)

var Schema = mongoose.Schema;
var personSchema = new Schema({url:String, number:Number});
var Persona = mongoose.model('Persona', personSchema);  


app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});
var wSearch="";

app.get("/api/shorturl/:new?", function(req,res){

req.params['new']

  Persona.find({}, function(err,data){
    res.redirect(data[req.params['new']].url);
  })

})

/*  Persona.find({}, function(err,data){
    var mystring="/api/shorturl/";
    if(data.length>0){
    for(var i=0; i<data.length; i++){
      console.log(data[i].number)
        console.log(mystring+data[i].number)
var wordz= mystring+data[i].number;
var word2= data[i].url;
app.get(wordz, function(req, res){
  
   res.redirect(word2);
});
    }
    }
  
  })*/

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});

});

app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/shorturl/new', function(req,res){
if(req.body.url.match(/http:\/\/www./gi)){wSearch=req.body.url.replace(/http:\/\/www./gi,"")}
if(req.body.url.match(/https:\/\/www./gi)){wSearch=req.body.url.replace(/https:\/\/www./gi,"")}

  var w3 = dns.lookup(wSearch, function (erra, addresses, family) {

  if(erra == null){
  console.log(erra)
  if((req.body.url.match(/^http:\/\/www./gi) && req.body.url.match(/.com/gi)) || (req.body.url.match(/^https:\/\/www./gi) && req.body.url.match(/.com/gi))){
    var number=0;
  Persona.find({}, function(err,data){
  if(err){console.log('error1')}
  else{console.log(data.length); 
       var number= data.length;}
  })
    
  Persona.find({url: req.body.url}, function(err,data){
  if(data.length == 0){ 

  Persona.find({}, function(err,dat){
  if(err){console.log('error2')}
  else{
       var number= dat.length;
       var person = new Persona({ url: req.body.url, number: number});
        res.json({original_url: req.body.url, short_url: number});

person.save(function(err) {
if(err){return err;}

})
  }
  })
    

  }
  else{
    console.log(data);  
    Persona.find({url:req.body.url},function(err,data){
    
                res.json({original_url: req.body.url, short_url: data[0].number});

    })
      }
  })
    
    
    
 

     }
  else{
    res.json({error: "invalid URL"});   console.log("1st")  
  }
}
  else{
    res.json({error: "invalid URL"});  console.log("2nd")
  }    
});  
  
})


app.listen(port, function () {
  console.log('Node.js listening ...');
});
