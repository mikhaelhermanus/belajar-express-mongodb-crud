const express = require('express')
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOptions = {
    origin: "*"
}
// konek ke database
// const mongooseConfig = {
//     useNewUrlParser: true, 
//    useUnifiedTopology: true,
// }
db.mongoose.connect(db.url)
.then(()=> console.log("database connected"))
.catch(err =>{
    console.log(`gagal konek ${err.message}`)
    process.exit()
});
// register cors middleware

app.use(cors(corsOptions));
app.use(express.json());

// call routes
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`server started on port ${PORT}`))


