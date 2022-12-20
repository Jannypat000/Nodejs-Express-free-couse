const express = require('express'); // การเรียก express มาใช้งาน
// const chalk = require('chalk'); 
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express(); // ใช้งาน function express () นี้ 
const port = 7000; // ใช้งาน port ไหน ตามต้องการของเราเลย 
app.use(morgan('combined')); // ดู log ได้

app.get("/", (req, res) => {
     res.send('Hello JS');
})

// app.get("/" คือ เข้ามาเจอหน้าอะไร) , (req, res)  ให้อะไรกับเขา => { ---------- เเสดงอะไร ----------}

// ============================ เเสดงข้อมูล ====================================================



app.listen(port,  () => {
    debug("Listening on Port ",port);
})
// set DEBUG=* & node app.js 