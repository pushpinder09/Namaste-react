// const Heading = React.createElement(
//     "h1",
//     {id : "heading", xyz : "something"}
//     ,"Hellow World From React"
// )

// console.log(Heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);

const parent = React.createElement(
    "div", {id : "Parent"},
    React.createElement("div",{id : "child"}, [ React.createElement("h1",{},"Its my birthday") , React.createElement("h1",{},"Its my birthday")]
)
);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);