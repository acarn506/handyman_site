import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Home",
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Nav />

      <main className=" w-screen flex flex-col items-center py-10 bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
