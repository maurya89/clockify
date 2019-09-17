import React from "react";
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

interface MyProps {
}

interface MyState {
    collapsed: boolean
}
  
  
class Dashboard extends React.Component <MyProps, MyState> {
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
            <div>
                This is content fddddddddddddd
            </div>
        );
      }
}

export default Dashboard;