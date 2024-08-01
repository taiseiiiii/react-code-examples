import { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { BackScreen } from "./BackScreen";
import { DrawerContent } from "./DrawerContent";

type Props = {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
  zIndex: number;
};

export const DrawerContainer: React.FC<Props> = (props) => {
  const backScreenZindex = useMemo(() => {
    return props.zIndex - 1;
  }, [props.zIndex]);

  return props.visible ? (
    <Component>
      <DrawerContent zIndex={props.zIndex}>{props.children}</DrawerContent>
      <BackScreen
        onClick={props.onClose}
        zIndex={backScreenZindex}
      ></BackScreen>
    </Component>
  ) : (
    <></>
  );
};

const Component = styled.div`
  position: fixed;
`;