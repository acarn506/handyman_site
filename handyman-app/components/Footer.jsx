import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute w-screen bottom-0 pt-14 bg-blue-400">
      <div className="flex justify-around items-center text-center">
        <ul className="flex flex-row items-center mt-0.5 mb-10 mr-3 ml-0 space-x-10  px-10">
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

        <ul className="flex flex-row space-x-10 items-center text-center mt-0.5 mb-10 mr-3 ml-0 px-10 ">
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
      <div className="flex justify-center items-center py-5 bg-blue-500">
        <p> Copyright © 2021 Next.js App. Designed by Anthony Carnero </p>
      </div>
    </footer>
  );
}
