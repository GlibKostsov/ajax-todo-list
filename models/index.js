var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://glib:password12345@ds247061.mlab.com:47061/todo-list-app");
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

