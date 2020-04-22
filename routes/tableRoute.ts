 module.exports=(app)=>{
     const user=require('../controllers/tableController'); 
    let router=require("express").Router();
    router.get("/getUsers",user.findAll);
    
    router.put("/updateUser/:id",user.update);
   
    router.delete("/deleteUser/:id",user.delete);

    router.post("/addUser",user.create);

    app.use('',router);
};

