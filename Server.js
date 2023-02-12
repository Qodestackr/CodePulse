var express = require("express");
var formidable = require("express-formidable");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 6500;
var frontend = 'https://remo-core-app.vercel.app'|| process.env.PRODUCTION_URL

const python = require("./services/python");

const javascript = require("./services/javascript");

// Typescript
// Ruby
// React
// Java
// C#
// Go
// Rust

app.use(formidable());

const corsOptions = () => {
  if (process.env.NODE_ENV === "production") {
    return {
      origin: frontend,
      optionsSuccessStatus: 200,
      methods: "GET,POST",
    };
  } else {
    return {
      optionsSuccessStatus: 200,
    };
  }
};

app.use(cors(corsOptions()));

// ROUTES
app.get("/", (req, res) =>
  res.send(
    "Hi There! You shouldn't be seeing this. 🙂"
  )
);

app.post("/code", (req, res) => {
  // console.log(req.fields)
  var text = req.fields.text;
  var language = req.fields.language;

  if (!text || !(text.length > 1)) {
    res.status(422).send("Write some code!");
  }
  console.log(language, text)

  switch (language) {
    case "python":
      python.run(text, function (data) {
        res.status(200).json(data);
      });
      break;
    case "javascript":
      javascript.run(text, function (data) {
        res.status(200).json(data);
      });
      break;

    default:
      res.status(422).send("Invalid. Kindly select supported languages.");
  }
});

app.listen(port, () =>
  console.log(`Backend up @http://localhost:${port}`)
);
