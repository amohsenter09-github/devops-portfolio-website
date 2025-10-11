export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Amr Fathy • infra-ai-art.delivery
      </div>
    </footer>
  );
}