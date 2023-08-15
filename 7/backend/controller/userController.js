const User = require("../model/user");
const { generateHash, compareHash } = require("../utils/bcrypt");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    if (
      (name && email && password) !== "" &&
      (name && email && password) !== undefined
    ) {
        const existingUser = await User.findOne({ email });
        if(!existingUser){
        const hashedPassword = await generateHash(password);
        //   console.log(hashedPassword);
          const user = await User.create({
            name,
            email,
            password: hashedPassword,
          });

          return res.status(201).json({ message: "user successfully registered",user });
        }else{
            return res.status(400).json({ message: "user with the same email already exists" });
        }
    }else{
        return res
        .status(400)
        .json({ message: "Don't leave input fields empty" });
    }
  } catch (error) {
    console.log(error);
  }


};


const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      if (!email || !password)
        return res.status(400).json({ message: "All fields are required" });
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email" });
      }
      const comparePassword = await compareHash(password, user.password);
      if (!comparePassword) {
        return res.status(400).json({ message: "Incorrect password" });
      }
       return res
        .status(200)
        .json({ message: "User Successfully logedIn ", user });
    } catch (error) {
      console.log(error);
    }
}

const logout=async(req,res)=>{
    res.status(200).json({message:"User successfully loggedout"})
}
module.exports = {
  register,
  login,
  logout
};
