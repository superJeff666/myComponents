import React, {FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from "react";
import classnames from "classnames";

export type ButtonSize = 'lg' | 'sm';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  /** 设置Button的禁用*/
  disabled?: boolean;
  /** 设置Button的尺寸 */
  size?: ButtonSize;
  /** 设置Button的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
// 交叉类型
type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 
 * 这是我们的第一个button组件
 * ## Button header
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */

export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  //btn, btn-lg, btn-primary
  const classes = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType ==='link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
};

export default Button;
