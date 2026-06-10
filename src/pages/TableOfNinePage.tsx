import MultiplicationTable from '@/components/MultiplicationTable';
import Header from '@/components/Header';

export default function TableOfNinePage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center py-12 px-4">
      <Header />
      <MultiplicationTable number={9} />
    </div>
  );
}
