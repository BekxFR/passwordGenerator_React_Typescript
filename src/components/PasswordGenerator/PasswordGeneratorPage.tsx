import { PasswordGeneratorContainer } from "./";
import "./PasswordGenerator.css";

export const PasswordGeneratorPage = () => {
  return (
    <div className="pg-body no-select">
      <header className="pg-title">Password Generator</header>
      <PasswordGeneratorContainer />
    </div>
  );
};
