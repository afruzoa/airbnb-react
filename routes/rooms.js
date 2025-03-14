// routes/rooms.js
import express from "express";
import db from "../server/table.js";

const router = express.Router();

router.get("/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  const query = `SELECT * FROM rooms
  INNER JOIN room_categories ON rooms.id = room_categories.room_id
  WHERE room_categories.category_id = ?`;

  db.all(query, [categoryId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

export default router;