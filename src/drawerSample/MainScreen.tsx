import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DrawerContainer } from "./DrawerContainer";
import { useEscapeKey } from "./functions/use_esc_key";

export const DrawerMainScreen: React.FC = () => {
  const [drawerVisible, setdrawerVisible] = useState(false);

  return (
    <>
      <FlexDiv>
        <CustomButton onClick={() => setdrawerVisible(true)}>
          Open Drawer
        </CustomButton>
        <CustomButton>button1</CustomButton>
        <CustomButton>button1</CustomButton>
        <CustomButton>button1</CustomButton>
      </FlexDiv>
      {drawerVisible && (
        <DrawerContainer
          visible={drawerVisible}
          onClose={() => setdrawerVisible(false)}
          zIndex={200}
        >
          <TestContent onClose={() => setdrawerVisible(false)} />
        </DrawerContainer>
      )}
    </>
  );
};

type Props = {
  onClose: () => void;
};

const TestContent: React.FC<Props> = (props) => {
  const firstInputRef = useRef<HTMLButtonElement>(null);
  const lastInputRef = useRef<HTMLButtonElement>(null);

  const focusTrap = (event: KeyboardEvent) => {
    const firstElement = firstInputRef.current;
    const lastElement = lastInputRef.current;
    const isTab = event.key === "Tab";
    const isShift = event.shiftKey;
    const isFirstElement = document.activeElement === firstElement;
    const isLastElement = document.activeElement === lastElement;

    if (isTab && isShift && isFirstElement) {
      lastElement?.focus();
      event.preventDefault();
    } else if (isTab && !isShift && isLastElement) {
      firstElement?.focus();
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", focusTrap);
    firstInputRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", focusTrap);
    };
  }, []);

  useEscapeKey(props.onClose);

  return (
    <Component>
      <p>Drawer Test</p>
      <CustomButton ref={firstInputRef}>Drawer Button1</CustomButton>
      <CustomButton>Drawer Button2</CustomButton>
      <CustomButton ref={lastInputRef}>Drawer Button3</CustomButton>
    </Component>
  );
};

const FlexDiv = styled.div`
  display: flex;
  flex-flow: column;
`;

const Component = styled(FlexDiv)`
  width: 500px;
  height: 100vh;
  background-color: white;
  display: fle;
`;

const CustomButton = styled.button`
  width: 30px;
  background-color: #2175d6;
  border: 1px solid #2175d6;
  border-radius: 44px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  min-width: 248px;
  padding: 9px 32px;
  margin: 10px 10px;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff0000;
    background: #ff0000;
  }
`;