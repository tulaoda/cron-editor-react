/**
 * 功能：周期-年
 * 作者：宋鑫鑫
 * 日期：2019.11.04
 */
import React, { PureComponent } from 'react'
import { Radio, InputNumber, message, Col, List } from 'antd'
const { Group } = Radio
import { isNumber } from '../utils/index'

export default class Year extends PureComponent {
    changeParams(type, value) {
        const state = { ...this.props.year }
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

    render() {
        const {
            year: { type, start, end },
        } = this.props
        return (
            <div>
                <Group
                    value={type}
                    onChange={(e) => {
                        this.changeParams('type', e.target.value)
                    }}
                    defaultValue=""
                >
                    <List size="small" bordered>
                        <List.Item>
                            <Radio value="">不指定</Radio>
                        </List.Item>
                        <List.Item>
                            <Radio value="*">每年</Radio>
                        </List.Item>
                        <List.Item>
                            <Radio value="period">周期</Radio>
                            <InputNumber
                                min={new Date().getFullYear()}
                                value={start}
                                placeholder="年"
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= new Date().getFullYear()) {
                                        this.changeParams('start', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'period'}
                            />
                            {' - '}
                            <InputNumber
                                min={new Date().getFullYear() + 1}
                                value={end}
                                placeholder="年"
                                formatter={(value) => value.toString().replace(/[^\d\.]/g, '')}
                                onChange={(value) => {
                                    if (isNumber(value) && Number(value) >= new Date().getFullYear() + 1) {
                                        this.changeParams('end', value)
                                    } else {
                                        message.info('输入不合法')
                                    }
                                }}
                                disabled={type !== 'period'}
                            />
                        </List.Item>
                    </List>
                </Group>
            </div>
        )
    }
}
