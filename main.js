const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Student = require('./app/controllers/students.controllers');
const mongoose = require('mongoose');
const session = require('express-session');

// create express app
const app = express();
const router = express.Router();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
app.use("/", router);

const port = 3000;

app.use('/assets', express.static(path.join(__dirname, 'app/views/assets')));


//DB connection

mongoose.connect('mongodb://ourclass:ourclass@ds145438.mlab.com:45438/ourclass');

mongoose.connection.on('error',function(){
  console.log('Could not connect to the database .Existing now...');
  process.exit();
});

mongoose.connection.once('open',function(){
  console.log("Successfuly connected to the database")
})

router.get('/api', (req, res) => {
  res.json({ 'message': 'Welcome to Your Project application REST-ful API.' });
});

// login/logout routes 
router.post('/api/login', (req, res) => {
  if(!req.body.username && !req.body.password){
    res.json('Usernmae & password is required')
  }else {}
  Student.find({'name':req.body.username}, (err,student) =>{
    if(!student) return re.send({err:'username or password is incoreect'})
      else {
        if (student.role === 1 && student.password === req.body.password){
          req.session.username ='admin';
          req.session.admin = true;
          res.send({err:0});
        }
      }
  })

});

router.post('/api/logout'), (req,res) => {
  req.session.destroy();
  res.send({err: 0});
}


// Web
router.get("/", (req, res) => {
  res.sendFile('index.html', { root: 'app/views' })
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
































function auth(req, res, next) {
  if(req.session && req.session.user === 'jan' && req.session.admin) {
      return next();
  }
  else {
      return res.sendStatus(401);
  }
}