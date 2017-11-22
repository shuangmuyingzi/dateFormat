# datechange 
> 一个格式化后台接口返回时间戳的小插件.


## Installation
```shell
npm install --save-dev datechange
```

## Usage
```
var datechange = require('datechange');
var now = new Date();
var timeStamp = datechange(now);
```


or

```
<script type="text/javascript" src='date.js'></script>
	<script type="text/javascript">
		var now = new Date();
		var timeStamp = datechange(1511350834583);
		alert(timeStamp)
	</script>
```



# License
[MIT](https://opensource.org/licenses/MIT)


