import React from 'react'
import Title from '../Helpers/Title'
import Button from '../Helpers/Button'
import linhas from '../../../Lines.json'
import styles from './Linhas.module.css'
const Linhas = () => {
  const [saindoDe,setSaindoDe] = React.useState(null)
  const [indoPara,setindoPara] = React.useState(null)
  const [infos,setInfos] = React.useState(null)


    function setLinhas(infos){
      const Linhas = []
      for (let i in infos) {
        Linhas.push(`${i}: ${infos[i]}`)
      }
      console.log(Linhas)
      return Linhas
    }

    function handleClick(){
      setInfos(null)
      if(saindoDe!=null && indoPara!=null){
        console.log(saindoDe,indoPara)
        setInfos(linhas[saindoDe][indoPara])
      }
    }

    function LinhasDispo(nome){
     const City = []
      for (let i in linhas[nome]) {
        City.push(i)
      }
      return City
    }

  function indoChange(e){
    setindoPara(e.target.value)
  }

  function saindoChange(e){
    setSaindoDe(e.target.value)
  }


  return (
    <section className={`${styles.container} apper`}>
      <h2>Confira nossas linhas</h2>

      <div className={styles.drops}>
      <select onChange={saindoChange} name="Onde" id="Onde">
        <option selected disabled>Saindo de</option>
 
        <option>Conselheiro Lafaiete</option>
        <option>Rio Espera</option>
        <option>Rio Melo</option>
        <option>Piranguita</option>
        <option>Joselândia</option>
        <option>Santana</option>
        <option>Cristiano</option>
        <option>Carandaí</option>
        <option>Capela Nova</option>
        <option>Palmital</option>
        <option>Lagoa Dourada</option>
   
     

      </select>

      <select onChange={indoChange} name="Onde" id="Onde">
        <option selected >Indo para</option>
       {
        saindoDe == null ?<>
        <option>Conselheiro Lafaiete</option>
        <option>Rio Espera</option>
        <option>Rio Melo</option>
        <option>Piranguita</option>
        <option>Joselândia</option>
        <option>Santana</option>
        <option>Cristiano</option>
        <option>Carandaí</option>
        <option>Capela Nova</option>
        <option>Palmital</option>
        <option>Lagoa Dourada</option>
        </>
        : LinhasDispo(saindoDe).map(i => <option key={i}>{i}</option>)
        
       }

      </select>
      </div>
      <Button onClick={handleClick} type={'Full'}>Pesquisar</Button>

      <div className={styles.Infos}>
        {infos ?
         setLinhas(infos).map(i => (
          <span className={'apper'} key={i}>{i}</span>
         ))
        
        :null}
      </div>
    
    </section>
  )
}

export default Linhas