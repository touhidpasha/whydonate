const express = require("express");
const app = express();
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.get("/", (req, res) => {
  res.send("succefull responce");
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});

app.get("/login", function (req, res) {
  const details = { email: "touhidpasha552@gmail.com", password: "abc123" };
  if (
    req.query.email == details.email &&
    req.query.password == details.password
  )
    return res.status(200).send({ msg: "success" });
  else return res.status(404).send({ msg: "failure" });
});
app.get("/search", (req, res) => {
  const channels = [
    { title: "cnn", description: "news channel from us", lang: "english" },
    { title: "star sports", description: "sports channel from us", lang: "english" },
    { title: "bloomberg", description: "economic news channel from us", lang: "english" },
    { title: "chandana", description: "gov channel from ind", lang: "hindi" },
    { title: "tv9", description: "news channel from us", lang: "kannada" }
  ];
  // console.log(req.query.string);
  let  data=channels.filter(channel=> channel.title===req.query.string)
  // console.log("data "+data);
  return res.status(200).send(data)
});
