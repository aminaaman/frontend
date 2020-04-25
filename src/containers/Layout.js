import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
const { Content } = Layout;

const MainLayout = (props) => {
    return (
        <Layout className="layout">
            <Header {...props} />
            <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                {props.children}
            </div>   
            </Content>
            <Footer />
        </Layout>
    );
}


export default MainLayout;