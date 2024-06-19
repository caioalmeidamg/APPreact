import PropTypes from 'prop-types';
import '../../static/index.css';
import claro from  '../../static/claroLogo.png';
import plusicon from '../../static/plusicon-removebg-preview.png'
import treinaLogo from '../../static/treinacormecial-removebg-preview.png'
const Header = ({ headerColor = "red", headerHeight = "100vh"}) => {
    
    return (
        
        <div>
            <header class={"cabecalho"}>                
                <div style={{display: "flex",
                             justifyContent: "left"   
                }}>
                    <img class="logo"  src={claro}/>
                    <img class="plusicon" src={plusicon}/>
                </div>
                <img style={{height: "90%", paddingtop: "0.8%;"}} src={treinaLogo} alt=""/>
            </header>
        </div>
    );
};


Header.propTypes = {
    headerColor: PropTypes.string,
    headerHeight: PropTypes.string
};

export default Header;