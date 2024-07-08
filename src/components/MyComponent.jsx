import PropTypes from 'prop-types'

export const MyComponent = ( {name, lastName} ) => {


  const student = {
    name : "Carolina",
    lastName: "Marino" ,
    mobile: "187956324",
    linkeindProfile: "hhttps://www.linkedin.com/carolina"
  }; 
  
  console.log (student);

  return (
    <div>
        <hr />
        <h4> Este es mi primer componente </h4>
        <p> Curso de React</p>
        <p> Docente: <strong> {name} {lastName} </strong> </p>
        <ul>
            <li> Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicación</li>
        </ul>
         <p> Estudiante: <strong> {student.name} {student.lastName} </strong> </p>
       
         <ul>
             <li>Movil: {student.mobile}</li>
             <li> Linkedin: {student.linkedindProfile} </li>    
         </ul>
         <hr />
        {/*<p> Estudiante: <strong> {JSON.stringify(student)}</strong> </p> */}
    </div>
  )
}

MyComponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string
}
