// ===============================================================================
// DEPENDENCIES
// Get the correct file path, using the path package.
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {	
  // Survey route.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Default route if no match is found.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};