import React from "react";
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

interface MyProps {
}

interface MyState {
    collapsed: boolean
}
  
  
class Sidebar extends React.Component <MyProps, MyState> {
    constructor(props: Readonly<{}>){
        super(props);
        this.state = {
            collapsed: false,
          };
    }
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      render() {
        return (
            <Sider breakpoint="xs" collapsedWidth="40">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">Time Tracker</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">Project</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">Screenshoots</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="user" />
                <span className="nav-text">Clients</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="user" />
                <span className="nav-text">Employee</span>
              </Menu.Item>
            </Menu>
          </Sider>
        );
      }
}

export default Sidebar;