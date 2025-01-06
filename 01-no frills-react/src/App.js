const Pizza = (props) =>  {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.description),          
            
        ]
    ); 
};

const App = () =>  {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "The pepperoni Pizza",
                description: "some deli pizza!",
            }),
            React.createElement(Pizza, {
                name: "American pizza",
                description: "Frencj fries and hot dogs",
            }),
            React.createElement(Pizza, {
                name: "The Hawaiian",
                description: "Pineaple and Ham",
            }),
            React.createElement(Pizza, {
                name: "The chiken pizza",
                description: "Chick.",
            }),
            React.createElement(Pizza, {
                name: "The Big Meat Pizza",
                description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
            }),
        ]
        
    ); 
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));