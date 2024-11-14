import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';
const Home = () =>{
    return(
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton text='Criar Projeto' to='newproject'/>
            <img src={savings} alt="Costs"/>
        </section>
    );
}
export default Home;