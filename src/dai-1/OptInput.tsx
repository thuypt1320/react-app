import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { Button, Input, InputProps } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/layout';

interface OptInputProps {
  onChange: (value: string) => void;
}

// eslint-disable-next-line react/display-name
const InputItem = React.forwardRef((props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <Input
      maxWidth="10_c"
      marginRight={2}
      maxLength={1}
      padding={0}
      textAlign={'center'}
      placeholder={'-'}
      ref={ref}
      {...props}
    />
  );
});

function OptInput(props: OptInputProps) {
  const { onChange } = props;
  const defaultCode = { first: '', second: '', third: '', forth: '', fifth: '', sixth: '' };
  const [code, setCode] = useState(defaultCode);

  // const refList =Array(6).fill().map(() => useRef<HTMLInputElement>(null));
  const refList = Array(6).map(() => useRef<HTMLInputElement>(null));

  const handleChange = (val: string, idx: string) => {
    const updateCode = { ...code, [idx]: val };
    setCode(updateCode);
    onChange && onChange(Object.values(updateCode).join(''));
  };

  const onClear = () => {
    setCode(defaultCode);
    refList[0].current?.focus();
  };

  useEffect(() => refList[0].current?.focus(), []);

  useEffect(() => {
    if (code.first) refList[1].current?.focus();
    if (code.second) refList[2].current?.focus();
    if (code.third) refList[3].current?.focus();
    if (code.forth) refList[4].current?.focus();
    if (code.fifth) refList[5].current?.focus();
  }, [code]);

  return (
    <Flex>
      {Object.keys(code).map((item, index) => (
        <InputItem
          key={index}
          id={item}
          value={Object.values(code)[index]}
          onChange={(e) => {
            handleChange(e.target.value, item);
          }}
          ref={refList[index]}
        />
      ))}
      <Flex alignItems={'center'}>
        <Button
          onClick={onClear}
          background={'inherit'}
          _hover={{ background: 'inherit' }}
          borderRadius={'50%'}
          borderWidth={'0.5px'}
          borderColor={'gray.400'}
          height={'5_c'}
          minWidth={'5_c'}
          justifyContent={'center'}
          alignItems={'center'}
          padding={0}
          color={'gray.400'}
        >
          –
        </Button>
      </Flex>
    </Flex>
  );
}

export default OptInput;
