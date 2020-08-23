import React, {useState} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
library.add(fas)
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App" style={{ marginTop: "10px" }}>
      <header className="App-header">
       <Icon icon='arrow-down' theme='primary' size='10x'/>
        <Menu
          defaultIndex="0"
          onSelect={(index) => {
            alert(index);
          }}
          mode="horizontal"
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
        <Button size='lg' onClick={() => {setShow(!show)} }>Toggle</Button>
        <Transition 
          in={show}
          timeout={300}
          animation='zoom-in-left'
        >
          <div>
            <p>hello</p>
            <p>hello1</p>
            <p>hello2</p>
            <p>hello3</p>
            <p>hello4</p>
          </div>
         </Transition> 
        <Button
          onClick={(e) => alert(e.target)}
          btnType='primary'
          size= 'lg'
        >
          Large Primary
        </Button>
        <Button btnType='danger' size='sm'>
          Small Danger
        </Button>
        <Button btnType= 'link' href="http://www.baidu.com">
          Link
        </Button>
        <Button btnType= 'link' disabled href="http://www.baidu.com">
          Disabled Link
        </Button>
      </header>
    </div>
  );
}

export default App;
