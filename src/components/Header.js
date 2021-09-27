import SearchEngine from './SearchEngine';
import Logo from "./Logo";

function Header(props) {
    return (
        <header>
            <Logo />
            <SearchEngine handleSetWord={props.handleSetWord} />
        </header>
    )
}

export default Header;