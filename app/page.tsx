import Image from "next/image";

const metadata = {
  title: "Home Page",
  description: "Welcome to the Home Page",
};

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="space-y-6 py-10">
      <h1 className="text-4xl font-bold">
        Welcome to My Site 👋
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl">
        Building modern web experiences using Next.js, Tailwind CSS, and ShadCN UI.
      </p>

      <Button>Get Started</Button>
    </section>
  )
}
