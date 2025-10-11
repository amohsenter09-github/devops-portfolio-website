export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Amr Fathy • infra-ai-art.delivery
      </div>
    </footer>
  );
}