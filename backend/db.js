```js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

db.serialize(()=>{
 db.run(`CREATE TABLE IF NOT EXISTS reports(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT,
  name TEXT,
  location TEXT,
  description TEXT,
  level TEXT,
  status TEXT
 )`);
});

module.exports=db;
```
