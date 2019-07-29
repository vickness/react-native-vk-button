import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

class StyleButton extends React.PureComponent {

    render() {
        let { type, radius, borderWidth, fontSize, color, textColor, viewStyle, textStyle, ...others } = this.props;
        switch (type) {
            case 'text':
                textStyle = {
                    color: color,
                    fontSize: fontSize,
                    ...textStyle
                };
                break;
            case 'primary':
                viewStyle = {
                    borderRadius: radius,
                    backgroundColor: color,
                    padding: 5,
                    ...viewStyle
                };
                textStyle = {
                    color: textColor ? textColor : 'white',
                    fontSize: fontSize,
                    ...textStyle
                };
                break;
            case 'line':
                viewStyle = {
                    borderBottomWidth: borderWidth,
                    borderBottomColor: color,
                    ...viewStyle
                };
                textStyle = {
                    color: color,
                    fontSize: fontSize,
                    ...textStyle
                };
                break;
            case 'border':
                viewStyle = {
                    borderRadius: radius,
                    borderWidth: borderWidth,
                    borderColor: color,
                    padding: 5,
                    ...viewStyle
                };
                textStyle = {
                    color: textColor ? textColor : color,
                    fontSize: fontSize,
                    ...textStyle
                };
                break;
        }
        const props = { viewStyle, textStyle, ...others };
        return <Button {...props}/>
    }
}

StyleButton.defaultProps = {
    type: 'text',
    color: '#888',
    radius: 5,
    borderWidth: 1,
    fontSize: 14,
};

StyleButton.propTypes = {
    /** 按钮风格类型*/
    type: PropTypes.oneOf(['text', 'primary', 'line', 'border']),
    /** 风格颜色*/
    color: PropTypes.string,
    /** 边框半径*/
    radius: PropTypes.number,
    /** 边框宽度*/
    borderWidth: PropTypes.number,
    /** 字体大小*/
    fontSize: PropTypes.number,
    /** 文字颜色*/
    textColor: PropTypes.string,
    /** 背景风格*/
    viewStyle: PropTypes.object,
    /** 按钮文字/组件*/
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** 文字风格*/
    textStyle: PropTypes.object,
    /** Button的所有属性*/
    ...Button.propTypes,
};

export default StyleButton;
