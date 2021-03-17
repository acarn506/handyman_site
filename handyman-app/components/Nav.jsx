import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="w-full flex justify-between items-center top-0 bg-gray-200">
      <Image src="/vercel.svg" alt="me" width="80" height="80" className="" />
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
