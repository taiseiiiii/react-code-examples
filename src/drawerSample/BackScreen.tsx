import styled from "styled-components";

type Props = {
  onClick: () => void;
  zIndex: number;
};

export const BackScreen: React.FC<Props> = (props) => {
  return <Component onClick={props.onClick} zIndex={props.zIndex}></Component>;
};

const Component = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => props.zIndex};
`;