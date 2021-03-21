import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute w-screen bottom-0 pt-10 bg-gray-400">
      <div className="flex justify-around items-center text-center">
        <ul className="flex flex-col items-center mt-0.5 mb-10 mr-3 ml-0 space-y-5  ">
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

        <ul className="flex flex-col space-y-5 items-center text-center mt-0.5 mb-10 mr-0 ml-5 ">
          <li>
            <h2 className="text-lg font-bold">Contact</h2>
            <h3 className="text-white text-lg font-light">510-682-1237</h3>
          </li>
          <li>
            <h2 className="text-lg font-bold">Email</h2>
            <h3 className="text-white text-lg font-light">
              cesarmanon823@gmail.com
            </h3>
          </li>
        </ul>

        <ul className="items-center text-center mt-0.5 mb-10 mr-0 ml-3 ">
          <li>
            <p className="text-lg font-medium text-red-900">Hablamos Español</p>
          </li>
          <li>
            <p className="text-lg font-medium text-red-900">{"& English"}</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center py-5 bg-black">
        <p className="text-white text-lg p-2 font-light">
          Cesar Manon's Handyman Service, God Bless
        </p>
      </div>
    </footer>
  );
}
