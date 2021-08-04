import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SvgBottom, SvgTop } from "../components/svg";
import Intro from "../components/intro";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Video from "../components/video";
import { CheckCircle } from "react-feather";

const IndexPage = () => {
  const activities = [
    "Vőfély feladatok ellátása",
    "Mulattatás",
    "Örök emlék",
    "Menyasszonyi csokrok",
    "Virág dekorációk",
    "Autódísz",
    "Virágos teremdíszek",
  ];

  const Activities = () => activities.map(a => (
    <p className="text-xl">
      <CheckCircle className="mr-2 my-3" style={{ display: "inline" }} />{a}
    </p>
  ));

  return (
    <ParallaxProvider>
      <Layout>
        <Seo title="Főoldal" />
        <section className="bg-white pt-40 pb-40 sm:pt-16 sm:pb-24 text-gray-800" style={{position:"relative"}}>
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <div className="container max-w-5xl mx-auto m-8">
              <h1 className="w-full my-2 text-5xl leading-tight text-center text-gray-800">Üdvözlöm!</h1>
              <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="mt-6 flex flex-row flex-wrap">
                  <h3 className="w-full text-3xl text-gray-800 leading-none mb-3">Feladataim</h3>
                  <div className="">
                    <Activities />
                  </div>
                </div>
                <div className="mt-6 flex-1">
                  <h3 className="text-3xl text-gray-800 leading-none mb-3">Bemutatkozó videó</h3>
                  <Video />
                </div>
              </div>
            </div>
          </Parallax>
        </section>

        <SvgTop />
        <section className="py-8">
          <div className="container max-w-5xl mx-auto flex flex-wrap flex-row justify-center">
            <Gallery />
          </div>
        </section>
        <SvgBottom />

        <section className="py-80 sm:pt-8 sm:pb-24 bg-white text-gray-800">
          <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
            <div className="container max-w-5xl mx-auto flex flex-wrap flex-row content-evenly">
              <div className="sm:w-1/2 self-center">
                <Intro />
              </div>
              <div className="sm:w-1/2">
                <Contact />
              </div>
            </div>
          </Parallax>
        </section>

      </Layout>
    </ParallaxProvider>
  );
}

export default IndexPage
