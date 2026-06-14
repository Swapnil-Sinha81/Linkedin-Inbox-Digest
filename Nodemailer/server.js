const express = require('express');
const app_Route = require('./routes/route');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* routes */
app.use('/api',app_Route);

app.listen(PORT,()=>{
    console.log(`Server is running at https://localhost:${PORT}`);
});