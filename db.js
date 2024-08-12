const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3008;

app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({  
     host:'localhost',
     user:'root',
     password:'',
    database:'crud_db'
}  );

db.connect((err)=> 
{
 if(err)
 {

    throw err;
 }
   console.log('MySQL connected...');
}
);
//create
app.post('/items',(req,res)=>{
const { name, description }=req.body;
const sql ='INSERT INTO items (name, description) VALUES (?, ?)';
db.query(sql, [name,description],(err,results)=>{
    if(err) throw err;
    res.send(results);
});
  
} );  

//Read
app.get('/items', (req, res) => {
    const sql = 'SELECT * FROM items';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

//update

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const sql = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    db.query(sql, [name, description, id], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });
//delete

app.delete('/items/:id',(req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM items WHERE id= ? ';
     db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result);

    });
});

//register APSi


app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO user (email, password) VALUES (?, ?)';
    db.query(sql, [email, hashedPassword], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});


// Login aps

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM user WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) {
      res.status(500).send('Internal server error');
    } else if (results.length === 0) {
      res.status(404).send('User not found');
    } else {
      const user = results[0];
      try {
        if (await bcrypt.compare(password, user.password)) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Authentication failed');
        }
      } catch (error) {
        res.status(500).send('Internal server error');
      }
    }
  });
});


console.log(PORT)

app.listen(PORT,()=>{
    console.log('server running on port ${PORT}');
} );









