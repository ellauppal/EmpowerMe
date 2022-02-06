import history from './../history';

const Navbar = () => {
  function expandSidebar() {}

  return (
    <nav>
      <h1 className='nav-title'> EmpowerMe </h1>
      <div className='nav-subheadings'>
        <a onClick={() => history.push('/Blog')}> Blog </a>
        <a onClick={() => history.push('/Empower')}>Empower </a>
        <a> Sign up </a>
        <button className='nav-sign-in'> Sign in </button>
      </div>
      <div className='sidebar'>
        <a onClick={expandSidebar()}>
          <i className='fa fa-bars'></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
