import { useEffect, useState } from "react";

const ColorForm = () => {
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState("#000000");
  const [gradient, setGradient] = useState("");

  const handleClick = (e) => {
    addColor(currentColor);
  };

  const addColor = (color) => {
    const newColors = [...colors];

    const newColor = {};
    newColor.text = color;
    newColor.id = colors.length;
    newColors.push(newColor);

    setColors(newColors);
  };

  const removeColor = (id) => {
    console.log(id);
    const newColors = colors.filter((color) => color.id !== id);

    setColors(newColors);
  };

  useEffect(() => {
    setGradient(
      colors
        .map((elem) => {
          return elem.text;
        })
        .join(",")
    );
  }, [colors]);

  return (
    <>
      <div className="header-color">
        <input
          type="color"
          value={currentColor}
          onChange={(e) => setCurrentColor(e.target.value)}
        ></input>
        <button onClick={handleClick} className="style-color-button">
          Add color
        </button>
      </div>
      <div id="color-list">
        {colors.map((color) => (
          <div key={color.id} className="d-flex">
            {color.text}{" "}
            <button
              className="style-color-button"
              onClick={() => {
                removeColor(color.id);
              }}
            >
              Delete Color
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundImage: `linear-gradient(${gradient})`,
        }}
        id="gradient"
      ></div>
    </>
  );
};

export default ColorForm;
