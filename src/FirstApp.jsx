import	PropTypes from 'prop-types';

const getSaludo = (name) =>{
    return "hola " + name;
}

//Properties o props | propiedades

//PropTypes | tipos de propiedades | se tienen que importar npm install prop-types

//Componente
export const FirstApp = ( { title }) => {
    return (
    <>
        <h1>{ /*getSaludo("Kevin")*/}</h1>
        <h2>{title}</h2>
        <p>parrafo</p>
    </>
    );
}


//Titulo tiene que ser string y requerido
FirstApp.PropTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título'
}