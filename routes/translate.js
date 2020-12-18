const express = require("express");
const translatte = require("translatte");
const router = express();

router.get("/translated", (req, res) => {
  if (!req.query.inputstring) {
    res.send({
      error: "Please provide some input text",
    });
  } else {
    const inputstring = req.query.inputstring;
    const source_lan = req.query.source_lan;
    const res_lan = req.query.res_lan;
    translatte(inputstring, { from: source_lan, to: res_lan })
      .then((translated_res) => {
        res.send({ translatedText: translated_res.text });
        console.log(translated_res.text);
      })
      .catch((err) => {
        return err;
      });
  }
});

module.exports = router;
