import propTypes from "prop-types";

const Header = ({ bgColor , color}) =>{

    return(
            <header style={ {backgroundColor: bgColor,
                            color: color} }> 
                    Encabezado
            </header>
    )
}
// valores por defecto para las props suminsitradas 
Header.defaultProps ={
    bgColor:'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}
//validar las props con Proptypes
Header.protoTypes = {
    bgColor: propTypes.string.isRequired,
    color: propTypes.string
}
export default Header;