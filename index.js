const express = require('express');
const app = express();
const PORT =3000;

app.get("/users", (req,res)=>{
    res.send("Hello users");
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});