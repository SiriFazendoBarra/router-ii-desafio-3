import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Loading from "../components/Loading"

export default function Menu() {
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const getMenu = async () => {

        try {
            setLoading(true)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            if (!res) throw (`${res.ok}`)
            const data = await res.json()
            setPokemon(data)

        } catch (error) {
            setError(error)
            navigate('/pokemons')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    const getPage = (value) => {
        console.log(value)

    }




    if (loading) return <Loading />
    if (!pokemon) return <h1>{`No existe el Pókemon n°: ${params.id}`}</h1>

    return (
        <div className="container text-center">
            <h2 className="my-4">{pokemon.name.toUpperCase()} N°:{pokemon.id} </h2>
            <div className="d-flex justify-content-center gap-4">
                <div className="divPokeImg">
                    <img className="pokeImg" src={pokemon.sprites.other.dream_world.front_default} alt="foto pókemon" />
                </div>
                <div className="divPokeRender">
                    <ul className="list-group">
                        {pokemon.stats.map((item) => {
                            return (
                                <li className="list-group-item" key={item.stat.name}>
                                    <div className="rowStat" >
                                        <p className="h5 me-2">{item.stat.name.toUpperCase()}:</p>
                                        <p className="h5">{item.base_stat}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>

            
            <button className="btn btn-dark my-3" onClick={() => navigate('/pokemons')}>Volver al Menú</button>
            
        </div>
    )
}