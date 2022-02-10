import history from './../history';

const Navbar2 = () => {

    function expandSidebar() {

    }

    return (
        <nav2>
            <h1 onClick={() => history.push('/')} className='nav2-title'> EmpowerMe </h1>
            <div className='nav2-subheadings'>
                <a2 onClick={() => history.push('/Blog')}> Blog </a2>
                <a2 onClick={() => history.push('/Empower')}> Empower </a2>
                <a2 onClick={() => history.push('/SignUp')} > Sign up </a2>
                <button className='nav-sign-in' > Sign out </button>
            </div>
            <div className="sidebar">
                <a onClick={expandSidebar()}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </nav2>
    )
}

export default Navbar2;