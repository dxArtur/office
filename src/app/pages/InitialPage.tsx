
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'


interface State {
    id: number;
    sigla: string;
    nome: string;
  }

  interface City {
    id: number;
    nome: string;
  }

export default function InitialPage () {
    const [office, setOffice] = useState([]);
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedOffice, setSelectedOffice] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [selectedCity, setSelectedCity] = useState('')

    



    

    const OfficeHolder = ['Prefeito', 'Governador', 'Deputado federal', 'Deputado estadual', 'Vereador']
  
  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => {
        setStates(data);
      })
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`)
        .then(response => response.json())
        .then(data => {
          setCities(data);
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [selectedState]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ selectedState, selectedCity, selectedOffice });
  }

  const handleSearch = () => {
    console.log(1)
  }



    return (
        <div className="min-h-screen w-full flex flex-col justify-between bg-gray-100">
      <header className="bg-slate-100 text-white shadow-lg p-4 text-center">
        <h1 className="text-2xl text-gray-700 font-semibold">Analisando candidatos</h1>
      </header>
      
      <main className="flex flex-col items-center p-4">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">

          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Escolha um cargo para ver os candidatos e as propostas</h2>
            
        <div className="mb-4">
            <label htmlFor="office" className="block text-gray-600 mb-2">Qual cargo você deseja ver as propostas</label>
            <select
              id="office"
              value={selectedOffice}
              onChange={(e) => {
                setSelectedOffice(e.target.value);
                
            }}
              
              className="w-full p-2 text-gray-600 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>Selecione um cargo</option>
              {OfficeHolder.map(office => (
                <option className='text-gray-600' key={office} value={office}>{office}</option>
              ))}
            </select>
          </div>

          {['Prefeito', 'Governador', 'Deputado federal', 'Deputado estadual', 'Vereador'].includes(selectedOffice) && (
          

          <div className="mb-4">
            <label htmlFor="state" className="block text-gray-600 mb-2">Estado</label>
            <select
              id="state"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                
            }}
              
              className="w-full p-2 text-gray-600 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>Selecione um estado</option>
              {states.map(state => (
                <option className='text-gray-600' key={state.id} value={state.sigla}>{state.nome}</option>
              ))}
            </select>
          </div>

            )}

          {['Prefeito', 'Vereador'].includes(selectedOffice) && (


          <div className="mb-6">
            <label htmlFor="city" className="block text-gray-600 mb-2">Cidade</label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-gray-600 p-2 border border-gray-300 rounded-md"
              required
              disabled={!selectedState}
            >
              <option value="" disabled>Selecione uma cidade</option>
              {cities.map(city => (
                <option className='text-gray-600'  key={city.id} value={city.nome}>{city.nome}</option>
              ))}
            </select>
          </div>

            )}
          
          <Link href="/pages/search" passHref>

        
          <button
        //   onClick={handleSearch}
            type="submit"
            className="w-full py-3 bg-slate-500 shadow-lg text-white rounded-md font-semibold  focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            visualizar candidatos  
          </button>
          </Link>
        </form>

        <div className="mt-8 p-6  w-full max-w-lg">
          <a className="text-base text-center underline font-semibold mb-4 text-gray-800">Você é um candidato e gostaria se apresentar suas propostas?</a>
          
        </div>
      </main>
    </div>
    )
}