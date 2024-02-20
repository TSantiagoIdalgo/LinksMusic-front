import * as React from 'react';

export interface IButton {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type: 'button' | 'submit' | 'reset'
    text: string
    style?: React.CSSProperties
}

export interface ILink extends IButton {
    navigate: stirng
    img: string
}