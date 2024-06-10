import {
  PasswordContainer,
  SettingsAndGenerator,
  PasswordGeneratorContextProvider,
} from "./";

export const PasswordGeneratorContainer = () => {
  return (
    <div className="main-container">
      <PasswordGeneratorContextProvider>
        <PasswordContainer />
        <SettingsAndGenerator />
      </PasswordGeneratorContextProvider>
    </div>
  );
};
