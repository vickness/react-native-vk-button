import React from "react";
import {
    ViewPropTypes,
} from "react-native";
import PropTypes from 'prop-types';
import Button from "./Button";

class StyleButton extends React.PureComponent {

    render() {
        let { type, radius, color, viewStyle, textStyle, ...others } = this.props;
        switch (type) {
            case 'default':
                viewStyle = {
                    borderRadius: radius,
                    borderWidth: 1.4,
                    borderColor: color,
                    padding: 5,
                    ...viewStyle
                };
                textStyle = {
                    color: color,
                    ...textStyle
                };
                break;
            case 'primary':
                viewStyle = {
                    borderRadius: radius,
                    backgroundColor: color,
                    borderWidth: 1.4,
                    borderColor: color,
                    padding: 5,
                    ...viewStyle
                };
                textStyle = {
                    color: 'white',
                    ...textStyle
                };
                break;
            case 'line':
                viewStyle = {
                    borderBottomWidth: 1.2,
                    borderBottomColor: color,
                    ...viewStyle
                };
                textStyle = {
                    color: color,
                    ...textStyle
                };
                break;
        }
        const props = { viewStyle, textStyle, ...others };
        return <Button {...props}/>
    }
}

StyleButton.defaultProps = {
    type: 'default',
    color: '#888',
    radius: 5
};

StyleButton.propTypes = {
    /** 按钮风格类型*/
    type: PropTypes.oneOf(['default', 'primary', 'line']),
    /** 风格颜色*/
    color: PropTypes.string,
    /** 边框半径*/
    radius: PropTypes.number,
    /** 背景风格*/
    viewStyle: ViewPropTypes.style,
    /** 按钮文字/组件*/
    text: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    /** 文字风格*/
    textStyle: PropTypes.object,

    ...Button.propTypes,
};

export default StyleButton;
