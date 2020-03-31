## cron-mlamp-editor
cron表达式生成工具
![](./screenshot.png)

## Installation

```shell
npm set registry http://npm.po.mlamp.cn
npm i cron-mlamp-editor --save
```

## Usage

```javascript
import CronEditor from 'cron-mlamp-editor';

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

## License

[MIT](./LICENSE)

