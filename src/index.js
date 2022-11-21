const express = require('express')
const { response, json } = require('express')
const {uuid} = require('uuidv4')//id único

const app = express()
app.use(express.json())
const alunos = []
const professores = []
const inspetores = []


//ALUNOS
app.get('/alunos', (request, response) => {
    return response.json(alunos)
}) 

app.post('/alunos', (request, response) => {
    const { nome, curso } = request.body
    const aluno = { id: uuid(), nome, curso }
    alunos.push(aluno)
    return response.status(201).json(aluno)
}) 

app.put('/alunos/:id',(request, response) => {
    const { id } = request.params
    const { nome, curso } = request.body
    const newAlunos = {id, nome, curso}
    const alunoindex = alunos.findIndex(aluno => aluno.id == id)
    alunos[alunoindex] = newAlunos;
    return response.json(newAlunos)
})

app.delete('/alunos/:id',(request, response) => {
    const { id } = request.params
    const alunoindex = alunos.findIndex(aluno => aluno.id == id)
    alunos.splice(alunoindex, 1)
    return response.status(204).send()
})


//PROFESSORES
app.get('/professores', (request, response) => {
    return response.json(professores)
}) 

app.post('/professores', (request, response) => {
    const { nome, idade, curso, escola } = request.body
    const professor = { id: uuid(), nome, idade, curso, escola }
    professores.push(professor)
    return response.status(201).json(professor)
}) 

app.put('/professores/:id',(request, response) => {
    const { id } = request.params
    const { nome, idade, curso, escola } = request.body
    const newProfessores = {id, nome, idade, curso, escola}
    const professorindex = professores.findIndex(professor => professor.id == id)
    professores[professorindex] = newProfessores;
    return response.json(newProfessores)
})

app.delete('/professores/:id',(request, response) => {
    const { id } = request.params
    const professorindex = professores.findIndex(professor => professor.id == id)
    professores.splice(professorindex, 1)
    return response.status(204).send()
})


//INSPETORES
app.get('/inspetores', (request, response) => {
    return response.json(inspetores)
}) 

app.post('/inspetores', (request, response) => {
    const { nome, idade, curso, escola } = request.body
    const inspetor = { id: uuid(), nome, idade, curso, escola }
    inspetores.push(inspetor)
    return response.status(201).json(inspetor)
}) 

app.put('/inspetores/:id',(request, response) => {
    const { id } = request.params
    const { nome, idade, curso, escola } = request.body
    const newInspetores = {id, nome, idade, curso, escola}
    const inspetorindex = inspetores.findIndex(inspetor => inspetor.id == id)
    inspetores[inspetoresindex] = newInspetores;
    return response.json(newInspetores)
})

app.delete('/inspetores/:id',(request, response) => {
    const { id } = request.params
    const inspetorindex = inspetores.findIndex(inspetor => inspetor.id == id)
    inspetores.splice(inspetorindex, 1)
    return response.status(204).send()
})

app.listen(8181, () => {
    console.log('O servidor foi iniciado!')
})