export interface SharedUiProps {
  label: string;
}

export function SharedUi(props: SharedUiProps) {
  return (
    <div>
      <h1 className="p-4 text-gray-50 text-sm bg-blue-400">{props.label}</h1>
    </div>
  );
}

export default SharedUi;
