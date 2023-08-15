require("dotenv").config();
const app = require("./app");
const httpServer = require("http");
const connectDB = require("./utils/connectDB");
const { Console } = require("console");

const server = httpServer.createServer(app);

const PORT = process.env.PORT || 5000;

// CONNECTING MONGODB SERVER AND SERVER

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`SERVER RUNNING AT PORT :${PORT}`);
    });
  })
  .catch((error) => console.log(error));

//   TO RUN IN DEVELOPEMENT "npm run dev" --NODEMON
//   TO RUN IN PRODUCTION "npm start" --NODE
