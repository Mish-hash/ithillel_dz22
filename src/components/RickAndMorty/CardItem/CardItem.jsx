import styles from './CardItem.module.scss';

function CardItem(props) {

    const {name, image} = props.item;

    return(
        <div className={styles.carContainer}>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default CardItem;
