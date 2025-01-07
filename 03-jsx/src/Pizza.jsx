// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

//This is the markup you intend to generate
//This is easiest way to read and is the same as the code above.

const Pizza = (props) => {
    return (
      <div className="pizza">
        <h1>{ props.name }</h1>
        <p>{ props.description }</p>
      </div>
    );
  };

export default Pizza;