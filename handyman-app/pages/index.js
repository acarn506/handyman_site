import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="my-10">
        <h1 className="text-5xl font-bold">Handyman Perferred Company</h1>
      </div>

      <section>
        <h2 className="text-center text-4xl  text-blue-600 my-5 border-b-2 border-gray-400">
          Service Locations
        </h2>
        <ul className=" flex flex-row space-x-10 list-disc">
          <li className="text-xl">Alameda County</li>
          <li className="text-xl">Contra Costa County</li>
        </ul>
      </section>

      <section className="flex flex-row mt-16 mb-10">
        <div className="mx-10 text-center ">
          <p className="mb-4 text-lg font-medium border-b-2 border-blue-200">
            Pipe Replacement
          </p>
          <img
            src="/public/IMG_pipe.png"
            alt="Picture of a pipe"
            width={220}
            height={300}
            className="rounded-md"
          />
        </div>

        <div className="mx-10 text-center">
          <p className="mb-4 text-lg font-medium border-b-2 border-blue-200">
            Shower Replacement
          </p>
          <img
            src="/public/IMG_shower.png"
            alt="Picture of a shower"
            width={220}
            height={300}
            className="rounded-md"
          />
        </div>

        <div className="mx-10 text-center">
          <p className="mb-4 text-lg font-medium border-b-2 border-blue-200">
            Water Heater Replacement
          </p>
          <img
            src="/public/IMG_waterheater.png"
            alt="Picture of a water heater"
            width={220}
            height={300}
            className="rounded-md"
          />
        </div>
      </section>
    </Container>
  );
}
