import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="w-full flex flex-row justify-between top-0 pt-16 px-28 bg-gray-300">
      <Image
        src="/vercel.svg"
        alt="me"
        width="80"
        height="80"
        className="absolute px-14"
      />
      <div className="flex justify-center">
        <ul className="flex flex-row space-x-10 text-center">
          <li>
            <h2 className="text-lg font-bold">Contact</h2>
            <h3>510-682-1237</h3>
          </li>
          <li>
            <h2 className="text-lg font-bold">Email</h2>
            <h3>cesarmanon823@gmail.com</h3>
          </li>
        </ul>
      </div>
      <nav>
        <ul className=" flex flew-row space-x-10  pt-0">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <a>Services</a>
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
