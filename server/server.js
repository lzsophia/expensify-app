const express=require('express');
const app=express();
const path=require('path');
const publicPath=path.join(__dirname, "..", "public");
const port=process.env.PORT || 3000;

app.use(express.static(publicPath));
// return html page for all unhandled requests
app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, ()=>console.log('server is up'));