import Container from "../components/Container";

export default function About() {
  return (
    <Container title="About">
      <h1 className="text-4xl font-bold my-10">About Me</h1>
      <div className="flex flex-row mx-20 mb-10 justify-around space-x-10">
        <section className="">
          <img
            src="/about.png"
            alt="Picture of Cesar the Handyman"
            width={300}
            height={300}
            className="rounded-md"
          />
        </section>
        <section className=" w-2/3 ">
          <p className="text-blue-700 font-medium">
            Hey, I’m Cesar the handyman. I started working with the plumber
            union 159 in 2003, my family and friends would always request my
            help to fix things around their houses. After several years of
            working with the plumbing union I was laid off and started working
            with general contractors where I learned to do different kinds of
            jobs like painting, remodeling bathrooms, remodeling kitchens,
            installing drywall, etc. When my family and friends need my help, I
            help them not because I have to but because I love what I do as a
            handyman.
            <br />
            <br />
            <p className="text-black">
              Please feel free to call or email me so I could be of service to
              you.
            </p>
            <br />
            <p className="text-black">- Cesar Manon</p>
          </p>
        </section>
      </div>
    </Container>
  );
}
