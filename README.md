## cron-editor-react
cron表达式生成工具
![](./screenshot.png)

## Installation

```shell
npm i cron-editor-react --save
```

## Usage

```javascript
import CronEditor from 'cron-editor-react';

const handleCronChange = (cronExpression) => {
  console.log(cronExpression) //0 0 0 * * ?
}

<CronEditor 
    onChange={handleCronChange} 
    tabType="card" 
    showCrontab={false}
    value={'0 0 0 * * ?'}
 />
```

## API

| Prop                  | Description                                                      | Default     |
| --------------------- | ---------------------------------------------------------------- | ----------- |
| value                 | crontab表达式传值                                                | 0 0 0 * * ? |
| onChange              | 值改变触发                                                       | noop        |
| showRunTime（待优化） | 本地计算并展示最近五次的运行时间（未全面测试api，谨慎使用，通常由后端计算返回，也更合理，可作为备选方案。） | false       |
| tabType               | antd tab 页签的基本样式，可选 line、card editable-card 类型      | 'line'      |
| showCrontab           | 是否显示crontab表达式input，目前通过input修改禁用                | true        |

## Keywords
cron、react、js

## 更新日志

### 1.0.1 (2020-04-03)
- 修复星期表达式从星期一为1的问题

### 1.0.0 (2020-03-27)
- 版本号重置，组件名称修改，以下作为存档
  
### 2.0.0 (2019-11-28)
- 新增 API:tabType、showCrontab 

### 1.0.9 (2019-11-21)
#### 业务需求修改
> 日：
- 不指定：‘日’不指定和‘周’不指定，有且仅有一个不指定
- 第一个值小于等于第二个值
- 周期：几日开始，每几天执行一次
- 本月最后一天，不能填，只能是最后一天
- 具体天数，默认第一天

> 月：
- 不指定：删掉
- 周期：第一个值小于等于第二个值
- 具体月数，默认第一月

> 星期：
- 不指定：‘日’不指定和‘周’不指定，有且仅有一个不指定
- 周期：第一个值小于等于第二个值
- 具体星期数：默认星期一

- 暂时禁用Input修改cron
### 1.0.7 (2019-11-07)
- 暂时禁用Input修改cron

### 1.0.6 (2019-11-07)
- 增加propTypes 校验
- 可选显示客户端计算周期执行时间
- 修改默认值


## License

[MIT](./LICENSE)

