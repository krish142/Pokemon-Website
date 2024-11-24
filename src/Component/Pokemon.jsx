import React, { useState } from 'react'
import { useEffect } from 'react';
import Pokemoncard from './Pokemoncard';

const Pokemon = () => {


    const[pokemon,setpokemon]=useState([]);
    const[search,setsearch]=useState("")

    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";


    const fetchpokemon = async() =>{
        try {
            const response = await fetch(API);
            const data = await response.json();

            const detailpokemondata = data.results.map(async (curpokemon)=>{
                const response = await fetch(curpokemon.url);
                const data = await response.json();
                return data;
            });

            const detailedresponse = await Promise.all(detailpokemondata);
            setpokemon(detailedresponse)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        fetchpokemon();

    }, [])

    const searchdata = pokemon.filter((curpokemon)=>
    curpokemon.name.toLowerCase().includes(search.toLowerCase()))
    

  return (
    <section className='w-full bg-slate-200 min-h-[100vh] pl-5' >
        <header>
            <h1 className='text-center py-5 text-[35px] font-extrabold'>Lets Catch Pokemon</h1>
        </header>
        <div className='mb-5 min-w-full flex justify-center' >
            <input type="text" placeholder='Search Pokemon' value={search} className='w-[290px] h-[40px] border-b-[2px] px-3 text-sm border-black input' onChange={(e)=>{
                setsearch(e.target.value)
            }}/>
        </div>
        <div>
            <ul className='cards flex flex-wrap gap-4 max-w-[1150px] mx-auto'>
                {searchdata.map((curpokemon,index)=>{
                    return(
                       <Pokemoncard  key = {index} pokemondata={curpokemon}/>
                    )
                })}
            </ul>
        </div>
    </section>
  )
}

export default Pokemon