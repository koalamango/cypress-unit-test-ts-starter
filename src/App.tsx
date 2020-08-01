import React, { FC } from "react";
import GlobalStyle from "./GlobalStyle";
import ProgressBar from "./ProgressBar";

const App: FC = () => {
  const steps = ["Basket", "Adress", "Payment", "Confirmation"];
  return (
    <>
      <GlobalStyle />
      <main>
        <ProgressBar steps={steps} />
        <p>
          <span role="img" aria-label="emoji-wave">
            👋
          </span>
          &nbsp; Hello, there!
        </p>
        <p>This is... Cypress unit test starter</p>
      </main>
    </>
  );
};

export default App;
