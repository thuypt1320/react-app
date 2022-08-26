import React from 'react';

function WindowSelectionChange() {
  if (typeof window !== 'undefined') {
    const id_div = window.document.getElementById('id_div');
    const selection = window.document.getSelection();

    if (id_div && selection) {
      id_div.style.height = '50px';
      id_div.style.width = '100%';
      id_div.style.backgroundColor = 'lightblue';
      id_div.style.color = 'gray';

      window.document.onselectionchange = function () {
        id_div.innerHTML = selection.toString();
      };
    }
  }

  return (
    <div>
      <h4>[globaleventhandle:] onselectionchange</h4>
      <p>Try to select text</p>
      <div id={'id_div'} />
    </div>
  );
}

export default WindowSelectionChange;
