declare module 'react-native-qrcode-svg' {
  import { Component } from 'react';
  import { ImageSourcePropType } from 'react-native';

  declare class QrCodeSvg extends Component<QrCodeSvg.IProps> {
    //
  }

  declare namespace QrCodeSvg {
    export interface IProps {
      value?: string;
      size?: number;
      color?: string;
      backgroundColor?: string;
      logo?: ImageSourcePropType;
      logoSize?: number;
      logoBackgroundColor?: string;
      logoMargin?: number;
      logoBorderRadius?: number;
      getRef?: () => any;
      ecl?: 'L' | 'M' | 'Q' | 'H';
    }
  }

  export = QrCodeSvg;
}
