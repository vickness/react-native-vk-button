/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text, SafeAreaView} from 'react-native';
import Button from "./lib/src";

const btnImage = require("./src/icon-test.png");

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
              <View style={styles.container}>

                  <Button
                      text={"登录按钮"}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"忘记密码?"}
                      viewStyle={styles.bottomLineBtn}
                      onPress={()=>{}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"登录按钮"}
                      viewStyle={styles.greenBtn}
                      //textStyle={{backgroundColor: 'yellow'}}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"登录按钮"}
                      viewStyle={styles.greenRoundBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"登录按钮"}
                      viewStyle={styles.borderBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"图片在上"}
                      viewStyle={{width: 200, height: 200, backgroundColor: 'gray'}}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      image={btnImage}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"图片在上"}
                      viewStyle={styles.imageBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      image={btnImage}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"图片在下"}
                      viewStyle={styles.imageBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      image={btnImage}
                      imagePosition={'bottom'}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"图片在左"}
                      viewStyle={styles.imageBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      image={btnImage}
                      imagePosition={'left'}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={"图片在右"}
                      viewStyle={styles.imageBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      image={btnImage}
                      imagePosition={'right'}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      //text={"图片按钮"}
                      viewStyle={styles.imageBtn}
                      //textStyle={{backgroundColor: 'yellow', fontSize: 18}}
                      image={btnImage}
                      imagePosition={'right'}
                      onPress={()=>{alert("点击")}}
                  />
                  <View style={{height: 10}}/>

                  <Button
                      text={
                          <View>
                              <Text>{'商品名称'}</Text>
                              <Text>{'商品描述：这是一个商品'}</Text>
                          </View>
                      }
                      viewStyle={styles.imageBtn}
                      image={btnImage}
                      imagePosition={'left'}
                  />
                  <View style={{height: 10}}/>

                  {/*<Button*/}
                  {/*text={*/}
                  {/*<View>*/}
                  {/*<Text>{'网络图片'}</Text>*/}
                  {/*<Text>{'加载一个网络图片组件'}</Text>*/}
                  {/*</View>*/}
                  {/*}*/}
                  {/*// image={*/}
                  {/*//     <WebImage/>*/}
                  {/*//*/}
                  {/*// }*/}
                  {/*imagePosition={'left'}*/}
                  {/*viewStyle={styles.imageBtn}*/}
                  {/*/>*/}

              </View>
          </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  greenBtn: {
    backgroundColor: 'gray',
    width: 100,
    height: 30
  },
  greenRoundBtn: {
    backgroundColor: 'gray',
    borderRadius: 5,
    width: 150,
    height: 50
  },
  imageBtn: {
    backgroundColor: 'gray',
  },
  borderBtn: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    width: 200,
    height: 50
  },
    bottomLineBtn: {
      borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
});
