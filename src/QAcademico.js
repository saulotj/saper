import './QAcademico.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import alunoLousa from './alunoLousa.avif';
import meninaLousa from './meninaLousa.jpg';
import qAcademico from './q-academico.png';
import prof from './prof.webp';
import salaAula from './salaDeAula.jpg';
import Icone1 from './iconesQacademico/alunoxmatrizmc.gif'
import Icone2 from './iconesQacademico/dadosmc.gif'
import Icone3 from './iconesQacademico/calendariomc.gif'
import Icone4 from './iconesQacademico/bibliotecamc.gif'
import Icone5 from './iconesQacademico/boletimmc.gif'
import Icone6 from './iconesQacademico/caixamensagensmc.gif'
import Icone7 from './iconesQacademico/diariosmc.gif'
import Icone8 from './iconesQacademico/faqmc.gif'
import Icone9 from './iconesQacademico/historicomc.gif'
import Icone10 from './iconesQacademico/horariomc.gif'
import Icone11 from './iconesQacademico/materialmc.gif'
import Icone12 from './iconesQacademico/matriculamc.gif'
import Icone13 from './iconesQacademico/matrizmc.gif'
import Icone14 from './iconesQacademico/questionariomc.gif'
import Icone15 from './iconesQacademico/questionariomc.gif'


function qacademico() {
    const icones = [Icone1,Icone2, Icone3, Icone4, Icone5, Icone6, Icone7, Icone8,Icone9, Icone10, Icone11,Icone12,Icone13, Icone14,Icone15 ];
    return(
        <div class="container">

       
    <div class="row">

        <div class="col">
            <h2 className='hello'>BEM VINDO AO</h2>
            <h1><span className='qAcademico'>Q-ACADEMICO</span> WEB</h1>
            <h2 className='info'>Um site que facilita as suas atividades</h2>
            <br/>
            <p><strong>Por favor, entre com as suas informações de login nos campos abaixo:</strong></p>
            <form>
                <span>Login</span>
                <span>Senha</span>
                <br/>
                <input type='text'></input> <input type='text'></input>
                <button>OK</button>
            </form>
            <a href='#'>Esqueci minha senha</a>
          

        </div>

      
        <div class="col">
 
            <h2>OPÇÕES DO MÓDULO DO PROFESSOR</h2>
            <img className='class' src={alunoLousa}></img>
            <img className='class' src={meninaLousa}></img>
            <img className='class' src={prof}></img>
            <img className='class' src={salaAula}></img>
            <p>O Q-Acadêmico Web oferece uma grande quantidade de informações para você. Através dos ícones abaixo
                você pode conhecer melhor as opções deste módulo
            </p>

            <h3>Passe o mouse sobre os ícones para visualizar sua descrição</h3>
          
    </div>
    </div>

   
    <div class="row">

        <div class="col">

        <img className = "imagem" src={qAcademico}></img>
        <span>O Q-Acadêmico Web o aproxima ainda mais da sua instituição, dos seus colegas e dos seus alunos.
           É uma importante fewrramenta que possibilitará a você, enquanto professor, um universo de informações
            muito grande, ao alcance de poucos cliques
           </span>
           <h4 className='qualidate'>Qualidate Soluções em Informática <span>www.qualidate.com.br</span></h4>
        </div>

        <div class="col">

            <h2>PASSE O MOUSE SOBRE OS ÍCONES:</h2>
                <div>
                   {icones.map((icone, index) =>(
                    <img key={index} src={icone} alt={`Icone ${index +1}`} />
                   ))}
                    <p>Download do <a href='#'>manual</a><h2>(PDF)</h2></p>
                </div>

        </div>
    </div>
    
</div>

    );
}

export default qacademico;
