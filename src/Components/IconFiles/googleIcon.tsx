import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}
export function GoogleIcon({ width = 30, height = 30, color = "#FF5733"} : IconProps){
    return (
        <Svg width={width} height={height} viewBox="0 0 19 20">
            <Path fillRule="evenodd" clipRule="evenodd" d="M18.3536 10.2273C18.3536 9.51819 18.2948 8.83637 18.1856 8.18182H9.48041V12.05H14.4548C14.2405 13.3 13.5893 14.3591 12.6104 15.0682V17.5773H15.5976C17.3453 15.8364 18.3536 13.2727 18.3536 10.2273Z" fill="#4285F4"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M9.48048 20C11.9761 20 14.0683 19.1045 15.5976 17.5772L12.6105 15.0681C11.7828 15.6681 10.7241 16.0227 9.48048 16.0227C7.07311 16.0227 5.03546 14.2636 4.30863 11.9H1.22064V14.4909C2.74153 17.7591 5.86732 20 9.48048 20Z" fill="#34A853"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M4.30859 11.8999C4.12373 11.2999 4.01869 10.659 4.01869 9.99994C4.01869 9.34085 4.12373 8.69994 4.30859 8.09994V5.50903H1.2206C0.594602 6.85903 0.237488 8.38631 0.237488 9.99994C0.237488 11.6136 0.594602 13.1409 1.2206 14.4909L4.30859 11.8999Z" fill="#FBBC05"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M9.48048 3.97727C10.8375 3.97727 12.0559 4.48182 13.0138 5.47273L15.6649 2.60455C14.0641 0.990909 11.9719 0 9.48048 0C5.86732 0 2.74153 2.24091 1.22064 5.50909L4.30863 8.1C5.03546 5.73636 7.07311 3.97727 9.48048 3.97727Z" fill="#EA4335"/>
        </Svg>
    );
}

