const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todoController");
const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
