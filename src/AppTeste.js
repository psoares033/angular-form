import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./App.css"
import dados from "./mock-data.json";


const App = () => {

    const [alunos, setAlunos] = useState(dados);
    const[addFormData, setAddFormData] = useState({
      numero: '',
      nome: ''
    })

    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldNumero = event.target.getAttribute("numero");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldNumero] = fieldValue;
  
      setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newAluno = {
        id: nanoid(),
        numero: addFormData.numero,
        nome: addFormData.nome,
      };
  
      const newAlunos = [...alunos, newAluno];
      setAlunos(newAlunos);
    };
  

    return (
        <div className="app-container">
          <titulo>VIBON 2022/2023</titulo>
          <subTitulo>Trabalho SONAR</subTitulo>
          <subVermelho>Registo de Dados e Resultados</subVermelho>
          <form onSubmit={handleAddFormSubmit}>
            Turma: <input 
            type="text"
            name= "turma"
            required= "obrigatório"
            placeholder= ""
            onChange={handleAddFormChange}
            />
            Grupo: <input 
            type="text"
            name= "grupo"
            required= "obrigatório"
            placeholder= ""
            onChange={handleAddFormChange}
            />
            Data: <input 
            type="text"
            name= "grupo"
            required= "obrigatório"
            placeholder= ""
            onChange={handleAddFormChange}
            />
        </form>
            <table>
                <thead>
                    <tr>
                    <th>Número</th>
                    <th>Nome</th>
                    </tr>
                </thead>
                    <tbody>
                        {alunos.map((aluno)=>(
                            <tr>
                                <td>{aluno.numero}</td>
                                <td>{aluno.nome}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        <form onSubmit={handleAddFormSubmit}>
            <input 
            type="text"
            name= "numero"
            required= "obrigatório"
            placeholder= ""
            onChange={handleAddFormChange}
            />
            <input 
            type="text"
            name= "nome"
            required= "obrigatório"
            placeholder= ""
            onChange={handleAddFormChange}
            />
            <button>+</button>
        </form>
        </div>
    );
};
export default App;