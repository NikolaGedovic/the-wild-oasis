import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${({ $orientation = "vertical" }) =>
    $orientation === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${({ $orientation = "vertical" }) =>
    $orientation === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

export default Row;
