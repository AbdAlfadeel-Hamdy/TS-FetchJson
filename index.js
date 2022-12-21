"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (data) { return console.log(data.data); });
fetch(url)
    .then(function (res) { return res.json(); })
    .then(function (data) { return console.log(data); });
