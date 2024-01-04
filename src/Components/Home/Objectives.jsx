import React from 'react'
import Title from '../Helpers/Title'
import  Button  from '../Helpers/Button'
import styles from './Objectives.module.css'
const Objectives = () => {
  const [state,setState] = React.useState('Conforto')
  const refe = React.useRef()
function handleChange(e){
 const childs = Array.from(refe.current.children)
childs.forEach(i => {
  i.setAttribute('active', '')
  })
e.target.setAttribute('active','true');
setState(e.target.innerText)
}

  return (
    <section  className={`container ${styles.container}`}>
        <Title>Nossos Objetivos</Title>
      <div className={styles.buttons} ref={refe}>
        <Button onClick={handleChange} active='true' type='Full'>Conforto</Button>
        <Button onClick={handleChange}active='' type='Full'>Segurança</Button>
        <Button onClick={handleChange}active='' type='Full'>Velocidade</Button>
      </div>

      <div className={styles.textContainer}>
      {state=='Conforto' &&<div className={styles.Slide}><h2>Conforto</h2> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat error quisquam vitae numquam debitis? Aut corporis neque ratione necessitatibus iure fugiat sunt eaque provident, numquam sequi veniam nobis libero iste culpa cupiditate dicta maiores fuga similique, est maxime tenetur dolore? Illo repellendus tenetur corrupti sint, tempora exercitationem neque tempore repudiandae?</p></div>}
      {state=='Segurança' &&<div className={styles.Slide}><h2>Segurança</h2> <p> ipsum, dolor sit amet consectetur adipisicing elit. Repellat error quisquam vitae numquam debitis? Aut corporis neque ratione necessitatibus iure fugiat sunt eaque provident, numquam sequi veniam nobis libero iste culpa cupiditate dicta maiores fuga similique, est maxime tenetur dolore? Illo repellendus tenetur corrupti sint, tempora exercitationem neque tempore repudiandae?</p></div>}
      {state=='Velocidade' &&<div className={styles.Slide}><h2>Velocidade</h2> <p>Lorem , dolor sit amet consectetur adipisicing elit. Repellat error quisquam vitae numquam debitis? Aut corporis neque ratione necessitatibus iure fugiat sunt eaque provident, numquam sequi veniam nobis libero iste culpa cupiditate dicta maiores fuga similique, est maxime tenetur dolore? Illo repellendus tenetur corrupti sint, tempora exercitationem neque tempore repudiandae?</p></div>}
      </div>

    </section>
  )
}

export default Objectives