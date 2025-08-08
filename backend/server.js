require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const phonesRouter = require('./routes/phones');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/phones', phonesRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
