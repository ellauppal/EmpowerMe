import history from './../history';

const Navbar = () => {
  function expandSidebar() {}

  return (
    <nav1>
        <h1 onClick={() => history.push('/')} className='nav1-title'> EmpowerMe </h1>
        <div className='nav1-subheadings'>
            <a1 onClick={() => history.push('/Blog')}> Blog </a1>
            <a1 onClick={() => history.push('/Empower')}> Empower </a1>
            <a1 onClick={() => history.push('/SignUp')} > Sign up </a1>
            <button onClick={() => history.push('/SignIn')} className='nav-sign-in' > Sign in </button>
        </div>
        <div className="sidebar">
            <a onClick={expandSidebar()}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    </nav1>
)
}

export default Navbar;
