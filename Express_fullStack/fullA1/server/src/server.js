const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./router/postRouter'); // Updated to the correct file name

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

const mongoUri = "mongodb+srv://dialoabo:t78WHsXJqvuyt4n6@cluster0.j1dzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("Error connecting to MongoDB Atlas", error);
});

app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});