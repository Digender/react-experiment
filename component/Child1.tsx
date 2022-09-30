import * as React from 'react';

export default function Child1(prop: any) {
  React.useEffect(() => {
    console.log('rendered child 1');
  });

  const child1Click = () => {
    alert('Clicked Child 1 Btn');
  };

  const callSiblingClick = () => {};

  return (
    <div>
      <div>Child 1</div>
      <button onClick={() => child1Click()}>Click Me 1</button>
    </div>
  );
}
