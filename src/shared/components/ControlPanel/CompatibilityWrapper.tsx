import React from 'react';
import ControlPanel from './ControlPanel';

type Props = {
  legacyClassName?: string;
  legacyWrapperElement?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  dataTestId?: string;
};

export const CompatibilityWrapper: React.FC<Props> = ({
  legacyClassName = 'control-panel',
  legacyWrapperElement = 'div',
  children,
  dataTestId,
}) => {
  // Keeps the outer DOM and classnames that older pages/selectors expect,
  // while rendering the new ControlPanel inside.
  return (
    <div className={legacyClassName + '-root'}>
      <ControlPanel
        className={legacyClassName}
        wrapperElement={legacyWrapperElement}
        dataTestId={dataTestId}
      >
        {children}
      </ControlPanel>
    </div>
  );
};

export default CompatibilityWrapper;