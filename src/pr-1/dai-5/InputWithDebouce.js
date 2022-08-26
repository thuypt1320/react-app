import React, { useState } from 'react';
import { useDebounce } from 'src/pr-1/dai-5/hooks/useDebounce';

function InputWithDebouce() {
  const [value, setValue] = useState();
  const debouncedValue = useDebounce(value, 300);
  const handleChange = (text) => {
    setValue(text);
  };
  return (
    <div style={{
      flex: 1,
      textAlign: "center",
      alignCenter: "center"
    }}>
      <input
        style={{display: "inline-block"}}
        placeholder={'insert text...'}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div>{debouncedValue}</div>
    </div>
  );
}

export default InputWithDebouce;
