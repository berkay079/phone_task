import "./App.css";
import red from "./assets/red.jpeg";
import black from "./assets/black.jpeg";
import white from "./assets/white.jpeg";

function App() {
  const changeImage = (fileName, text) => {
    let img = document.querySelector("img");
    img.setAttribute("src", fileName);
    let textElement = document.querySelector("p");
    textElement.innerText = text;
    text = [
      "Red iPhone 14 From $899",
      "Black iPhone 14 From $899",
      "White iPhone 14 From $899",
    ];
  };
  // const changeText = (text) => {
  //   let textElement = document.querySelector("p");
  //   textElement.innerText = text;
  //   text = [
  //     "iPhone 14 From $799",
  //     "iPhone 14 Pro From $899",
  //     "iPhone 14 Pro Max From $999",
  //   ];
  // };

  return (
    <div className="App">
      <div>
        <h1>Buy iPhone 14</h1>
        <img className="imgStyle" src={red} alt="" />
      </div>
      <div className="buttonContainer">
        <div
          style={{
            fontweight: "bold",
            fontSize: "20px",
            color: "gray",
          }}
        >
          Model. Which is best for you?
        </div>
        <p className="textStyle">{"Red iPhone 14 From $899"}</p>

        <button
          className="buttonStyleBlack"
          onClick={() => changeImage(black, "Black iPhone 14 From $899")}
        ></button>
        <button
          className="buttonStyleWhite"
          onClick={() => changeImage(white, "White iPhone 14 From $899")}
        ></button>
        <button
          className="buttonStyleRed"
          onClick={() => changeImage(red, "Red iPhone 14 From $899")}
        ></button>
      </div>
      {/* <div className="versionButtonContainer">
        <button
          className="versionButtonStyle"
          onClick={() => changeText("iPhone 14 From $799")}
        >
          iPhone 14
        </button>
        <button
          className="versionButtonStyle"
          onClick={() => changeText("iPhone 14 Pro From $899")}
        >
          iPhone 14 Pro
        </button>
        <button
          className="versionButtonStyle"
          onClick={() => changeText("iPhone 14 Pro Max From $999")}
        >
          iPhone 14 Pro Max
        </button>
      </div> */}
    </div>
  );
}

export default App;
