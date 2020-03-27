
# CRON表达式简介

在开发过程中，经常会使用到定时任务，一般的实现方式有 Java自带的Timer定时器、任务调度器Quartz、Spring3.0以上自带的task等， 当然有时也会使用到Linux下的crontab定时任务，但是只精确到分钟；其中用到cron表达式。

CRON表达式是一个字符串，包含五个到七个由空格分隔的字段（每种软件不一样），表示一组时间，通常作为执行某个程序的时间表。

在线Cron表达式生成器：http://cron.qqe2.com/

例子：每月的最后1天：0 0 L * * *

说明：

```
*    *    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |    └ year (*)
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, optional)
```

| 字段         | 是否必填 | 允许值          | 允许特殊字符 | 备注                   |
| ------------ | -------- | --------------- | ------------ | ---------------------- |
| Seconds      | 是       | 0–59            | *,-          | 标准实现不支持此字段。 |
| Minutes      | 是       | 0–59            | *,-          |
| Hours        | 是       | 0–23            | *,-          |
| Day of month | 是       | 1–31            | *,-?LW       | ?LW只有部分软件实现了  |
| Month        | 是       | 1–12 or JAN–DEC | *,-          |
| Day of week  | 是       | 0–6 or SUN–SAT  | *,-?L#       | ?L#只有部分软件实现了  |
| Year         | 否       | 1970–2099       | *,-          | 标准实现不支持此字段。 |

# cron-mlamp-editor

![](./screenshot.png)

+ 1.基于antd react组件的cron表达式生成工具
+ 2.本地计算并展示最近五次运行时间

## Install

```shell
npm i cron-mlamp-editor --save
```

## Usage

```javascript
import CronEditor from 'cron-mlamp-editor';

<CronEditor 
    onChange={this.handleCrontabChange} 
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
| showRunTime（待优化） | 本地计算并展示最近五次的运行时间（通常情况下后台计算，也更合理） | false       |
| tabType               | antd tab 页签的基本样式，可选 line、card editable-card 类型      | 'line'      |
| showCrontab           | 是否显示crontab表达式input，目前通过input修改禁用                | true        |

## License

[MIT](./LICENSE)

