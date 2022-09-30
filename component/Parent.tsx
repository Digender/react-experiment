import * as React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export default function Parent() {
  const commonHandler = React.useRef({});

  return (
    <div>
      <div>Parent</div>
      <Child1 ref={commonHandler} />
      <Child2 ref={commonHandler} />
    </div>
  );
}
