import styled from "styled-components";

const largeSize = 40;

export const ContentTitle = styled.h1`
    font-size: ${largeSize}px;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Description = styled.p`
    display: flex;
    padding: 10px;
    justify-content: center;

    a {
        padding-left: 5px;
        padding-right: 5px;
        text-decoration: none;
        color: darkcyan;
        &:hover {
            color: cyan;
        }
    }
`;