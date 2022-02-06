import Blog from "../../components/Blog";
import history from '../../history';
import Navbar2 from "../../components/Navbar2";
import Footer2 from "../../components/Footer2";
import GreenBar from "./GreenBar";

function BlogPage() {
    return(
        <div>
            <Navbar2 />
            <GreenBar></GreenBar>
            <Blog />
            <Footer2/>
        </div>
    );
}

export default BlogPage;