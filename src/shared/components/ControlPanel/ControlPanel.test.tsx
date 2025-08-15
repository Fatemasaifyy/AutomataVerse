import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ControlPanel from '../ControlPanel';

test('ControlPanel snapshot (compatibility)', () => {
  const { container } = render(
    <ControlPanel className="control-panel old-class" dataTestId="control-panel">
      <div>Custom controls</div>
    </ControlPanel>
  );

  expect(container.firstChild).toMatchSnapshot();
});