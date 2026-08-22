import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [person, setPerson] = useState({});
  const [pet, setPet] = useState({});
  const [simpson, setSimpson] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const getData = async () => {
      try {
        let pokeId = Math.floor(Math.random() * 900);
        let saiyanId = Math.floor(Math.random() * 30);
        let simpsonId;

        // definir ids aleatorios

        // pegava count da api para usar no random
        // mas comentei pq a api pokmeon tava quebrando depois do 900~
        // e a de dragonball depois do ~30

        /*
        await axios.get(
          "https://pokeapi.co/api/v2/pokemon/"
        ).then(res => {
          const count = res.data.count;
          console.log('Poke count: ' + count)
          pokeId = Math.floor(Math.random() * count); 
        });

        await axios.get(
          "https://dragonball-api.com/api/characters"
        ).then(res => {
          const count = res.data.meta.totalItems;
          console.log('Saiyan count: ' + count);
          saiyanId = Math.floor(Math.random() * 30); //a api quebra um pouco depois de 30
        });
        */

        await axios.get(
          "https://thesimpsonsapi.com/api/characters"
        ).then(res => {
          const count = res.data.count;
          console.log('Simpson count: ' + count)
          simpsonId = Math.floor(Math.random() * Number(count));
        });

        console.log('Poke id: ' + pokeId);
        console.log('Saiyan id: ' + saiyanId);
        console.log('Simpson id: ' + simpsonId);

        let personRes = await axios.get(
          `https://dragonball-api.com/api/characters/${saiyanId}`,
          {},
        );

        let petRes = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );

        let simpsonRes = await axios.get(
          `https://thesimpsonsapi.com/api/characters/${simpsonId}`
        );

        setPerson(personRes.data);
        setPet(petRes.data);
        setSimpson(simpsonRes.data);

        console.log("Success on person:", personRes.data);
        console.log("Success on pet:", petRes.data);
        console.log("Success on simpson:", simpsonRes.data);
        setLoading(false);

      } catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);
      }
    }
    getData();
  },[])


  const handleNext = () => {
    if (count < person.length - 1) {
      setCount((prev) => prev + 1);
    }
  };
  
  if (loading) {
    return (<div>Carregando</div>)
  }
  if (error){
    return (<div>Erro insperado ocorreu</div>)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={person.image} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>{person.name}</h1>
       
        </div>
        <div>
        <button
          type="button"
          className="counter"
          onClick={() => window.location.reload()}
        >
         Anterior
        </button>
        <button
          type="button"
          className="counter"
          onClick={() => window.location.reload()}
        >
         Próximo
        </button></div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Informações</h2>
          <p>Raça: {person.race}</p>
          <p>Idade: {simpson.age || "Não informado."}</p>
          <p>Frases: {simpson.phrases.length >= 2 ? (
              <>
                <p>"{simpson.phrases[0]}"</p>
                <p>"{simpson.phrases[1]}"</p>
              </>
            ) : "Não tem mais que duas frases."
            }

          </p>
          <p>Profissão: {simpson.occupation || "Não informado."}</p>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Pet</h2>
          <ul>
            <img src={pet.sprites.front_default} width="100"></img>
            <p>Nome: {pet.name}</p>
            <p>Tipo: {pet.types[0].type.name}</p>
          </ul> 
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
