type ButtonProps = {
  onClick: () => void;
  type: 1 | 2 | 3 | 4;
  label: string;
};

export default function Button({ onClick, type, label }: ButtonProps) {
  if (type === 1) {
    return (
      <div
        className="text-white bg-xBlue-200 font-bold inline-block p-2 px-16 rounded-full cursor-pointer"
        onClick={onClick}
      >
        {label}
      </div>
    );
  }

  if (type === 3) {
    return (
      <button
        onClick={onClick}
        className="bg-slate-200 py-1 rounded-full  text-black font-bold cursor-pointer"
      >
        {label}
      </button>
    );
  }

  if (type === 4) {
    return (
      <div
        className="text-white bg-xBlue-200 font-bold inline-block p-1 px-10 rounded-full cursor-pointer"
        onClick={onClick}
      >
        {label}
      </div>
    );
  }

  return (
    <div
      className="border-slate-300 font-bold bg-slate-900 text-xBlue-200 border inline-block p-2 px-16 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );
}
