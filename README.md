# react-native-button

A React Native button component .

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-button/button.png" alt="Button component screenshot" width="400">
<img src="https://raw.githubusercontent.com/wiki/APSL/react-native-button/and.png" alt="Android Button component screenshot" width="400">
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
