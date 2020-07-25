import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App" style={{marginTop: '10px'}}>
      <header className="App-header">
        <Button disabled >hello button</Button>
        <Button onClick={(e)=>alert(e.target)} btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>Link</Button>
        <Button btnType={ButtonType.Link} disabled href='http://www.baidu.com'>Disabled Link</Button>
      </header>
    </div>
  );
}

export default App;
