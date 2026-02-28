```js
const API='http://localhost:3000/api';

function send(){
 fetch(API+'/report',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({
  name:document.getElementById('name').value,
  location:document.getElementById('location').value,
  description:document.getElementById('desc').value,
  type:document.getElementById('type').value,
  level:document.getElementById('level').value
 })}).then(()=>alert('Đã gửi báo cáo'));
}

if(document.getElementById('tbl')){
 fetch(API+'/reports').then(r=>r.json()).then(d=>{
  let html='<tr><th>ID</th><th>Tên</th><th>Vị trí</th><th>Mô tả</th><th>Mức độ</th><th>Trạng thái</th></tr>';
  d.forEach(x=>{
   html+=`<tr><td>${x.id}</td><td>${x.name}</td><td>${x.location}</td><td>${x.description}</td><td>${x.level}</td><td>${x.status}</td></tr>`;
  });
  document.getElementById('tbl').innerHTML=html;
 });
}
```
