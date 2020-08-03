/**
 * 功能：周期-天
 * 作者：宋鑫鑫
 * 日期：2019.11.04
 */
import React, { PureComponent } from "react";
import { Radio, InputNumber, Row, Col, Select, List, Checkbox, message } from "antd";
const { Group } = Radio;
import { isNumber } from '../utils/index'

export default class Day extends PureComponent {
    constructor(props) {
        super(props);
        this.formatDayOptions();
    }

    // formatDayOptions() {
    //     this.dayOptions = [];
    //     for (let x = 1; x < 32; x++) {
    //         this.dayOptions.push({
    //             label: x,
    //             value: `${x}`
    //         });
    //     }
    // }

    formatDayOptions() {
        this.dayOptions = [];
        for (let x = 1; x < 32; x++) {
            const label = x < 10 ? `0${x}` : x;
            const value = `${x}`;
            const ele = (
                <Select.Option value={value} key={`${label}-${x}`}>
                    {label}
                </Select.Option>
            );
            this.dayOptions.push(ele);
        }
    }

    changeParams(type, value) {
        const state = { ...this.props.day };
        state[type] = value;
        if (type === 'start') {
            if (state.end - state.start <= 1) {
                state.end = value + 1;
            }
        }
        if (type === 'end') {
            if (state.end - state.start <= 1) {
                state.start = value - 1;
            }
        }
        this.props.onChange(state);
    }

    changeType = e => {
        const state = { ...this.props.day };
        // if (e.target.value === "some") {
        //     state.some = ["1"];
        // }
        state.type = e.target.value;
        this.props.onChange(state);
    };

    render() {
        const {
            day: { type, start, end, some, begin, beginEvery, last, closeWorkDay }
        } = this.props;
        return (
            <div>
                <Group value={type} onChange={this.changeType}>
                    <List size="small" bordered>
                        <List.Item>
                            <Radio value="*">每日</Radio>
                        </List.Item>
                        <List.Item>
                            <Radio value="?">不指定</Radio>
                        </List.Item>
                        <List.Item style={{ marginBottom: 5 }}>
                            <Radio value="period">周期</Radio>从{" "}
                            <InputNumber
                                min={1}
                                max={30}
                                defaultValue={1}
                                style={{ width: 80 }}
                                placeholder="日"
                                size="small"
                                value={start}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1 && Number(value) <= 30) {
                                        this.changeParams("start", value);
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== "period"}
                            />{" "}
                            到{" "}
                            <InputNumber
                                min={2}
                                max={31}
                                defaultValue={2}
                                style={{ width: 80 }}
                                placeholder="日"
                                value={end}
                                size="small"
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 2 && Number(value) <= 31) {
                                        this.changeParams("end", value);
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== "period"}
                            />
                            &nbsp;日&nbsp;
                        </List.Item>
                        <List.Item>
                            <Radio value="beginInterval"></Radio>
                            从{" "}
                            <InputNumber
                                min={1}
                                defaultValue={1}
                                placeholder="日"
                                size="small"
                                value={begin}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1) {
                                        this.changeParams("begin", value);
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== "beginInterval"}
                            />{" "}
                            日开始， 每{" "}
                            <InputNumber
                                min={1}
                                defaultValue={1}
                                placeholder="天"
                                size="small"
                                value={beginEvery}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 0) {
                                        this.changeParams("beginEvery", value);
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== "beginInterval"}
                            />
                            &nbsp;天执行一次
                        </List.Item>
                        <List.Item style={{ marginBottom: 5 }}>
                            <Radio value="closeWorkDay"></Radio>
                            每月{" "}
                            <InputNumber
                                min={1}
                                defaultValue={1}
                                placeholder="日"
                                size="small"
                                value={closeWorkDay}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1) {
                                        this.changeParams("closeWorkDay", value);
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== "closeWorkDay"}
                            />
                            &nbsp;日最近的那个工作日
                        </List.Item>
                        <List.Item style={{ marginBottom: 5 }}>
                            <Radio value="last">
                                本月最后{" "}
                                <InputNumber
                                    min={0}
                                    placeholder="天"
                                    size="small"
                                    value={last}
                                    formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                    onChange={(value) => {
                                        if (isNumber(value) && Number(value) >= 0) {
                                            this.changeParams("last", value);
                                        } else {
                                            message.info('输入不合法')
                                        }
                                    }}
                                    disabled
                                // disabled={type !== "last"}
                                />{" "}
                                天
                            </Radio>
                        </List.Item>
                        <List.Item>
                            <Radio value="some">具体天数（可多选）</Radio>
                            <Select
                                style={{ width: "auto" }}
                                defaultValue={["00"]}
                                mode="multiple"
                                placeholder="天数"
                                size="small"
                                value={some}
                                showArrow
                                onChange={value => {
                                    if (value.length < 1) {
                                        return message.warn("至少选择一项");
                                    }
                                    this.changeParams("some", value);
                                }}
                                disabled={type !== "some"}
                            >
                                {this.dayOptions}
                            </Select>
                            {/* <Checkbox.Group
                                value={some}
                                onChange={value => {
                                    this.changeParams("some", value);
                                }}
                                options={this.dayOptions}
                                disabled={type !== "some"}
                            /> */}
                        </List.Item>
                    </List>
                </Group>
            </div>
        );
    }
}
