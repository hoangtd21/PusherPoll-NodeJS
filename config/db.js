const mongose = require('mongoose');

mongose.Promise = global.Promise;

mongose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true})  
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));