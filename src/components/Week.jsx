/**
 * 功能：周期-周
 * 作者：宋鑫鑫
 * 日期：2019.11.04
 */
import React, { PureComponent } from 'react'
import { Radio, InputNumber, Row, Col, Select, List, Checkbox, message } from 'antd'
const { Group } = Radio
import { isNumber } from '../utils/index'

export default class Week extends PureComponent {
    weekOptions = [
        {
            label: '星期日',
            value: '1',
        },
        {
            label: '星期一',
            value: '2',
        },
        {
            label: '星期二',
            value: '3',
        },
        {
            label: '星期三',
            value: '4',
        },
        {
            label: '星期四',
            value: '5',
        },
        {
            label: '星期五',
            value: '6',
        },
        {
            label: '星期六',
            value: '7',
        },
    ]

    getWeekOptions() {
        return this.weekOptions.map((item, index) => {
            return (
                <Select.Option value={item.value} key={`${item.label}-${index}`}>
                    {item.label}
                </Select.Option>
            )
        })
    }

    changeParams(type, value) {
        const state = { ...this.props.week }
        state[type] = value
        // if (type === 'start') {
        //     if (state.end - state.start <= 1) {
        //         state.end = value + 1;
        //     }
        // }
        // if (type === 'end') {
        //     if (state.end - state.start <= 1) {
        //         state.start = value - 1;
        //     }
        // }
        this.props.onChange(state)
    }

    render() {
        const {
            week: { type, start, end, some, begin, beginEvery, last },
        } = this.props
        return (
            <div>
                <Group
                    value={type}
                    onChange={(e) => {
                        const state = { ...this.props.week }
                        // if (e.target.value === "some") {
                        //     state.some = ["1"];
                        // }
                        state.type = e.target.value
                        this.props.onChange(state)
                    }}
                >
                    <List size="small" bordered>
                        <List.Item>
                            <Radio value="*">每周</Radio>
                        </List.Item>
                        <List.Item>
                            <Radio value="?">不指定</Radio>
                        </List.Item>
                        <List.Item style={{ marginBottom: 5 }}>
                            <Radio value="period">周期</Radio>从{' '}
                            <Select
                                style={{ width: 80 }}
                                placeholder="周"
                                size="small"
                                value={start}
                                onChange={(value) => {
                                    this.changeParams('start', value)
                                }}
                                disabled={type !== 'period'}
                            >
                                {this.getWeekOptions()}
                            </Select>{' '}
                            到{' '}
                            <Select
                                style={{ width: 80 }}
                                placeholder="周"
                                value={end}
                                size="small"
                                onChange={(value) => {
                                    this.changeParams('end', value)
                                }}
                                disabled={type !== 'period'}
                            >
                                {this.getWeekOptions()}
                            </Select>
                        </List.Item>
                        <List.Item>
                            <Radio value="beginInterval"></Radio>第{' '}
                            <InputNumber
                                min={1}
                                max={4}
                                placeholder="周"
                                size="small"
                                value={begin}
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= 1 && Number(value) <= 4) {
                                        this.changeParams('begin', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'beginInterval'}
                            />{' '}
                            周的{' '}
                            <Select
                                style={{ width: 80 }}
                                defaultValue={'1'}
                                placeholder="星期"
                                value={beginEvery}
                                size="small"
                                onChange={(value) => {
                                    this.changeParams('beginEvery', value)
                                }}
                                disabled={type !== 'beginInterval'}
                            >
                                {this.getWeekOptions()}
                            </Select>
                        </List.Item>
                        <List.Item style={{ marginBottom: 5 }}>
                            <Radio value="last"></Radio>
                            本月最后一个
                            <Select
                                style={{ width: 80 }}
                                placeholder="星期"
                                size="small"
                                value={last}
                                onChange={(value) => {
                                    this.changeParams('last', value)
                                }}
                                disabled={type !== 'last'}
                            >
                                {this.getWeekOptions()}
                            </Select>
                        </List.Item>
                        <List.Item>
                            <Radio value="some">具体星期数（可多选）</Radio>
                            <Select
                                style={{ width: 'auto' }}
                                mode="multiple"
                                placeholder="星期数"
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
                                {this.getWeekOptions()}
                            </Select>
                            {/* <Checkbox.Group
                                value={some}
                                defaultValue="1"
                                onChange={value => {
                                    this.changeParams("some", value);
                                }}
                                options={this.weekOptions}
                                disabled={type !== "some"}
                            /> */}
                        </List.Item>
                    </List>
                </Group>
            </div>
        )
    }
}
