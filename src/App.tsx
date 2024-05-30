// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { LengthPart, Slider } from "./Slider";
import { Checkbox } from "./Checkbox";
import iconRightArrow from "./icon-arrow-right.svg";
import { CopyPasswordButton } from "./CopyPasswordButton";
import { LengthValues } from "./LengthValues";

function App() {
  return (
    <div className="PassGeneratorMain">
      <p className="passwordTitle">Password Generator</p>
      <header className="responsiveHeader">
        <div className="passwordMain">
          <div className="passwordField">PTx1f5DaFX</div>
          <CopyPasswordButton />
        </div>
        <div className="settingsMain">
          <div className="settingsContent">
            <LengthPart />
            <div className="settingCheckBox">
              <Checkbox
                label="Include Uppercase Letters"
                checkedStatus={false}
              />
              <Checkbox
                label="Include Lowercase Letters"
                checkedStatus={false}
              />
              <Checkbox label="Include Numbers" checkedStatus={false} />
              <Checkbox label="Include Symbols" checkedStatus={false} />
            </div>
            <div className="strengthVisibility">
              <p className="strengthText">STRENGTH</p>
              <LengthValues level={0} />
            </div>
            <div className="generateButton">
              <div className="generateText">GENERATE</div>
              <img src={iconRightArrow} style={{ paddingLeft: "24px" }} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
