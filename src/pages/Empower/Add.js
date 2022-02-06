import classes from './Add.module.css';

const Add = () => {
    return (
        <div >
            <div className={classes.add} id='add'>
                <form className={classes.form}>
                    Title<br/>
                    <input type='text' name='testfield'></input>
                </form>
            </div>
            <div className={classes.add1} id='add'>
                <form className={classes.form}>
                    Date<br/>
                    <input type='text' name='testfield'></input>
                </form>
            </div>
            <div className={classes.add2} id='add'>
                <form className={classes.form}>
                    How did it make you feel?<br/>
                    <input type='text' name='testfield'></input>
                </form>
            </div>
            <div className={classes.add3} id='add'>
                <form className={classes.form}>
                    Description<br/>
                    <input className={classes.input2} type='text' name='testfield'></input>
                </form>
            </div>
            <div className={classes.btn} id='add'>
            </div>
            <div>
                <img className={classes.line} src={require('../../images/line1.png')} alt="line"></img>
            </div>
        </div>
    )
}

export default Add;