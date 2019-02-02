# react-native-vk-button

A React Native button component .

<p align="center">
<img src="https://github.com/vickness/react-native-vk-button/blob/master/screenshot/image1.png" width="400">
<img src="https://github.com/vickness/react-native-vk-button/blob/master/screenshot/image2.png" width="400">
</p>

## Install

Install the package:

```bash
$ npm i react-native-vk-button --save
or yarn add react-native-vk-button
```

Import the ``Button`` component:

```javascript
import Button from 'react-native-vk-button'
```

## Usage

```javascript
//文字按钮
<Button text={"登录按钮"} />

//下划线按钮
<Button text={"忘记密码?"} viewStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}} />

//圆角按钮
<Button text={"圆角按钮"} viewStyle={{borderRadius: 10, borderWidth: 2, borderColor: 'gray', width: 200, height: 50}} />

//图片按钮，图片位置['left', 'right', 'top', 'bottom']
<Button text={"图片按钮"} image={require("./src/icon-test.png")} imagePosition={'left'}/>

//多组件按钮
<Button text={<View><Text>{'商品名称'}</Text><Text>{'商品描述：这是一个商品'}</Text></View>} image={require("./src/icon-test.png")} imagePosition={'left'}/>

//网络图片组件
<Button text={"网络图片按钮"} image={<WebImage source={"http://www.baidu.com"}/>} imagePosition={'left'}/>
```

# License

MIT
