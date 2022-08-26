import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { ButtonBase, InputBase } from '@material-ui/core';
// import CustomBranckModal from "../../layouts/modal/CustomBranckModal";

InputRefs.propTypes = {
  open: PropTypes.bool,
  type: PropTypes.string,
  // onClose: PropTypes.func
};

const styles = {
  container: {
    maxWidth: 300,
    textAlign: 'center',
  },
  input: {
    borderBottom: '1px solid #000',
    marginRight: 30,
    maxWidth: 50,
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: '8px 20px',
    borderRadius: 8,
    color: '#fff',
  },
};

const InputRefs1 = (open) => {
  const [val1, setVal1] = useState();
  const [val2, setVal2] = useState();
  const [val3, setVal3] = useState();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleRefresh = () => {
    setVal1('');
    setVal2('');
    setVal3('');
  };

  useEffect(() => {
    open && ref1.current.focus();
    !open && handleRefresh();
  }, [open]);

  return (
    <Box style={styles.container}>
      <Box>
        <InputBase
          style={styles.input}
          value={val1}
          onChange={(e) => {
            setVal1(e.target.value);
            e.target.value.length === 2 && ref2.current.focus();
          }}
          disabled={val1?.length >= 2}
          inputRef={ref1}
        />
        <InputBase
          style={styles.input}
          value={val2}
          onChange={(e) => {
            setVal2(e.target.value);
            e.target.value.length === 2 && ref3.current.focus();
          }}
          disabled={val2?.length >= 2}
          inputRef={ref2}
        />
        <InputBase
          style={styles.input}
          value={val3}
          onChange={(e) => {
            setVal3(e.target.value);
            e.target.value.length === 2 && ref1.current.focus();
          }}
          disabled={val3?.length >= 2}
          inputRef={ref3}
        />
      </Box>
      <ButtonBase onClick={handleRefresh} style={styles.button}>
        Enter
      </ButtonBase>
    </Box>
  );
};

const InputRefs2 = () => {
  const [val, setVal] = useState();
  const ref = useRef(null);

  const handleOnCopy = () => {
    ref.current.select();
    document.execCommand('copy');
  };

  return (
    <Box style={styles.container}>
      <InputBase
        style={{ borderBottom: '1px solid #000' }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        inputRef={ref}
      />
      <ButtonBase onClick={handleOnCopy}>Copy</ButtonBase>
    </Box>
  );
};

function InputRefs(props) {
  const { /* open, onClose*/ open, type } = props;
  switch (type) {
  case 'focus':
    return <InputRefs1 open={open} />;
  case 'copy':
    return <InputRefs2 />;
  }
}

export default InputRefs;
