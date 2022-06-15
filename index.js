const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.S3_BUCKET);
  console.log("Database connected");
}

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});