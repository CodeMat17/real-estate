import HeroBanner from "@/components/home/HeroBanner";
import MeetTheTeam from "@/components/meetTheAgents/MeetTheAgents";
import PartnersLogo from "@/components/partners/PartnersLogo";
import FeaturedProperties from "@/components/swiperComponent/FeaturedProperties";
import Testimonials from "@/components/testimonials/Testimonials";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProperties }) {
  return (
    <>
      <Head>
        <title>Realtor</title>
        <meta name='description' content='This is a real estate demo website.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <HeroBanner />
        <FeaturedProperties properties={featuredProperties} />
        <MeetTheTeam />
        <PartnersLogo />
        <Testimonials />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { hits } = require("@/features/data/properties");

  return {
    props: { featuredProperties: hits.slice(0, 5) },
  };
}
