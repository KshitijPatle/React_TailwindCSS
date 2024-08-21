// const heading = React.createElement("h1", {}, "Hello React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div", {id:"parent"},
//      React.createElement("div",{id:"child"},
//         [
//             React.createElement("h1",{id:"hh1", key:"h1"},"Hello I am H1"),
//             React.createElement("h2",{id:"hh2", key:"h2"},"Hello I am H2"),
//         ]
//     ));

    const parent = React.createElement("div", {id:"parent"},
        [React.createElement("div",{id:"child", key:"h1234"},
           [
               React.createElement("h1",{id:"hh1", key:"h1"},"Hello I am H1"),
               React.createElement("h2",{id:"hh2", key:"h2"},"Hello I am H2"),
           ]
       ),
       React.createElement("div",{id:"child", key:"h1236"},
        [
            React.createElement("h1",{id:"hh123", key:"h3"},"Hello I am H123"),
            React.createElement("h2",{id:"hh223", key:"h4"},"Hello I am H223"),
        ]
    )
    ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);