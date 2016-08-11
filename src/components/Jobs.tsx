import * as React from "react";
export interface JobsProps { compiler: string; framework: string; }


export class Jobs extends React.Component<JobsProps, {}> {
    render() {
        return <h1>a class for a jobs http request!</h1>;
    }
}
