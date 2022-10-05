import styles from './SearchLine.module.scss';

function SearchLine(props) {

    return(
        <div className={styles.container}>
            <p>search item</p>
            <input type='text' onChange={props.onEdit}/>
        </div>
    )
}

export default SearchLine;
