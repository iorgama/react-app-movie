import React from 'react';
import { FC, ButtonHTMLAttributes } from 'react';
import {ButtonForm, IconButton} from './style';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title ?: string,
  border ?: string,
  color ?: string,
  fontColor ?: string,
  padding ?: string, 
  radius ?: string
  showIconButton ?: boolean
  onClick ?: () => void
}
export const Button : FC<ButtonProps> = ({ title, border = "none", color, fontColor, radius, padding, showIconButton = false, onClick }) => {
  return <ButtonForm 
    border = {border}
    color = {color}
    fontColor = {fontColor}
    radius = {radius}
    padding={padding}
    onClick={onClick}>
      {showIconButton && <IconButton />} {title}
    </ButtonForm>;
};