const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const authenticate = require('./api/middleware/authenticate');

mongoose.connect('mongodb+srv://'+ process.env.MONGODB_USERNAME +':'+ process.env.MONGODB_PASSWORD +'@mystorecluster-oekf1.mongodb.net/mylocalstore?retryWrites=true&w=majority', {useNewUrlParser: true});

console.log('db connected');
const storeRoutes = require('./api/routes/store/index');
const adminRoutes = require('./api/routes/admin/index');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/store', storeRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

module.exports = app;