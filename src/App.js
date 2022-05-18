import Card from './components/card'
import { cardData } from './data/card_content.js'

import { VscGithub } from 'react-icons/vsc'

import logo from './media/gif/logo.gif'

import './styles/scss/app.scss';

function App() {
  return (
    <article className="page-layout">
        <img src={logo} className="logo" alt="Logo"/>
        <h2 className="heading">A premade React development environment with some handy features, packages & styling methodes pre-installed to give your development a head start.</h2>
        <section className="card-container">
            {cardData.map((item, i) => {
                    return (
                        <Card key={i} name={item.name} letter={item.letter} color={item.color} content={item.content} image={item.image}/>
                    )
                }
            )}
        </section>

        <div className="icon">
            <a className="github" href="https://github.com/Baeshee" target="_blank">
                <VscGithub size="4rem" color="white" />
            </a>
            <p className="icon__text">Github: Baeshee</p>
        </div>
        
    </article>
  );
}

export default App;
