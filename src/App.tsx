import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Routers from './routes/router';
import { Layout} from 'antd';
import Sidebar from "./component/common/Sidebar";
const { Content, Footer, Sider, Header,} = Layout;





const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
      <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
              <Routers />
              </Content>
      </Layout>
    </Layout>
  )
}

export default App;
