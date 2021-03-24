import Container from "../components/Container";
import Image from "next/image";

export default function Service() {
  return (
    <Container title="Service Page">
      <div className="my-10 w-3/4">
        <h1 className="text-4xl  font-bold text-center"> My Services</h1>
        <div className="flex flex-row flex-wrap justify-around my-10 ">
          <div className="border border-gray-100 shadow rounded p-5">
            <Image
              src="/moving.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md"
            />
            <p className="text-xl font-medium text-white bg-yellow-800 mt-5 text-center rounded">
              Moving
            </p>
          </div>

          <div className="border border-gray-100 shadow rounded p-5">
            <Image
              src="/painting.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className=" rounded-md "
            />
            <p className="text-xl font-medium text-white bg-yellow-900 mt-5 text-center rounded">
              Painting
            </p>
          </div>

          <div className="border border-gray-100 shadow rounded p-5">
            <Image
              src="/roofing.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md "
            />
            <p className="text-xl font-medium text-white bg-black mt-5 text-center rounded">
              Roofing
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-around my-10 ">
          <div className="border border-gray-100 shadow rounded p-5">
            <Image
              src="/cleaning.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md "
            />
            <p className="text-xl font-medium text-white bg-yellow-800 mt-5 text-center rounded">
              Cleaning
            </p>
          </div>

          <div className="border border-gray-100 shadow rounded p-5">
            <Image
              src="/assembly.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md "
            />
            <p className="text-xl font-medium text-white bg-yellow-900 mt-5 text-center rounded">
              Furniture Assembly
            </p>
          </div>

          <div className="border border-gray-100 shadow rounded p-5">
            <Image
              src="/yardwork.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md "
            />
            <p className="text-xl font-medium text-white bg-black mt-5 text-center rounded">
              Yard Work
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
