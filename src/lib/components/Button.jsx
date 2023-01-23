/**
 * @author Markitanov Vadim
 * @since 23.01.2023
 */
import React from 'react';
import PropTypes from "prop-types";

const colors = {
    // light shades
    white: '#FFFFFF',
    snow: '#F9FAFC',
    darkSnow: '#EFF2F7',
    extraDarkSnow: '#E5E9F2',
    // dark tones
    lightSilver: '#CDD1D4',
    silver: '#747E89',
    extraSilver: '#3B4256',
    slate: '#3C4858',
    steel: '#273444',
    black: '#1F2D3D',
    // dark shades
    smoke: '#E0E6ED',
    darkSmoke: '#D3DCE6',
    extraDarkSmoke: '#C0CCDA',
    // blue shades
    lightBlue: '#85D7FF',
    blue: '#1FB6FF',
    darkBlue: '#009EEB',
    // purple shades
    lightPurple: '#A389F4',
    purple: '#7E5BEF',
    darkPurple: '#592DEA',
    // pink shades
    lightPink: '#FF7CE5',
    pink: '#FF49DB',
    darkPink: '#FF16D1',
    // orange shades
    lightOrange: '#FF9E7C',
    orange: '#FF7849',
    darkOrange: '#FF5216',
    // green shades
    lightGreen: '#29EB7F',
    green: '#13CE66',
    darkGreen: '#0F9F4F',

    // ui colors
    info: '#1FB6FF',
    success: '#13CE66',
    danger: '#FF4949',
    warning: '#FFC82C',

    //UI GOV colors
    bg: '#F4F7FB',
    grayD: '#3B4256',
    mainBlue: '#4384C5',
    mainGray: '#F4F7FB',
    mainWhite: '#FFFFFF',

    elementBlue: '#4384C5',
    elementBlueHover: '#3470B7',

    yellow: '#FEDA5A',
    yellowHover: '#fecf27',

    blackText: '#3B4256',

    colGray: '#747E89',
    colGrayD: '#3B4256',
    colGrayL: '#C7CCD1'

};

const buttonColor = {
    disabled: {
        hoverBackground: colors.colGrayL,
        background: colors.colGrayL,
        color: colors.black,
        borderColor: "1px solid transparent",
        svgFill: ""
    },
    default: {
        hoverBackground: colors.yellowHover,
        background: colors.yellow,
        color: colors.black,
        borderColor: "1px solid transparent",
        svgFill: ""
    },
    opaqWhite: {
        hoverBackground: "rgba(255, 255, 255, 0.2)",
        background: "none",
        color: colors.white,
        borderColor: colors.white,
        svgFill: colors.white
    },
    blue: {
        hoverBackground: colors.elementBlueHover,
        background: colors.elementBlue,
        color: colors.white,
        svgFill: colors.white
    },
    opaqDark: {
        hoverBackground: "none",
        background: "none",
        color: colors.colGray,
        borderColor: colors.colGrayD,
        hoverColor: "rgba(59, 66, 86, 0.7)",
        hoverBorderColor: "rgba(116, 126, 137, 0.7)",
        svgFill: colors.black
    },
    simple: {
        borderColor: 'transparent',
        hoverBorderColor: colors.colGrayD,
        background: 'none',
        color: colors.colGrayD
    }
};

const Button = (props) => {
    return (
        <div className={'btn'} style={buttonColor[props.color]} onClick={props.onClick}>
            {props.text}
        </div>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;