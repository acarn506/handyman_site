import Container from "../components/Container";

export default function Service() {
  return (
    <Container title="Service Page">
      <div className="my-10 w-3/4">
        <h1 className="text-4xl  font-bold text-center"> My Services</h1>
        <div className=" mt-8 text-center border border-gray-400 shadow rounded p-5 bg-black ">
          <p className="text-lg font-medium text-yellow-300">
            Pricing depends on the job, please contact me for further info and
            pricing details.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-around my-10 ">
          <div className="border border-gray-100 shadow rounded p-5">
            <img
              src="/public/moving.png"
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
            <img
              src="/public/painting.png"
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
            <img
              src="/public/roofing.png"
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
            <img
              src="/public/cleaning.png"
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
            <img
              src="/public/assembly.png"
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
            <img
              src="/public/yardwork.png"
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

        <div className="flex flex-row flex-wrap justify-evenly my-10 ">
          <div className="border border-gray-100 shadow rounded p-5">
            <img
              src="/public/fence.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md "
            />
            <p className="text-xl font-medium text-white bg-yellow-800 mt-5 text-center rounded">
              Fence/Gate Repair
            </p>
          </div>

          <div className="border border-gray-100 shadow rounded p-5">
            <img
              src="/public/dump.png"
              alt="Picture of Cesar the Handyman"
              width={200}
              height={200}
              className="rounded-md "
            />
            <p className="text-xl font-medium text-white bg-yellow-900 mt-5 text-center rounded">
              Dump Hauling
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
