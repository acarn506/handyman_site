import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <h1>Handyman Perferred Company</h1>

      <section>
        <h2 className="">Service Locations</h2>
        <ul className="">
          <li className="">Alameda County</li>
          <li className="">Contra Costa County</li>
        </ul>
      </section>
    </Container>
  );
}
