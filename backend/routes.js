```js
const express=require('express');
const router=express.Router();
const db=require('./db');

router.post('/report',(req,res)=>{
 const {type,name,location,description,level}=req.body;
 db.run(`INSERT INTO reports(type,name,location,description,level,status)
 VALUES(?,?,?,?,?,?)`,[type,name,location,description,level,'Chờ xử lý']);
 res.json({msg:'ok'});
});

router.get('/reports',(req,res)=>{
 db.all(`SELECT * FROM reports`,[],(err,rows)=>{
  res.json(rows);
 });
});

router.put('/report/:id',(req,res)=>{
 const {status}=req.body;
 db.run(`UPDATE reports SET status=? WHERE id=?`,[status,req.params.id]);
 res.json({msg:'updated'});
});

module.exports=router;
```
