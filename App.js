const heading=React.createElement("h1",{id:"heading"},"Hello React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am suchi!"),React.createElement("h1",{id:"heading"},"Hello React!")]));
root.render(parent);