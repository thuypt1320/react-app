export const handlePasteEvent = (defaultCode) => {
// Handle paste verify code
  if (typeof window !== "undefined") window.addEventListener("paste", (e) => {
    const clipboardText = e.clipboardData.getData('Text');
    let newCode = {};
    if (clipboardText) {
      const keys = Object.keys(defaultCode);
      if (keys) {
        keys.map((key, index) => {
          newCode = {...newCode, [key]: clipboardText[index]};
        });
        return newCode;
      }
    }
  }
  );
};
