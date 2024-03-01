import { ButtonProps, } from "@mui/material";
import classNames from "classnames";
import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface SharedButtonProps extends ButtonProps {
  wrapperClassName?: string;
  isLoading?: boolean;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const SharedButton: FC<SharedButtonProps> = ({
  className,
  wrapperClassName,
  disabled,
  isLoading,
  children,
  ...props
}) => {
  return (
    <div
      className={classNames(styles["btn-wrapper"], wrapperClassName, {
        [styles["disabled"]]: disabled,
      })}
    >
      <button
        {...props}
        className={classNames(styles["button"], className, {
          [styles["disabled"]]: disabled,
        })}
        disabled={disabled}
      >
        {/* {isLoading && <Loader className={styles["loader"]} absolute />} */}
        <div
          className={classNames(styles["content"], {
            [styles["loading"]]: isLoading,
          })}
        >
          {children}
        </div>
      </button>
    </div>
  );
};

