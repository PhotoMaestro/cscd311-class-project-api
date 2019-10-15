const express = require('express');
    const cors = require('cors');
   const mongoose = require('mongoose');

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(require('./Routes'));

let mongoURL = "mongodb://localhost:27017/hallData";
(async () => {
    await mongoose.connect(mongoURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    app.listen(3000, () => {
        console.log("Server started.");
    })
})();