# Backend and Frontend Integration (Express + CORS + Proxy)

This project demonstrates how to connect a backend built with Express.js to a frontend application using CORS and a proxy setup. The Express server provides RESTful API endpoints that handle client requests and return responses in JSON format. CORS is configured on the backend to allow communication between different origins during development. On the frontend, a proxy is defined in the React application's `package.json`, which forwards API requests to the backend server without requiring full URLs and helps prevent CORS-related issues. This setup enables smooth and efficient communication between the frontend and backend while keeping the codebase clean, scalable, and easy to maintain.

# MongoDB & Mongoose (Quick Guide)

## Install

```bash
npm install mongoose express cors
```

## Mongoose Connection

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/socialmedia")
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);
```

## Model (Post)

`models/Post.js`

```js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    caption: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
```

## Use Model

```js
const Post = require("./models/Post");

app.post("/posts", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});
```
