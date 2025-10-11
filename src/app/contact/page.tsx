import Container from "@/components/Container";

export default function Contact() {
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Contact</h1>
      <form className="mt-6 max-w-xl space-y-4" action="https://formspree.io/f/your-id" method="POST">
        <input className="w-full rounded border p-3" name="name" placeholder="Name" required />
        <input className="w-full rounded border p-3" type="email" name="email" placeholder="Email" required />
        <textarea className="w-full rounded border p-3" name="message" placeholder="How can I help?" required />
        <button className="rounded bg-black px-4 py-2 text-white">Send</button>
      </form>
    </Container>
  );
}
