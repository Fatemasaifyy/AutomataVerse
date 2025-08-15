import React from 'react';

export type ControlPanelProps = {
  children?: React.ReactNode;
  className?: string;
  dataTestId?: string;
  wrapperElement?: keyof JSX.IntrinsicElements;
  renderCustomControls?: () => React.ReactNode;
  renderSelectedNodeInfo?: () => React.ReactNode;
  renderValidationResult?: () => React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const ControlPanel: React.FC<ControlPanelProps> = ({
  children,
  className,
  dataTestId,
  wrapperElement: Wrapper = 'div',
  renderCustomControls,
  renderSelectedNodeInfo,
  renderValidationResult,
  ...rest
}) => {
  return (
    <Wrapper
      className={className ?? 'control-panel'}
      data-testid={dataTestId ?? 'control-panel'}
      {...rest}
    >
      <div className="control-panel__sections">
        <section className="control-panel__custom">
          {renderCustomControls ? renderCustomControls() : children}
        </section>
        <section className="control-panel__selected">
          {renderSelectedNodeInfo?.()}
        </section>
        <section className="control-panel__validation">
          {renderValidationResult?.()}
        </section>
      </div>
    </Wrapper>
  );
};

export default ControlPanel;