import React from 'react'
import './index.css'
import { Menu, ActivityIndicator, NavBar, Icon } from 'antd-mobile';

const data = [
    {
        value: '1',
        label: 'Food',
    }, {
        value: '2',
        label: 'Supermarket',
    },
    {
        value: '3',
        label: 'Extra',
        isLeaf: true,
    },
];

class HomeHeader extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {
            initData: '',
            show: false,
        };
    }
    onChange = (value) => {
        let label = '';
        data.forEach((dataItem) => {
            if (dataItem.value === value[0]) {
                label = dataItem.label;
                if (dataItem.children && value[1]) {
                    dataItem.children.forEach((cItem) => {
                        if (cItem.value === value[1]) {
                            label += ` ${cItem.label}`;
                        }
                    });
                }
            }
        });
        console.log(label);
    }
    handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }
    }

    onMaskClick = () => {
        this.setState({
            show: false,
        });
    }

    //点击右边按钮
    showList = (e) =>{
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
            show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
            setTimeout(() => {
                this.setState({
                    initData: data,
                });
            }, 500);
        }

    }
    render() {
        const { initData, show } = this.state;
        const menuEl = (
            <Menu
                className="single-foo-menu"
                data={initData}
                value={['1']}
                level={1}
                onChange={this.onChange}
                height={document.documentElement.clientHeight * 0.6}
            />
        );
        const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </div>
        );
        return (
            <div className={show ? 'single-menu-active' : ''}>
                <div>
                    <NavBar
                        mode="light"
                        onLeftClick={this.handleClick}
                        className="single-top-nav-bar"
                        rightContent={
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg"
                                 className="am-icon am-icon-md nav-icon" alt=""
                                 onClick={this.showList.bind(this)}
                            />
                        }
                    >
                        Logo
                    </NavBar>
                </div>
                {show ? initData ? menuEl : loadingEl : null}
                {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
            </div>
        );
    }
}
export default HomeHeader