import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  zIndex: number;
};

export const DrawerContent: React.FC<Props> = (props) => {
  return <Component $zIndex={props.zIndex}>{props.children}</Component>;
};

const Component = styled.div<{ $zIndex: number }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  z-index: ${(props) => props.$zIndex};
`;