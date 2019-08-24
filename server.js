const express = require("express");
const path = require("path");

const app = express();

const htmlRoutes = require("./app/routes/htmlRoutes");
const apiRoutes = require("./app/routes/apiRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});