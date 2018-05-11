/**
 * Created by Administrator on 2018/5/11.
 */

import React,{Component} from 'react';
import {Menu} from 'antd';
export default class Navleft extends Component{
    render(){
        return (
            <Menu
                mode="inline"
                theme="light"
                defaultSelectedKeys={["/admin/category"]}
            >
                <Menu.Item key="/admin/category">分类管理</Menu.Item>
                <Menu.Item key="/admin/article">文章管理</Menu.Item>
            </Menu>
        )
    }
}