import './Layout.css';
import '../../index.css';

function Layout(props) {
    return(
        <div className="Layout container">
            {props.children}
        </div>
    );
}

export default Layout;