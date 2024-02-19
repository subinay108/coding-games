import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Link href="./game">Game</Link>
    </main>
  );
}
