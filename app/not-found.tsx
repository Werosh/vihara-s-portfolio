import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F17] flex flex-col items-center justify-center text-center p-6 text-slate-100">
      <h2 className="text-4xl font-headline-display tracking-wider mb-2">404 - Page Not Found</h2>
      <p className="text-sm text-slate-400 mb-6">The requested page does not exist.</p>
      <Link
        href="/"
        className="px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
