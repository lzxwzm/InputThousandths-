# InputThousandths-
vue--输入千分位字符能够包含两位小数
## 1.引入index.js文件
## 2.在oninput方法调用时，加上千分位
@input =  getInputValue(inputVal)
inputVal => 输入框中的值
## 3.在调用后台提交接口时，去掉千分位
inputVal => 输入框中的值
inputVal = delcommafy(inputVal)
