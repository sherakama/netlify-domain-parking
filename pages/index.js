import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Stanford Domain Parking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This domain is temporarily parked" />
        <hr />
        <p className="description">
          This is a temporary holding ground for domains. Don't worry. It will be a real site some day.
        </p>
      </main>
      <Footer />
    </div>
  );
}
