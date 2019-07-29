import React from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    ViewPropTypes,
} from "react-native";
import PropTypes from 'prop-types';

class Button extends React.PureComponent {

    render() {

        let { text, image, imagePosition, viewStyle, textStyle, imageStyle, space, onPress } = this.props;

        if (text && !React.isValidElement(text)) {
            text = <Text style={StyleSheet.flatten([styles.text, textStyle])}>{text}</Text>;
        }

        if (image && !React.isValidElement(image)) {
            image = <Image style={imageStyle} source={image}/>;
        }

        let spaceView = (text && image) ? <View style={{height: space, width: space}}/> : null;

        switch (imagePosition) {
            case 'left':
                return <TouchableOpacity disabled={!onPress} onPress={onPress} style={StyleSheet.flatten([styles.row, viewStyle])}>{image}{spaceView}{text}</TouchableOpacity>;
            case 'right':
                return <TouchableOpacity disabled={!onPress} onPress={onPress} style={StyleSheet.flatten([styles.row, viewStyle])}>{text}{spaceView}{image}</TouchableOpacity>;
            case 'top':
                return <TouchableOpacity disabled={!onPress} onPress={onPress} style={StyleSheet.flatten([styles.column, viewStyle])}>{image}{spaceView}{text}</TouchableOpacity>;
            case 'bottom':
                return <TouchableOpacity disabled={!onPress} onPress={onPress} style={StyleSheet.flatten([styles.column, viewStyle])}>{text}{spaceView}{image}</TouchableOpacity>;
            case 'center':
                return <TouchableOpacity disabled={!onPress} onPress={onPress} style={viewStyle}>{image}<View style={styles.center}>{text}</View></TouchableOpacity>;
            default :
                return null;
        }
    }
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
    center: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent:'center',
    }
});

Button.defaultProps = {
    /** 默认图片在上*/
    imagePosition: 'top',
    /** 默认5像素*/
    space: 5,
};

Button.propTypes = {
    /** 按钮文字/组件*/
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** 按钮图片/组件*/
    image: PropTypes.oneOfType([PropTypes.element, PropTypes.number]),
    /** 图片位置*/
    imagePosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom', 'center']),
    /** 背景风格*/
    viewStyle: ViewPropTypes.style,
    /** 文字风格*/
    textStyle: PropTypes.object,
    /** 图片风格*/
    imageStyle: PropTypes.object,
    /** 文字和图片间距*/
    space: PropTypes.number,
    /** 点击事件，未实现则无点击效果*/
    onPress: PropTypes.func,
};

export default Button;
