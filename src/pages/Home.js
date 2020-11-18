import React , {useEffect} from 'react'
//REDUX
import { useDispatch, useSelector } from 'react-redux'
import {loadGames} from '../actions/gamesAction'
//components
import Game from '../components/Game'
//styling and animations
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    },[dispatch]);
    //get the data back
    const { popular, upcoming ,newGames} = useSelector(state => state.games);

    return (
            <GameList>
                <h2>upcoming games</h2>
                    <Games>
                        {upcoming.map(game => (
                            <Game name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image = {game.background_image}
                            key={game.id}
                            />
                        ))}
                    </Games>
            </GameList>
    );
};

const GameList = styled(motion.div)`
    padding:0rem 5rem;
    h2{
        padding:5rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap: 3rem;

`


export default Home