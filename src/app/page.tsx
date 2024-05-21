import { useState } from "react"
import nodemailer from "nodemailer"



export default function Home() {
/*   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [hasSend, setHasSend] = useState(false)

  const handleSumit = async (e) => {

    const transporter = nodemailer.createTransport()
    const mailOptions = {
      from: email,
      to: "comercial@g10solution.com.br",
      name,
      subject,
      message,
    }

    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log('error')
      } else {
        console.log('sucess')
      }
    })
  } */

  return (
    <div className="bg-slate-100 min-h-screen ">
      <nav className="flex drop-shadow-md bg-slate-100 text-zinc-950  w-full justify-between items-center ">
        <a className="ml-4 pt-1 flex items-center">
          <img src="logo.png" alt="Logo da G10 Solution" className="h-20" />
        </a>
        
          <ul className="mr-4 flex items-center justify-center space-x-4">
            <li><a>Soluções em conectividade</a></li>
            <li><a>Cloud</a></li>
            <li><a>Videomonitoramento</a></li>
            <li><a>Materiais de telecom</a></li>
          </ul>
        {/* <a className="mr-4 flex items-center"><button>Simule os nossos preços</button></a> */}
      </nav>
      <div className="gap-y-1 mt-10 flex flex-col  items-center h-screen text-blue-800 font-bold">
        <div className="">
          <a className="">
            <img src="g10logofull.png" alt="Logo da G10 Solution" className="h-50" />
          </a>
        </div>
        <div className="text-center text-4xl drop-shadow-lg">
          <h2 className="text-6xl">Bem vindo a G10 Solution,</h2>
          <h2 className="text-5xl">sua parceira em soluções avançadas em</h2>
          <h2 className="font-normal text-4xl">videomonitoramento, Cloud e Materiais de Telecom</h2>
          <h4 className="mt-4 text-base text-center font-light text-xl">Nós estamos constantemente inovando para oferecer</h4>
          <h4 className="text-base text-center font-light text-xl">soluções que impulsionem a  sua conectividade com o sucesso.</h4>
          <div className="mt-4 text-center items-center text-base font-normal text-slate-100 drop-shadow-lg">
            <a href="#contact"><button className="border border-blue-900 text-blue-900 p-4 rounded-sm">Fale conosco</button></a>
           
          </div>
        </div>
      </div>
      <section id="contact" className="bg-blue-950 gap-y-10 text-zinc-950 h-screen flex flex-col justify-start items-center">
      <h2 className="mt-10 text-slate-100 font-bold text-2xl border border-slate-100 p-4 rounded">Entre em contato</h2>
        <div className="border border-slate-600 rounded bg-gray-900 p-10 text-slate-100 space-y-4 gap-y-4 ">
          <h2 className="text-1xl font-semibold text-slate-100">Envie um email</h2>
          <form className="grid min-w-screen pb-4 border-b border-slate-600 gap-y-1" action="mailto:daniel.arturjsb@gmail.com" method="post" encType="text/plain">
              <label  className="font-light" htmlFor="name">Nome completo:</label>
              <input  className="font-light bg-gray-600 rounded p-1 border border-slate-400 " type="text" id="name" name="name" required/>
              
              <label  className="font-light" htmlFor="email">Email:</label>
              <input className="font-light bg-gray-600 rounded p-1 border border-slate-400" type="email" id="email" name="email" required/>
              
              <label className="font-light" htmlFor="message">Mensagem:</label>
              <textarea className=" font-light p-1 bg-gray-600 rounded  border border-slate-400" id="message" name="message" rows={4} required></textarea>
              
              <button className="bg-blue-900  rounded border border-slate-600 mt-6 p-2 font-semibold " type="submit">Enviar</button>
          </form>
          
            <a className=" flex items-center gap-2" href="https://wa.me/558588060437?text=Olá,%20estou%20entrando%20em%20contato%20com%20você%20através%20do%20site">
              <label className=" font-semibold">Ou clique aqui e entre em contato pelo Whatsapp</label>
              <img src="wpp.png" alt="Icone do Whatsapp" className="h-8" />
            </a>
        </div>
      </section>
      <footer className="bg-gray-800 py-4 text-gray-300 text-md ">
        <div className="text-base flex flex-col justify-center items-center">
          <div className="w-full  gap-y-2 flex flex-col justify-start">
            <p className="pl-6 text-base font-bold">Informações para contato</p>
            <p className="pl-6 text-sm font-light">comercial@g10solution.com.br</p>
            <p className="pl-6 text-sm font-light">+(85) 988060437</p>
            <p className="pl-6 border-t  border-slate-600 pt-2  text-sm font-light"> ©G10 Solution, 2024</p> 
          <p className="flex justify-center border-t border-slate-600 pt-2 font-light text-xs text-slate-400">Desenvolvido por ©DanielCódigos, 2024 Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
