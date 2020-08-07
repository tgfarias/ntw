import React from 'react';

import whatsappicon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/3267174?s=460&u=0f617031cf16226fda4e14637bd9dc07d4ff6996&v=4" alt="Tiago Farias" />
                <div>
                    <strong>Tiago Farias</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Tsxte
            <br /><br />
            texto 2
          </p>
            <footer>
                <p>Preço/Hora <strong>R$ 75,00</strong></p>
                <button type="button">
                    <img src={whatsappicon} alt="Whatsapp" />
              Entrar em contato
            </button>
            </footer>
        </article>
    )
}


export default TeacherItem;

