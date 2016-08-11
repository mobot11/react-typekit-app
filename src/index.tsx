import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Jobs } from "./components/Jobs";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

ReactDOM.render(
    <Jobs compiler="TpeScript" framework="React" />,
    document.getElementById("jobs")
);
