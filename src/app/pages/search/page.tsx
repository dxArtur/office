import Link from "next/link"

export default function Search () {
    return(
        <div className="min-h-screen w-full flex flex-col bg-gray-100">
            <h1 className="text-2xl text-gray-700 font-semibold m-4">Resultados</h1>
            <div className="flex flex-col m-6 md:items-start">
            <div className=" border rounded  p-6  w-full text-gray-500">
            <Link href={'/pages/candidatePage'} passHref>
            <div className="flex flex-row gap-5">

                <img
                  src="https://images.stockcake.com/public/6/3/9/6391ca86-7e50-4ebb-babc-4270b2f16f99_large/teacher-engaging-students-stockcake.jpg"
                  alt="Foto do Candidato"
                  loading="lazy"
                  className="w-20  h-20 object-cover rounded shadow-md"
                />
                <div>
                <h2 className="text-xl font-bold">Joãozinho</h2>
                <h2 className="text-base">João Silva</h2>
                </div>
                <div className="flex">
                    <h2 className="text-xl font-bold">00</h2>
                </div>
            </div>
                
                
            </Link>
            </div>
            </div>
        </div>
    )
}