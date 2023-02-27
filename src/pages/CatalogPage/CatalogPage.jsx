import MariaPerez from "../../assets/m1.jpg"
import GabrielPerez from "../../assets/h2.jpg"
import GabrielaLopez from "../../assets/m3.jpg"
import JuanCristobalMartinez from "../../assets/h4.jpg"
import MartinaGonzalez from "../../assets/m5.jpg"
import "./CatalogPage.module.css"
import DoctorCard from "../../components/DoctorCard/DoctorCard"

function App() {

  const doctores = [
    {
      name: "Maria Perez",
      age: "35",
      price: "25$",
      specialties: ["Depresion", "Ansiedad"],
      image: MariaPerez
    },
    {
      name: "Gabriel Perez",
      age: "39",
      price: "30$",
      specialties: ["Trastornos Alimenticios", "Trastornos de la personalidad"],
      image: GabrielPerez
    },
    {
      name: "Gabriela Lopez",
      age: "29",
      price: "40$",
      specialties: ["Deportes", "Trabajo en equipo", "Relaciones interpersonales"],
      image: GabrielaLopez
    },
    {
      name: "Juan Cristóbal Martinez",
      age: "37",
      price: "35$",
      specialties: ["Psicoanalisis"],
      image: JuanCristobalMartinez
    },
    {
      name: "Martina Gonzalez",
      age: "38",
      price: "20$",
      specialties: ["Coaching", "Depresion"],
      image: MartinaGonzalez
    }
  ]

  console.log(doctores);


  return (
    <div className="doctores">
      {doctores.map((doctor)=> (
          <>
          <DoctorCard doctor = {doctor}/>
          </>
        ))
      }

    </div>
  )
}

export default App
