import PropTypes from 'prop-types';

const Header = ({ headerColor = "red", headerHeight = "100vh"}) => {
    
    return (
        
        <div>
            <header style={{ backgroundColor: headerColor, 
                             height: headerHeight }}></header>
        </div>
    );
};


Header.propTypes = {
    headerColor: PropTypes.string,
    headerHeight: PropTypes.string
};

export default Header;