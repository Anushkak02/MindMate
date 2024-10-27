import express from "express"
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express()
const port = process.env.PORT || 3000;

/*app.use(express.static('public'));*/
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


let anxietyScore = 0;
let depressionScore = 0;
let stressScore = 0;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.get("/submit", (req,res) => {
    const a1 = parseInt(req.query.anxiety1);
    const a2 = parseInt(req.query.anxiety2);
    const a3 = parseInt(req.query.anxiety3);
    const a4 = parseInt(req.query.anxiety4);
    const a5 = parseInt(req.query.anxiety5);
    const a6 = parseInt(req.query.anxiety6);
    const a7 = parseInt(req.query.anxiety7);

    anxietyScore = a1 + a2 + a3 + a4 + a5 + a6 + a7;

    const s1 = parseInt(req.query.stress1);
    const s2 = parseInt(req.query.stress2);
    const s3 = parseInt(req.query.stress3);
    const s4 = parseInt(req.query.stress4);
    const s5 = parseInt(req.query.stress5);
    const s6 = parseInt(req.query.stress6);
    const s7 = parseInt(req.query.stress7);

    stressScore = s1 + s2 + s3 + s4 + s5 + s6 + s7;

    const d1 = parseInt(req.query.depression1);
    const d2 = parseInt(req.query.depression2);
    const d3 = parseInt(req.query.depression3);
    const d4 = parseInt(req.query.depression4);
    const d5 = parseInt(req.query.depression5);
    const d6 = parseInt(req.query.depression6);
    const d7 = parseInt(req.query.depression7);
    
    depressionScore = d1 + d2 + d3 + d4 + d5 + d6 + d7;

    res.render(__dirname + "/views/index.ejs", {Anxiety : anxietyScore, Depression : depressionScore, Stress: stressScore});
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
