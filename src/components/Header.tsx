import { Hash } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-primary rounded-full p-3 shadow-lg">
          <Hash className="text-white w-8 h-8" />
        </div>
        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
          Table of <span className="text-accent">9</span>
        </h1>
      </div>
      <p className="text-primary-light text-lg font-medium mt-1">
        Multiplication table — from 1 × 9 to 12 × 9
      </p>
    </div>
  );
}
