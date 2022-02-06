import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Mission from "../../components/Mission";
import Backdrop from "../../components/Backdrop";
import Footer from "../../components/Footer";
import EmpowerBtn from "../../components/EmpowerBtn";
import BlogBtn from "../../components/BlogBtn";
import history from '../../history';

function Home() {
    return(
        <div>
            <Navbar />
            <Header />
            <Mission />
            <Backdrop />
            <EmpowerBtn/>
            <BlogBtn/>
            <Footer />
        </div>
    );
}

export default Home;