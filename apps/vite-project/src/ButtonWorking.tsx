import * as React from "react";
import styled from '@emotion/styled'

export const ButtonWorking: React.FC<{ children: any }> = ({children, ...props}) => {
    return (
        <ButtonWorkingStyled {...props}>
            {children}
            <ButtonStyledWorkingInner>inner</ButtonStyledWorkingInner>
        </ButtonWorkingStyled>
    );
};

export const ButtonStyledWorkingInner = styled.span({
    backgroundColor: "blue",
})

const ButtonWorkingStyled = styled.button({
    padding: "32px",
    backgroundColor: "hotpink",
    fontSize: "24px",
    borderRadius: "4px",
    color: "black",
    fontWeight: "bold",
    "&:hover": {color: "white"},

    [ButtonStyledWorkingInner.toString()]: {
        background: 'red'
    }
})

