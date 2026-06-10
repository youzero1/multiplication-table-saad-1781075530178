import clsx from 'clsx';

type TableRowProps = {
  multiplier: number;
  number: number;
  isHighlighted: boolean;
  onHover: (val: number | null) => void;
};

export default function TableRow({ multiplier, number, isHighlighted, onHover }: TableRowProps) {
  const result = multiplier * number;

  return (
    <div
      className={clsx(
        'flex items-center justify-between px-6 py-4 cursor-pointer transition-all duration-200',
        isHighlighted
          ? 'bg-primary text-white scale-[1.01]'
          : multiplier % 2 === 0
          ? 'bg-white hover:bg-primary-light/10'
          : 'bg-bg hover:bg-primary-light/10'
      )}
      onMouseEnter={() => onHover(multiplier)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Left side: expression */}
      <div className="flex items-center gap-3">
        <span
          className={clsx(
            'w-9 h-9 flex items-center justify-center rounded-full text-lg font-bold shadow-sm',
            isHighlighted ? 'bg-white text-primary' : 'bg-primary text-white'
          )}
        >
          {multiplier}
        </span>
        <span
          className={clsx(
            'font-semibold text-lg',
            isHighlighted ? 'text-accent-light' : 'text-primary-light'
          )}
        >
          ×
        </span>
        <span
          className={clsx(
            'w-9 h-9 flex items-center justify-center rounded-full text-lg font-bold shadow-sm',
            isHighlighted ? 'bg-accent text-white' : 'bg-accent-light text-primary-dark'
          )}
        >
          {number}
        </span>
      </div>

      {/* Equals sign */}
      <span
        className={clsx(
          'text-2xl font-light',
          isHighlighted ? 'text-accent-light' : 'text-primary-light'
        )}
      >
        =
      </span>

      {/* Result */}
      <span
        className={clsx(
          'text-3xl font-extrabold min-w-[3rem] text-right',
          isHighlighted ? 'text-accent-light' : 'text-primary'
        )}
      >
        {result}
      </span>
    </div>
  );
}
