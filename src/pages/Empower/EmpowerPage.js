import Navbar2 from "../../components/Navbar2";
import Empower from "../../components/Empower";
import GreenBar from "./GreenBar";
import Add from "./Add";
import SortBtn from "./SortBtn";
import history from '../../history';

function EmpowerPage() {
    return(
        <div>
            <Navbar2 />
            <GreenBar />
            <Add></Add>
            <SortBtn />
            <Empower />
        </div>
    );
}

export default EmpowerPage;