const parent = React.createElement("div",
    { id: "parent"},
   [ React.createElement("div",
        {id:"child1"},[
            React.createElement("h1",{},"i am the h1"),
            React.createElement("h2",{},"I am the h2"),
        ]),
        React.createElement("div",
            {id:"child2"},[
                React.createElement("h1",{},"i am the h1"),
                React.createElement("h2",{},"I am the h2"),
            ]),
    ]
);

//jsx

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
