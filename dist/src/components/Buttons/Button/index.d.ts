import { ButtonProps } from "@mui/material";
import React, { FC } from "react";
export interface SharedButtonProps extends ButtonProps {
    wrapperClassName?: string;
    isLoading?: boolean;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const SharedButton: FC<SharedButtonProps>;
//# sourceMappingURL=index.d.ts.map