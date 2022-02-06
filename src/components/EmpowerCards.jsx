const EmpowerCards = (props) => {
    console.log(props);
    return (
        <div className='empcard'>
            <div className="empcard-header">
                <h5>{props.title}</h5>
                <div>🥳</div>
                <h5>{props.date}</h5>
            </div>
            <div className='empcard-desc'>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default EmpowerCards;