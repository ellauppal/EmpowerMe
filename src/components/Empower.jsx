import { empoweringMoments } from "../utils";
import EmpowerCards from "./EmpowerCards";

const Empower = () => {

    const moments = empoweringMoments.map(moment => (
        <EmpowerCards title={moment.title} date={moment.date} desc={moment.description} />
    ));

    return (
        <section className='empower' id='empower'>
            <div className="emp-container">
                {moments}
            </div>
        </section>
    )
}

export default Empower;