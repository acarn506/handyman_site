import Container from "../components/Container";
import Image from "next/image";

export default function About() {
  return (
    <Container title="About">
      <h1 className="text-4xl font-bold my-10">About</h1>
      <div className="flex flex-row mx-20 mb-10 justify-around space-x-10">
        <section className="">
          <Image
            src="/about.png"
            alt="Picture of Cesar the Handyman"
            width={300}
            height={300}
            className="rounded-md"
          />
        </section>
        <section className=" w-2/3 ">
          <p>
            I start working with the plumber union 159 in 2003, after several
            times my family and friends ask me to help them fix some issues in
            their houses (all related to plumbing). Later on i got layed off and
            started working with general contractors where I learnd to do
            different kind of jobs like painting, remodeling bathrooms,
            remodeling kitchens, install dry wall, etc. When my family and
            friends need my help, I help them not because I have to but because
            I love what I do and I started doing jobs as a handyman. <br />
            <br />- Cesar Manon
          </p>
        </section>
      </div>
    </Container>
  );
}
