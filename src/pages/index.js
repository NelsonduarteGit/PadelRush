import Head from "next/head";
import Image from "next/image";

import FilterBar from "@/components/FilterBar";
import { Button, Box } from "@mui/material";
import { Container } from "@mui/system";
import HeroSection from "@/components/Hero";
import IconSection from "@/components/IconSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>PadelRush</title>
        <meta name="description" content="Find your next padel adventure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconpr.ico" />
      </Head>

      <Container maxWidth="xl">
        <header>
          <Image
            src="/assets/padelhub/logofinal2.svg"
            width={200}
            height={100}
            alt="logo"
          />
          <FilterBar />
          <Button variant="contained" color="primary">
            Entrar
          </Button>
        </header>
      </Container>
      <HeroSection />
      <IconSection />
    </>
  );
}
