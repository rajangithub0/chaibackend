import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of joks
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke 1",
      content: "this is a joke 1",
    },
    {
      id: 2,
      title: "A Joke 2",
      content: "this is a joke 2",
    },
    {
      id: 3,
      title: "A Joke 3",
      content: "this is a joke 3",
    },
    {
      id: 4,
      title: "A Joke 4",
      content: "this is a joke4",
    },
    {
      id: 5,
      title: "A Joke 5",
      content: "this is a joke 5",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is start on port ${port}`);
});
