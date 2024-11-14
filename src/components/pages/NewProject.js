import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

const NewProject = () => {

    const navigate = useNavigate()

    //Função de Submit para o servidor JSON
     const createPost = async (project) =>{
        
        // Inicialização de cost e services
        project.cost = 0
        project.services = []
        
        //Adiciona projetos do banco de dados 
<<<<<<< HEAD
        await fetch('https://cost-server-kappa.vercel.app/projects',{
=======
        fetch('http://localhost:5000/projects',{
>>>>>>> 8f6d18db60b1b1cf21f168237bd184b1b55fa6ab
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json)
        .then((data) => {
            console.log(data)
            //redirect
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
        })
        .catch((err) => console.logo(err))
    }

    return ( 
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    );
}

export default NewProject;
