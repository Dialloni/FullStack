const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./router/userRouter'); // Corrected path

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

const mongoUri = "mongodb+srv://dialoabo:b66WanGprBsdoCQV@cluster0.j1dzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set('debug', true);
mongoose.set('bufferCommands', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("Error connecting to MongoDB Atlas", error);
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});