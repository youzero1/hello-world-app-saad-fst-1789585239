import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 py-16">
      <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <span className="mb-6 block h-2 w-2 rounded-full bg-green-500" />
        <h1 className="text-4xl font-semibold tracking-tight text-green-700 sm:text-5xl md:text-6xl">
          Hello World
        </h1>
        <p className="mt-4 text-base text-green-700/70 sm:text-lg">
          A quiet little page, and nothing more.
        </p>
      </div>
    </main>
  );
}
