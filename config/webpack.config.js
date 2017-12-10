const path = require("path");

module.exports = require('./buildConfig')(
    {
        "winery": path.join(__dirname, "web", "client", "app")
    },
    {
        base: __dirname,
        dist: path.join(__dirname, "web", "client", "dist"),
        framework: path.join(__dirname, "web", "client"),
        code: path.join(__dirname, "web", "client")
    },
    false,
    "/dist/"
);
