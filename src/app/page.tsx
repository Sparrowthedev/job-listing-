import Header from "@/components/Header";
import Joblist from "@/components/JobList";
import SearchBar from "@/components/SearchBar";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Job Listing</title>
      </Head>
      <Header />
      <SearchBar />
      <Joblist />
    </main>
  );
}
