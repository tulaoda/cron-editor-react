/**
 * 功能：周期-天
 * 作者：宋鑫鑫
 * 日期：2019.11.04
 */
import React, { PureComponent } from "react";
import { Radio, InputNumber, Row, Col, Select, List, Checkbox } from "antd";
const { Group } = Radio;
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
                                max={31}
                                defaultValue={1}
                                style={{ width: 80 }}
                                placeholder="日"
                                size="small"
                                value={start}
                                onChange={value => {
                                    this.changeParams("start", value);
                                }}
                                disabled={type !== "period"}
                            />{" "}
                            到{" "}
                            <InputNumber
                                min={1}
                                max={31}
                                defaultValue={2}
                                style={{ width: 80 }}
                                placeholder="日"
                                value={end}
                                size="small"
                                onChange={value => {
                                    this.changeParams("end", value);
                                }}
                                disabled={type !== "period"}
                            />
                        </List.Item>
                        <List.Item>
                            <Radio value="beginInterval"></Radio>
                            从第{" "}
                            <InputNumber
                                min={1}
                                defaultValue={1}
                                placeholder="日"
                                size="small"
                                value={begin}
                                onChange={value => {
                                    this.changeParams("begin", value);
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
                                onChange={value => {
                                    this.changeParams("beginEvery", value);
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
                                onChange={value => {
                                    this.changeParams("closeWorkDay", value);
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
                                    onChange={value => {
                                        this.changeParams("last", value);
                                    }}
                                    disabled={type !== "last"}
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
