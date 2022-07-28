import { Input as InputChakra, InputProps as InputChakraProps } from "@chakra-ui/react";
import React, {useRef, useState} from "react";
import { getTypography } from "@src/theme/typography";
import { forwardRef } from "@chakra-ui/system";
import {Flex} from "@chakra-ui/layout";
import {IconCalender} from "@src/components/atoms/icon";

export interface IInputDateProps extends InputChakraProps {}

export const InputDate = forwardRef<IInputDateProps, "input">((props, ref): JSX.Element => {
  const [type, setType] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex position={"relative"}
      onClick={() => inputRef?.current?.focus()}>
      <InputChakra
        ref={inputRef}
        {...getTypography("text-l")}
        _disabled={{
          bg: "surface-secondary",
        }}
        _placeholder={{ color: "text-quaternary" }}
        borderColor={"border-primary"}
        borderRadius={"4px"}
        color={"text-secondary"}
        errorBorderColor={"object-pink"}
        focusBorderColor="object-blue"
        minH={"48px"}
        pd={"12px"}
        type={"text"}
        onBlur={e => {
          e.target.type = "text";
          setType(e.target.type);
        }}
        onFocus={e => {
          e.target.type = "date";
          setType(e.target.type);
        }}
        {...props}
      />
      {(type === "" || type==="text") &&
      <Flex position={"absolute"} right={"sp-24"} top={"50%"} transform={"translateY(-50%)"}>
        <IconCalender/>
      </Flex>}
    </Flex>
  );
});
