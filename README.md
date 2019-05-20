# URL-Shortener-Microservice

*Shortens URLs*

This is an app that allows you to create shortcuts to urls based on the information you post.

...

**Home Page**

<img src="/URLShortener.PNG" title="home page" alt="home page" width="500px">


---


## Table of Contents 

> Sections
- [Sample Code](#Sample_Code)
- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Sample Code

```javascript
// url shortener

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
```

---

## Installation


### Setup


>  install npm package

```shell
$ npm install
```

- For all of the packages used, refer to the package.json file [here](/package.json).

---

## Features
## Usage (Optional)
## Documentation (Optional)
## Tests (Optional)
## Contributing
## Team

> Contributors/People

| [**seansangh**](https://github.com/seansangh) |
| :---: |
| [![seansangh](https://avatars0.githubusercontent.com/u/45724640?v=3&s=200)](https://github.com/seansangh)    |
| [`github.com/seansangh`](https://github.com/seansangh) | 

-  GitHub user profile

---

## FAQ

- **Have any *specific* questions?**
    - Use the information provided under *Support* for answers

---

## Support

Reach out to me at one of the following places!

- Twitter at [`@sean13nay`](https://twitter.com/sean13nay?lang=en)
- Github at [`seansangh`](https://github.com/seansangh)

---

## Donations (Optional)

- If you appreciate the code provided herein, feel free to donate to the author via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4VED5H2K8Z4TU&source=url).

[<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png" alt="Pay with PayPal, PayPal Credit or any major credit card" />](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4VED5H2K8Z4TU&source=url)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a>S.S.</a>
