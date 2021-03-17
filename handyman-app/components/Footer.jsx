import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute w-screen bottom-0 pt-14 bg-blue-400">
      <div className="flex justify-center items-center text-center">
        <ul className="flex flex-row justify-center items-center mt-0.5 mb-10 mr-3 ml-0 space-x-10 text-lg">
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
      </div>
      <div className="flex justify-center items-center py-5 bg-blue-500">
        <p> Copyright © 2021 Next.js App. Designed by Anthony Carnero </p>
      </div>
    </footer>
  );
}
