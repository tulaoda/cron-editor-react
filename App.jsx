/**
 * 功能：主界面
 * 作者：宋鑫鑫
 * 日期：2019.11.04
 */
import React, { PureComponent } from "react";
import PropTypes from 'prop-types'
import Cron from "./src/index";
import { Modal, Button } from 'antd';


class Test extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            crontab: '0 0 0 * * ?'
        };

    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCronChange = (cronExpression) => {
        this.setState({
            crontab: cronExpression
        })
        console.log(cronExpression) //0 0 0 * * ?
    }

    render() {
        const { crontab } = this.state
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    width="1000"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Cron
                        showRunTime
                        tabType="card"
                        value={crontab}
                        onChange={this.handleCronChange}
                    />
                </Modal>
            </div>
        );
    }
}

export default Test;
