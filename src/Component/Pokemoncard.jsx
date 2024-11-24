import React from 'react'

const Pokemoncard = ({pokemondata}) => {
  return ( 
    <li className='w-[23%] h-[370px] py-10 shadow-md bg-white rounded-sm flex items-center flex-col gap-3'>
        <figure>
            <img src={pokemondata.sprites.other.dream_world.front_default} className='h-[120px] '/>
        </figure>
        <h1 className='font-extrabold text-[18px]'>
            {pokemondata.name}
        </h1>
        <div className='bg-green-500 w-[130px] h-[35px] text-center rounded-full'>
            <p className='text-white font-semibold mt-1'>{pokemondata.types.map((curtype)=>
                   curtype.type.name
            ).join(",")}</p>
        </div>
        <div className='flex gap-[14px] text-sm mt-4'>
            <p>
                <span className='font-bold'>Height: </span>{pokemondata.height}
            </p>
            <p>
                <span className='font-bold'>Weight: </span>{pokemondata.weight}
            </p>
            <p>
                <span className='font-bold'>Speed: </span>{pokemondata.stats[5].base_stat}
            </p>
        </div>
        <div className='flex gap-7 text-sm mt-2'>
            <p className='flex flex-col justify-center items-center'>{pokemondata.base_experience}
                <span className='font-bold'>Experience</span>
            </p>
            <p className='flex flex-col justify-center items-center'>{pokemondata.stats[1].base_stat}
                <span className='font-bold'>Attack</span>
            </p>
            <p className='flex flex-col justify-center items-center'>{pokemondata.abilities.map((info)=> info.ability.name).slice(0,1).join(",")}
                <span className='font-bold'>Abilities</span>
            </p>
        </div>
    </li>
  )
}

export default Pokemoncard