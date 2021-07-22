import Link from "next/link";


export default function Nav() {
  return (
    <header className="w-full h-36 flex flex-row justify-center space-x-56 items-center top-0 pt-2 bg-gray-200">
      <div className="absolute left-14 top-6 bg-black rounded-md">
        <img src="/public/handyman_logo.png" alt="me" width="100" height="100" />
      </div>

      <ul className="flex flex-row  items-start space-x-10 text-center ">
        <li>
          <h2 className="text-lg font-bold ">Contact</h2>
          <h3 className=" text-blue-500">510-682-1237</h3>
        </li>
        <li>
          <h2 className="text-lg font-bold ">Email</h2>
          <h3 className=" text-blue-500">cesarmanon823@gmail.com</h3>
        </li>
      </ul>

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
