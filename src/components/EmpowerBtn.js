import history from './../history';

function EmpowerBtn() {

    return (
        <div className="emBtn">
          <img onClick={() => history.push('/Empower')} src={require('../images/EMPOWER.png')} alt="EMPOWER"/>
        </div>
      );
    }

export default EmpowerBtn;