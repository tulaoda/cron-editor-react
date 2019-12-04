![](./screenshot.png)

# crontab-editor-fe-ml
+ 1.基于antd react组件的cron表达式生成工具
+ 2.可展示最近五次运行时间

## Install

```shell
npm i crontab-editor-fe-ml --save
```

## Usage

```javascript
import Cron from 'crontab-editor-fe-ml';

<Cron onChange={this.onChange} />
```

## API

| Prop | Description | Default
| --- | --- | -- |
| value | cron expression  |0 0 0 * * ?  |
| onChange | 值改变触发 | noop |
| showRunTime（待优化） | show cron runtime | false | 
| tabType | 页签的基本样式，可选 line、card editable-card 类型 | 'line' | 
| showCrontab | 是否显示crontab | true | 

## License

[MIT](./LICENSE)

