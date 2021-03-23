import Container from "../components/Container";
import Image from "next/image";

export default function Service() {
  return (
    <Container title="Service Page">
      <div className="my-10 w-3/4">
        <h1 className="text-4xl  font-bold text-center"> My Services</h1>
        <div className="flex flex-row flex-wrap justify-around my-10 ">
          <Image
            src="/moving.png"
            alt="Picture of Cesar the Handyman"
            width={200}
            height={200}
            className="rounded-md"
          />
          <Image
            src="/painting.png"
            alt="Picture of Cesar the Handyman"
            width={200}
            height={200}
            className=" rounded-md "
          />
          <Image
            src="/roofing.png"
            alt="Picture of Cesar the Handyman"
            width={200}
            height={200}
            className="rounded-md "
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around  ">
          <p className="text-xl font-medium  ">Moving</p>
          <p className="text-xl font-medium  ">Painting</p>
          <p className="text-xl font-medium  ">Roofing</p>
        </div>
        <div className="flex flex-row flex-wrap justify-around my-10 ">
          <Image
            src="/cleaning.png"
            alt="Picture of Cesar the Handyman"
            width={200}
            height={200}
            className="rounded-md "
          />
          <Image
            src="/assembly.png"
            alt="Picture of Cesar the Handyman"
            width={200}
            height={200}
            className="rounded-md "
          />
          <Image
            src="/yardwork.png"
            alt="Picture of Cesar the Handyman"
            width={200}
            height={200}
            className="rounded-md "
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around ">
          <p className="text-xl font-medium  ">Cleaning</p>
          <p className="text-xl font-medium  ">Furniture Assembly</p>
          <p className="text-xl font-medium  ">Yard Work</p>
        </div>
      </div>
    </Container>
  );
}
