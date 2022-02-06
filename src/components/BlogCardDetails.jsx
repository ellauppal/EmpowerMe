import CloseIcon from '../images/closeButton.png';
import './BlogCardDetails.css';


const BlogCardDetails = ({details, viewMoreDetails, setViewMoreDetails}) => {
    
    let type = '';
    if (details.color == 'purple')
        type = 'Field : ';
    else if(details.color == 'orange')
        type = 'Available On : ';
    else {
        setViewMoreDetails(false);
    }
    
    const jsx = viewMoreDetails ? (
        <>
        <div className='dark-bg'/>
        <div className='centered'>
            <div className='modal'>
                <button className='closeBtn' onClick={() => setViewMoreDetails(false)}>
                    <img src={CloseIcon} alt='Closeicon' />
                </button>
                <div className='modalContent'>
                    <div className={`imageContainer ${details.color}`}>
                        <img className='blogcardImage' src={details.image} alt='blogcardImage' />
                    </div>
                    <div className='imageDetails'>
                        <span className={`mainHeading ${details.color}`}> Name : </span>
                        <span> {details.name} </span> <br/>
                        <span className={`mainHeading ${details.color}`}> {type} </span>
                        <span> {details.subtitle} </span> <br/>
                        <span className={`mainHeading ${details.color}`}> About : </span>
                        <span> {details.about} </span> <br/>
                    </div>
                </div>
            </div>
        </div> 
        </>
    ) : <></>;
    return jsx;
}

export default BlogCardDetails;