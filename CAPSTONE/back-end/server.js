const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');

// parse requests of content-type - application / json
app.use(express.json());
app.use(cors());

app.use("/", express.static("public"));

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

let commentRoutes = require('./routes/commentRoutes');
app.use('/api/comments', commentRoutes);

let loginRoute = require('./routes/loginRoute');
app.use('/api/login', loginRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});   