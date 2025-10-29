export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Amr Fathy — infra-ai-art.delivery
        </p>
      </div>
    </footer>
  );
}
