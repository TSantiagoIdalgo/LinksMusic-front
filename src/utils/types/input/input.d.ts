import { UseFormRegisterReturn } from 'react-hook-form';
import * as React from 'react';

export interface InputProps {
  info: UseFormRegisterReturn<string>;
  name: string;
  type: 'text' | 'email' | 'password' | 'number';
  error?: string;
  style?: React.CSSProperties;
}