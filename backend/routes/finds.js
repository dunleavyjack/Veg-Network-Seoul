const router = require("express").Router();
let Find = require("../models/find.model");

router.route("/").get((req, res) => {
  Find.find()
    .then((finds) => res.json(finds))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const veg = req.body.veg;
  const tag = req.body.tag;
  const location = req.body.location;
  const finderID = req.body.finderID;
  const date = Date.parse(req.body.date);

  const newFind = new Find({
    name,
    veg,
    tag,
    location,
    finderID,
    date,
  });

  newFind
    .save()
    .then(() => res.json("Find added :)"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Find.findById(req.params.id)
    .then((find) => res.json(find))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Find.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted xo"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Find.findById(req.params.id)
    .then((find) => {
      find.name = req.body.name;
      find.veg = req.body.veg;
      find.tag = req.body.tag;
      find.location = req.body.location;
      find.finderID = req.body.finderID;
      find.date = Date.parse(req.body.date);

      find
        .save()
        .then(() => res.json("Exercise updated :)"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
