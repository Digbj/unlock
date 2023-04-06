console.log('hello');
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose")

const port=8080;

const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

mongoose.connect("mongodb://0.0.0.0:27017/unlock",{
useNewUrlParser:true,
useUnifiedTopology:true,
})
.then(()=>{console.log('connected to DB')})
.catch((err)=>{console.log(err)})


//----------------------------------user Schema----------------------------------------------
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User=new mongoose.model("user",userSchema)


//route
// app.post("/login",(req,res)=>{
//     res.send("My Database");
// })


//-------------------------------------------------------------User Login----------------------------------------
app.post("/login", async (req, res) => {
    const {email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (user) {
        if(password==user.password){
            res.send({ message: "login sucessful",user })
            // res.send({email});
        }else{
            res.send({ message: "Credential did'nt matched" });
        }
       
      } else {
        
        res.send({ message: "user not registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });


//----------------------------------------------------------User Registration route--------------------------------
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (user) {
        res.send({ message: "registered user" });
      } else {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.send({ message: "successfully registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });
  
  //--------------------------------------adding weight of a client----------------------------------
  app.post('/description', async (req, res) => {
    const { weight } = req.body;
    const { user_id } = req.session;
  
    try {
      // Find the user in the database and update their profile description
      const user = await User.findByIdAndUpdate(user_id, { weight}, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'weight updated successfully', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });




app.listen(port,()=>{console.log('App is Live at '+port)})
