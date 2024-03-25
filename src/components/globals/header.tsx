import Link from "next/link";
import Logo from "./logo";
export default function Header() {
  return (
    <header className="p-4 border-input border-b">
      <Link href={"/"}>
        <Logo />
      </Link>
    </header>
  );
}
