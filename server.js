const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/finance', {
    useNewUrlParser: true,
    useUnifiedTopology: true  // Correct spelling here
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/api/transactions', transactionRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
