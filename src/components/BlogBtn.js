import history from './../history';

function BlogBtn() {

    return (
        <div className="blogBtn">
          <img onClick={() => history.push('/Blog')} src={require('../images/BLOG.png')} alt="EMPOWER"/>
        </div>
      );
    }

export default BlogBtn;