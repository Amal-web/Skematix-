const bcrypt = require("bcrypt");

const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt).then((hash) => {
    return hash;
  });
};

const compareHash=async(password,hash)=>{
    return await bcrypt.compare(password,hash).then((compare)=>{
        return compare
    })
    
}

module.exports={generateHash,compareHash}