import axios from "axios";

// const URL = 'http://localhost:8081/api/agendamiento/v1/'

const registrarPaciente = async (paciente) => {
    await axios.post('http://localhost:8081/api/agendamiento/v1/pacientes/', paciente)
        .then((resp) => resp.data)
}

const registrarDoctor = async (doctor) => {
    await axios.post('http://localhost:8081/api/agendamiento/v1/doctores/', doctor)
        .then((resp) => resp.data)
}

// const buscarPacientePorCedula = async (cedula) => {
//     await axios.get('http://localhost:8081/api/agendamiento/v1/pacientes/', cedula)
//         .then((resp) => resp.data)
// }

// const buscarDoctorPorCedula = async (cedula) => {
//     await axios.get('http://localhost:8081/api/agendamiento/v1/doctores/', cedula)
//         .then((resp) => resp.data)
// }
const buscarCitas = async (cedulaP, cedulaD, fecha) => {
    await axios.get('http://localhost:8081/api/agendamiento/v1/citas/',
        {
            "cedulaD": `${cedulaD}`,
            "cedulaP": `${cedulaP}`,
            "fecha": `${fecha}`
        })
        .then((resp) => resp.data)
}


//fachada/////////////


export const fachadaRegistrarPaciente = async (paciente) => {
    await registrarPaciente(paciente);
}
export const fachadaRegistrarDoctor = async (doctor) => {
    await registrarDoctor(doctor);
}
// export const fachadaBuscarPacientePorCedula = async (cedula) => {
//     await registrarPaciente(cedula);
// }
// export const fachadaBuscarDoctorPorCedula = async (cedula) => {
//     await registrarDoctor(cedula);
// }
export const fachadabuscarCitas = async (cedulaP, cedulaD, fecha) => {
    await buscarCitas(cedulaP, cedulaD, fecha);
}





