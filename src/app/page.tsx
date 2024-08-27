'use client'
import { useEffect, useRef, useState } from "react"
import nodemailer from "nodemailer"
import Link from "next/link"
import ServicePage from "./pages/servicePage"
import SuportPage from "./pages/suportPage"
import PricingPage from "./pages/pricingPage"
import ContactFormPage from "./pages/contactFormPage"
import HomePage from "./pages/homePage"
import Footer from "./components/footer"
import Navbar from "./components/Navbar"
import ServicesPage from "./pages/servicePage"
import CandidatePage from "./pages/candidatePage/page"
import InitialPage from "./pages/InitialPage"




export default function Home() {



  return (
    <main className="">

      <section className=" min-h-screen flex flex flex-col justify-start items-center ">
        <InitialPage/>
        <Footer/>
      </section>
    </main>
  )
}
