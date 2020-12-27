import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { fetchGameDetail, fetchScreenShot } from '../actions/detailAction';
import { Link } from 'react-router-dom';

const Game = ({ game: { name, id, released, background_image } }) => {
  const dispatch = useDispatch();

  const fetchDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(fetchGameDetail(id));
    dispatch(fetchScreenShot(id));
  };

  // const state = useSelector(state => state.state)
  return (
    <StyledGame onClick={fetchDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 10vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;

    object-fit: cover;
  }
`;

export default Game;
