const express = require('express');
const app = express();
app.listen(3001, () => console.log('Up and running sir!'));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://piyushtilokani:mongo23@cluster0.9ttbcpo.mongodb.net/users?retryWrites=true&w=majority', {useNewUrlParser: true});




const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


var User = mongoose.model('User', {usertype:String, fname: String, lname: String, email: String, phone: Number, investortype: String,inestorname: String, startupname: String ,username: String ,password: String });

app.post('/signupinvestor', (req, res) => {
    const usertype = "investor";
    const legalname = req.body.legalname;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;   
    const phone = req.body.phone;   
    const investortype = req.body.investortype;
    const investorname = req.body.investorlegalname;
    const username = req.body.investorUsername;
    const incestorHasAssets = req.body.investorHasAssets;
    const password = req.body.investorPassword;
    console.log(legalname, firstname, lastname, email, phone, password, investortype, investorname, username, password);
    const user = new User( {usertype: usertype, fname: firstname, lname: lastname, email: email, phone: phone,investortype: investortype, investorname: investorname, username: username, password: password   } )
    user.save().then(() => console.log('User created'));

res.redirect('http://localhost:3000/login');

    
    res.send(req.body.name);
    // console.log(__dirname + '/home.html');
});

app.post('/signupstartup', (req, res) => {
    const usertype = "startup";
    // const legalname = req.body.legalname;
    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    const email = req.body.email;   
    const phone = req.body.phone;   
    // const startuptype = req.body.startuptype;
    const startupname = req.body.startupname;
    const username = req.body.startupUsername;
    // const startupHasAssets = req.body.startupHasAssets;
    const password = req.body.startupPassword;
    // console.log(legalname, firstname, lastname, email, phone, password, startuptype, startupname, username, password);
    const user = new User( {usertype: usertype, startupname: startupname, email: email, phone: phone, username: username, password: password   } )
    user.save().then(() => console.log('User created'));
    
    res.redirect('http://localhost:3000/login');
});



app.post('/register', (req, res) => {

    console.log("challa hai bhai");
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    console.log(name, email, password);

    const user = new User( { name: name, email: email, password: password } )
    user.save().then(() => console.log('User created'));
    res.send("Registered");}
    
    );