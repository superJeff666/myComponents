import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
function App() {
  return (
    <div className="App" style={{ marginTop: "10px" }}>
      <header className="App-header">
        <Menu
          defaultIndex="0"
          onSelect={(index) => {
            alert(index);
          }}
          mode="vertical"
          defaultOpenSubMenus={["2"]}
        >
          <MenuItem>cool link1</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <Button disabled>hello button</Button>
        <Button
          onClick={(e) => alert(e.target)}
          btnType={ButtonType.Primary}
          size={ButtonSize.Large}
        >
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small Danger
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          Link
        </Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com">
          Disabled Link
        </Button>
      </header>
    </div>
  );
}

export default App;
