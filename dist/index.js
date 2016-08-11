"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
var Jobs_1 = require("./components/Jobs");
ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));
ReactDOM.render(React.createElement(Jobs_1.Jobs, {compiler: "TpeScript", framework: "React"}), document.getElementById("jobs"));
//# sourceMappingURL=index.js.map