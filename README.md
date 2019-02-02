# react-native-button

A React Native button component .

<p align="center">
<img src="https://github.com/vickness/react-native-vk-button/blob/master/screenshot/image1.png" width="400">
<img src="https://github.com/vickness/react-native-vk-button/blob/master/screenshot/image1.png2" width="400">
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
<Button style={{backgroundColor: 'red'}} textStyle={{fontSize: 18}}>
  Hello!
</Button>
```

```javascript
<Button style={{backgroundColor: 'blue'}}>
  <View style={styles.nestedViewStyle}>
    <Text style={styles.nestedTextStyle}>Nested views!</Text>
  </View>
</Button>
```
