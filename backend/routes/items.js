const router = require("express").Router();
let item = require("../models/itemform.model");

router.route("/").get((req, res) => {
  item
    .find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/add").post((req, res) => {
  const itemName = req.body.itemName;
  const itemQuantity = req.body.itemQuantity;
  const Item = new item({ itemName, itemQuantity });
  Item.save()
    .then(() => {
      res.json("Item Added");
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});
router.route("/edititem").get((req, res) => {
  const itemid = req.query.itemid;
  item
    .find({ _id: itemid })
    .then((items) => res.json("Item Updated"))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/edititem/:id").post((req, res) => {
  item
    .findById(req.params.id)
    .then((i) => {
      i.itemName = req.body.itemName;
      i.itemQuantity = req.body.itemQuantity;
      i.save()
        .then(() => {
          res.json("Item Updated");
        })
        .catch((err) => {
          console.log(err);
        });
      res.json("Updation Completed");
    })
    .catch((err) => console.log(err));
});

router.route("/").delete((req, res) => {
  item
    .findByIdAndDelete(req.body.itemToDelete)
    .then(() => res.json("Item Deleted"))
    .catch((err) => console.log(err));
});

module.exports = router;
