const express = require("express");
const router = express.Router();

const lessonssHandler = require("./handler/lessons");

router.post('/', lessonssHandler.create);
router.put('/:id', lessonssHandler.update);
router.delete('/:id', lessonssHandler.destroy);
router.get('/:id', lessonssHandler.get);
router.get('/', lessonssHandler.getAll);

module.exports = router;
