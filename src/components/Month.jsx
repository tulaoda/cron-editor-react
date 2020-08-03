/**
 * 功能：周期-月
 * 作者：宋鑫鑫
 * 日期：2019.11.04
 */
import React, { PureComponent } from 'react'
import { Radio, InputNumber, Row, Col, List, message, Select } from 'antd'
const { Group } = Radio
import { isNumber } from '../utils/index'

export default class Month extends PureComponent {
    constructor(props) {
        super(props)
        this.formatMonthOptions()
    }

    changeParams(type, value) {
        const state = { ...this.props.month }
        state[type] = value
        if (type === 'start') {
            if (state.end - state.start <= 1) {
                state.end = value + 1
            }
        }
        if (type === 'end') {
            if (state.end - state.start <= 1) {
                state.start = value - 1
            }
        }
        this.props.onChange(state)
    }

    // eachMonthOptions() {
    //     const options = [];
    //     for (let i = 1; i < 13; i++) {
    //         options.push({ label: `${i}月`, value: `${i}` });
    //     }
    //     return options;
    // }

    formatMonthOptions() {
        this.monthOptions = []
        for (let x = 1; x < 13; x++) {
            const label = `${x}月`
            const value = `${x}`
            const ele = (
                <Select.Option value={value} key={`${label}-${x}`}>
                    {label}
                </Select.Option>
            )
            this.monthOptions.push(ele)
        }
    }

    changeType = (e) => {
        const state = { ...this.props.month }
        // if (e.target.value === "some") {
        //     state.some = ["1"];
        // }
        state.type = e.target.value
        this.props.onChange(state)
    }

    render() {
        const {
            month: { type, start, end, beginEvery, begin, some },
        } = this.props
        return (
            <div>
                <Group value={type} onChange={this.changeType}>
                    <List size="small" bordered>
                        <List.Item>
                            <Radio value="*">每月</Radio>
                        </List.Item>
                        {/* <List.Item>
                            <Radio value="?">不指定</Radio>
                        </List.Item> */}
                        <List.Item style={{ marginBottom: 5 }}>
                            <Radio value="period">周期</Radio>从{' '}
                            <InputNumber
                                min={1}
                                max={11}
                                defaultValue={1}
                                placeholder="月"
                                size="small"
                                value={start}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1 && Number(value) <= 11) {
                                        this.changeParams('start', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'period'}
                            />{' '}
                            到{' '}
                            <InputNumber
                                min={2}
                                max={12}
                                defaultValue={2}
                                placeholder="月"
                                value={end}
                                size="small"
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 2 && Number(value) <= 12) {
                                        this.changeParams('end', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'period'}
                            />
                            &nbsp;月&nbsp;
                        </List.Item>
                        <List.Item>
                            <Radio value="beginInterval"></Radio>
                            从
                            <InputNumber
                                min={1}
                                max={12}
                                defaultValue={1}
                                placeholder="天"
                                size="small"
                                value={begin}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1 && Number(value) <= 12) {
                                        this.changeParams('begin', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'beginInterval'}
                            />{' '}
                            月开始， 每{' '}
                            <InputNumber
                                min={1}
                                max={12}
                                defaultValue={1}
                                placeholder="月"
                                endYear={beginEvery}
                                size="small"
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1 && Number(value) <= 12) {
                                        this.changeParams('beginEvery', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'beginInterval'}
                            />{' '}
                            月执行一次
                        </List.Item>
                        <List.Item>
                            <Radio value="some">具体月数（可多选）</Radio>
                            <Select
                                style={{ width: 'auto' }}
                                defaultValue={1}
                                mode="multiple"
                                placeholder="月数"
                                size="small"
                                value={some}
                                showArrow
                                onChange={(value) => {
                                    if (value.length < 1) {
                                        return message.warn('至少选择一项')
                                    }
                                    this.changeParams('some', value)
                                }}
                                disabled={type !== 'some'}
                            >
                                {this.monthOptions}
                            </Select>
                            {/* <Checkbox.Group
                                value={some}
                                onChange={value => {
                                    this.changeParams("some", value);
                                }}
                                options={this.eachMonthOptions()}
                                disabled={type !== "some"}
                            /> */}
                        </List.Item>
                    </List>
                </Group>
            </div>
        )
    }
}
