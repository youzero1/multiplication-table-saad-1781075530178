import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TableOfNinePage from '@/pages/TableOfNinePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TableOfNinePage />} />
        <Route path="*" element={<TableOfNinePage />} />
      </Routes>
    </BrowserRouter>
  );
}
