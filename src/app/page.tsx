'use client'
import Footer from "./components/footer"
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
