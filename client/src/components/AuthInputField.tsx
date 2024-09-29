interface AuthInputFieldProps {
  labelHtmlFor: string;
  labelText: string;
  inputType: string;
  inputName: string;
  inputId: string;
  inputOnChangeFn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInputField({ labelHtmlFor, labelText, inputType, inputName, inputId, inputOnChangeFn }: AuthInputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={labelHtmlFor} className="text-sm font-bold">
        {labelText}
      </label>
      <input
        autoComplete="off"
        type={inputType}
        name={inputName}
        id={inputId}
        onChange={inputOnChangeFn}
        className="bg-gray-50 py-2 px-3 border border-gray-200 rounded-lg outline-none text-sm"
      />
    </div>
  );
}
