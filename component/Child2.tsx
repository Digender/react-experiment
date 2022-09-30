import * as React from 'react';

export default function Child1() {
  React.useEffect(() => {
    console.log('rendered child 2');
  });

  const child2Click = () => {
    alert('Clicked Child 2 Btn');
  };

  return (
    <div>
      <div>Child 2</div>
      <button onClick={() => child2Click()}>Click Me 2</button>
    </div>
  );
}
