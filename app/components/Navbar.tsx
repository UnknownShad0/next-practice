import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 bg-gray-100 text-black">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
