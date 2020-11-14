const mongose = require('mongoose');

mongose.Promise = global.Promise;

mongose.connect('mongodb+srv://hoangtd:hoangtd21@pusherpoll.vpnci.mongodb.net/pusherpoll?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})  
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));