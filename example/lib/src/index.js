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
        fontSize: 16,
    }
});


class Button extends React.PureComponent {

    render() {

        let { text, image, imagePosition, viewStyle, textStyle, imageStyle, space, onPress } = this.props;

        //如果传入的不是组件，包装为Text
        if (text && !React.isValidElement(text)) {
            text = <Text style={StyleSheet.flatten([styles.text, textStyle])}>{text}</Text>;
        }

        //如果传入的不是图片，包装为Image
        if (image && !React.isValidElement(image)) {
            image = <Image style={imageStyle} source={image}/>;
        }

        //文字图片间隔
        let spaceView = (text && image) ? <View style={{height: space, width: space}}/> : null;

        let contentView = null;
        switch (imagePosition) {
            case 'left':
                contentView = <View style={StyleSheet.flatten([styles.row, viewStyle])}>{image}{spaceView}{text}</View>;
                break;
            case 'right':
                contentView = <View style={StyleSheet.flatten([styles.row, viewStyle])}>{text}{spaceView}{image}</View>;
                break;
            case 'top':
                contentView = <View style={StyleSheet.flatten([styles.column, viewStyle])}>{image}{spaceView}{text}</View>;
                break;
            case 'bottom':
                contentView = <View style={StyleSheet.flatten([styles.column, viewStyle])}>{text}{spaceView}{image}</View>;
                break;
        }

        return <TouchableOpacity disabled={!onPress} onPress={onPress}>{contentView}</TouchableOpacity>
    }
}


Button.defaultProps = {
    /** 默认图片在上*/
    imagePosition: 'top',
    /** 默认8像素*/
    space: 8,
};

Button.propTypes = {
    /** 按钮文字/组件*/
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** 按钮图片/组件*/
    image: PropTypes.oneOfType([PropTypes.element, PropTypes.number]),
    /** 图片位置*/
    imagePosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
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
