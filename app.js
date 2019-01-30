var express = require("express"),
    app = express(),
    todoRoutes = require('./routes/todos');
    ;

app.get("/", function(req, res){
    res.send("hello from the landing page");
});

app.use("/api/todos", todoRoutes);

app.listen(4000, function(){
    console.log("server is running");
}); 

