const h3 = React.createElement("h3", {}, "i m h3");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h3);



// nested react
const heading = React.createElement("div", { className: "parent" }, React.createElement("div", { className: "child" }, React.createElement("h1", {}, "hello from nested react ")));

const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(heading);