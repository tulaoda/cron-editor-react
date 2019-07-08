/*
 * @Author: 苗壮
 * @Date: 2019-06-28 16:47:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-08 10:32:13
 */
import React, { PureComponent } from "react";
import {Radio, InputNumber, Row, Col, List} from "antd";
const {Group} = Radio;
export default class Year extends PureComponent {

	changeParams(type, value) {
		const state = {...this.props.year};
		state[type] = value;
		this.props.onChange(state);
	}

	render() {
		const {year: {type, start, end}} = this.props;
		return (
			<div >
				<Group value={type} onChange={(e)=>{this.changeParams("type", e.target.value);}} defaultValue="">
					<List size="small" bordered >
						<List.Item>
							<Radio value="">不指定</Radio>
						</List.Item>
						<List.Item>
							<Radio value="*">每年</Radio>
						</List.Item>
						<List.Item>
							<Radio value="period">周期</Radio>
							<InputNumber min={0} value={start} placeholder="年" onChange={(value)=>{this.changeParams("start", value);}} />{" - "}
							<InputNumber min={0} endYear={end} placeholder="年" onChange={(value)=>{this.changeParams("end", value);}} />
						</List.Item>
					</List>

				</Group>
			</div>
		);
	}
}
