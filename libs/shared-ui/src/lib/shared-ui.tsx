import './shared-ui.module.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {
  return (
    <div className="text-gray-100 text-sm">
      <h1>Welcome to Shared Components my Friend!</h1>
    </div>
  );
}

export default SharedUi;
