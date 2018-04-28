const express = require("express");
const fs = require("fs");
const path = require("path")

const router = express.Router();

router.route("/").get((req, res) => {
	fs.readFile("public/html/index.html", (err, data) => {
		res.writeHead(200, {'Content-Type': "text/html"});
		res.write(data)
		res.end();
	})
}).post((req, res) => {
	res.redirect(req.body.myFestival)
})

router.route("/Distortion").get((req, res) => {
	fs.readFile("public/html/distortion.html", (err, data) => {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(data);
		res.end();
	})
})
module.exports = router