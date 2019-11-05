![](./screenshot.png)

# cron-editor-react
+ 1.基于antd react组件的cron表达式生成工具
+ 2.可配合antd from直接使用
+ 3.可展示最近五次运行时间

## Install

```shell
npm i cron-editor-react --save
```

## Usage

```javascript
import Cron from 'cron-editor-react';

<Cron onChange={this.onChange} />
```

# API 

+ value - 默认值 "0 0 0 1 1 1";
+ onChange(value) - 值改变触发

## License

[MIT](./LICENSE)

