'use client'
import Navbar from "@/app/components/Navbar"


export default function CandidatePage () {
    return(
      <>
      <Navbar/>
        <main className="bg-gray-100 min-h-screen w-full sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <header className="bg-slate-300 text-white text-center py-6">
            <h1 className="text-3xl text-gray-800 font-semibold">Candidato a prefeito</h1>
          </header> */}

          <section className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start">
              <div className="w-full md:w-1/3 p-4 space-y-5">
                <img
                  src="https://images.stockcake.com/public/6/3/9/6391ca86-7e50-4ebb-babc-4270b2f16f99_large/teacher-engaging-students-stockcake.jpg"
                  alt="Foto do Candidato"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="w-full shadow-md rounded-lg border p-4">
                    <h2 className="text-base text-gray-600 mb-1 text-left">candidato a prefeito</h2>
                    <h3 className="text-2xl text-left rounded text-gray-700 font-bold mb-4">Joãozinho</h3>
                    <h2 className="text-base font-bold text-gray-600 mb-1 text-left">Número:</h2>
                    <h2 className="text-base text-gray-600 mb-1 text-left">00</h2>
                    <h2 className="text-base font-bold text-gray-600 mb-1 text-left">idade:</h2>
                    <h2 className="text-base text-gray-600 mb-1 text-left">40 anos</h2>
                    <h2 className="text-base font-bold text-gray-600 mb-1 text-left">Estado civil:</h2>
                    <h2 className="text-base text-gray-600 mb-1 text-left">Casado</h2>
                    <h2 className="text-base font-bold text-gray-600 mb-1 text-left">Ocupação:</h2>
                    <h2 className="text-base text-gray-600 mb-1 text-left">Empresário</h2>
                    <h2 className="text-base font-bold text-gray-600 mb-1 text-left">Partido:</h2>
                    <h2 className="text-base text-gray-600 mb-1 text-left">PF - partido ficticio</h2>
                </div>
                <div className="w-full bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-base font-bold text-gray-600 mb-1 text-left">Redes sociais</h2>

                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-10">
                <div className="rounded border p-4 shadow-md space-y-2">
                    <h3 className="text-xl text-left text-gray-600 font-bold ">Sobre mim</h3>
                    <p className="text-base text-gray-600 mb-4">
                    João Silva é um experiente político com mais de 15 anos de serviço público. Comprometido com a transparência e o desenvolvimento sustentável, João está preparado para liderar e transformar a nossa cidade.
                    </p>
                </div>
                <div className="rounded border p-4 shadow-md space-y-2">
                    <h3 className="text-xl font-bold mb-2 text-gray-600 text-left ">Propostas</h3>
                    <ul className="list-disc list-inside text-base text-gray-600 mb-4">
                    <li className="mb-2">Reforma da infraestrutura urbana para melhorar a mobilidade e segurança.</li>
                    <li className="mb-2">Investimento em programas de educação para todas as idades.</li>
                    <li className="mb-2">Implementação de políticas ambientais para promover a sustentabilidade.</li>
                    <li className="mb-2">Criação de oportunidades econômicas e suporte a pequenas empresas locais.</li>
                    </ul>
                </div>
                </div>
            </div>
          </section>
        </div>
    </main>
    </>
    )
}