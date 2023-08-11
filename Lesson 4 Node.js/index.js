const express = require("express");

require("colors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [
  {
    id: 1,
    username: "Kelem",
    email: "kelem@gmail.com",
  },

  {
    id: 2,
    username: "Ferid",
    email: "ferid@gmail.com",
  },

  {
    id: 3,
    username: "Mamed",
    email: "mamed@gmail.com",
  },
];

app.get(`/users`, (req, res) => {
  return res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  return res.json(user);
});

const PORT = 8000;
app.listen(
  PORT,
  console.log(`Server running on port : http://localhost:${PORT}`.bold.blue)
);
