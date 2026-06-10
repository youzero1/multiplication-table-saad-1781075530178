import { useState } from 'react';
import clsx from 'clsx';
import TableRow from '@/components/TableRow';

type MultiplicationTableProps = {
  number: number;
};

export default function MultiplicationTable({ number }: MultiplicationTableProps) {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const rows = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-md">
      <div
        className={clsx(
          'rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-light'
        )}
      >
        {/* Table Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <span className="text-white text-xl font-bold tracking-wide">Multiplier</span>
          <span className="text-accent-light text-xl font-bold">×</span>
          <span className="text-white text-xl font-bold tracking-wide">Result</span>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-primary-light/30">
          {rows.map((multiplier) => (
            <TableRow
              key={multiplier}
              multiplier={multiplier}
              number={number}
              isHighlighted={highlighted === multiplier}
              onHover={setHighlighted}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="bg-primary-dark px-6 py-3 text-center">
          <span className="text-accent-light text-sm font-semibold tracking-widest uppercase">
            Multiplication Table of {number}
          </span>
        </div>
      </div>

      {/* Pattern Note */}
      <div className="mt-6 bg-white rounded-2xl shadow-md p-5 border border-primary-light/40">
        <h2 className="text-primary font-bold text-lg mb-2">✨ Fun Fact about 9</h2>
        <ul className="text-primary-dark text-sm space-y-1 list-disc list-inside">
          <li>The digits of any multiple of 9 always add up to 9 (or a multiple of 9).</li>
          <li>9 × 1 = 9 → 9</li>
          <li>9 × 5 = 45 → 4 + 5 = 9</li>
          <li>9 × 12 = 108 → 1 + 0 + 8 = 9</li>
        </ul>
      </div>
    </div>
  );
}
