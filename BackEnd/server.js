//connection creation and creating new database
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/BookWorm")
.then(()=>console.log("Success"))
.catch((err)=>console.log(err));

//schema
//mongoose schema define the structure of the document ,default value,validators etc.


const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String
});

//collection creation

const Users=new mongoose.model("User",userSchema);

//create document or insert

const userList=new Users({
    name:"dhwani",
    email:"dhwani@gmail.com",
    phone:"12364322"

});

userList.save();

