const mongoose = require('mongoose');

const url = 'mongodb+srv://esha1234:Eshagupta1234@cluster0.fmq1n.mongodb.net/Library-hub?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;