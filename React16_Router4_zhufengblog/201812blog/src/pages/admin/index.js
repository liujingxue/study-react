/**
 * Created by Administrator on 2018/5/11.
 */

import React,{Component} from 'react';
import {Row,Col} from 'antd';
import Header from '../../components/Header';
import Navleft from '../../components/Navleft';
import {Route} from 'react-router-dom';
export default class Admin extends Component{
    render(){
        return (
            <Row className="admin-page">
                <Col span="24">
                    <Header />
                    <Row>
                        <Col span="3">
                            <Navleft/>
                        </Col>
                        <Col span="21">
                            <Route path="/admin/welcome" component={Welcome} />
                            <Route path="/admin/category" component={Category} />
                            <Route path="/admin/article" component={Article} />
                        </Col>

                    </Row>

                </Col>
            </Row>
        )
    }
}