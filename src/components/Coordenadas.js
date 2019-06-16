import React,{useState,useEffect} from 'react'


function useCoordenadas()
{
    const [coordenadas,setCoordenadas]=useState({
        latitud:null,
        longitud:null
    })
    let geoID
    useEffect(()=>{
        geoID=window.navigator.geolocation.watchPosition((position)=>{
            setCoordenadas({
                latitud:position.coords.latitude,
                longitud:position.coords.longitude
            })
        })
        return ()=>{
            navigator.geolocation.clearWatch(geoID)
        }
    })

    return coordenadas;
}

export default function Coordenadas(){
    const coordenadas=useCoordenadas()
    return coordenadas.latitud==null?(<div>Cargando...</div>):(
        <div>
            <h2>Latitud: {coordenadas.latitud}</h2>
            <h2>Longitud: {coordenadas.longitud}</h2>
        </div>
    )
}