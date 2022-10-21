import * as React from "react";
import styled from '@emotion/styled'
import {ButtonStyledWorkingInner} from "vite-project/src/ButtonWorking";

export const Button: React.FC<{ children: any }> = ({ children, ...props }) => {
    return (
        <ButtonStyled {...props}>
            {children}
            <ButtonStyledWorkingInner>inner</ButtonStyledWorkingInner>
        </ButtonStyled>
    );
};

export const ButtonStyledInner = styled.span({
    backgroundColor: "blue",
})

const ButtonStyled = styled.button({
    padding: "32px",
    backgroundColor: "hotpink",
    fontSize: "24px",
    borderRadius: "4px",
    color: "black",
    fontWeight: "bold",
    "&:hover": { color: "white" },

    [ButtonStyledInner.toString()]: {
        background: 'red'
    }
})

