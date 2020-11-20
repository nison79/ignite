import React,{ useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
//redux routes
import {fetchSearch} from '../actions/gamesAction'
import { useDispatch } from 'react-redux'


const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }

    const clearSearch = () => {
        dispatch({type:"CLEAR_SEARCHED"});
    }
    return (
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo"></img>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button type="submit" onClick={submitSearch}>search</button>
            </form>
        </StyledNav>
    )
};

const StyledNav = styled(motion.div)`
    padding:4rem 1rem;
    text-align:center;
    input{
        width:30%;
        font-size:1.5rem;
        padding:0.2rem;
        border:none;
        margin-top:1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button{
        font-size:1.5rem;
        border:none;
        padding:0.5rem 2rem;
        cursor:pointer;
        background:#ff6767;
        color:white:

    }
`

const Logo = styled(motion.div)`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    cursor:pointer;
    img{
        width:2rem;
        height:2rem;
        
    }
    h1{
        margin:0rem 0.5rem;;
    }
`


export default Nav
