var path = require("path");

module.exports = function(app) {
    app.get("/portfolio", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/portfolio.html"));
      });
    
      app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
      });
    
};   