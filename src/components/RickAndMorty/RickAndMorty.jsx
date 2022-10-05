import styles from './RickAndMorty.module.scss';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchLine from './SearchLine/SearchLine';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CardItem from './CardItem/CardItem';
import useDebounce from '../../hooks/useDebouncer';

function RickAndMorty() {
    const [firstLoad, setFirstLoad] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(()=>{
        if(isLoading === true) {
            setTimeout(()=>{
                axios.get('character')
                .then(data => {
                    setCharacters(data.data.results);
                    setIsLoading(false);
                    setFirstLoad(false);
                });
            }, 500);
        }
    },[firstLoad]);

    useEffect(()=>{
        setIsLoading(true);
        if(debouncedValue === '') {
            setFirstLoad(true)
            return
        };
        axios.get(`character/?name=${debouncedValue}`)
            .then(data => {
                setCharacters(data.data.results);
                setIsLoading(false);
        });
    }, [debouncedValue])

    const onEdit = (event) => {
        setSearchValue(event.target.value);
    }


    return(
        <div className={styles.container}>
            <SearchLine onEdit={onEdit}/>
            <hr/>
            <div className={styles.cardList}>
                {(isLoading === true) ?
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="success" />
                    <CircularProgress color="success" />
                    <CircularProgress color="success" />
                </Stack> :
                <React.Fragment>
                    {characters.map(el=><CardItem item={el} key={`cardItem_${el.id}`}/>)}
                </React.Fragment>
                }
            </div>
        </div>
    )

}

export default RickAndMorty;
