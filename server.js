const express = require("express")
const dotEnv = require("dotenv")
const app = express();
dotEnv.config()

app.use(express.json());


require("./app/routes/login")(app);
require("./app/routes/profile")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

