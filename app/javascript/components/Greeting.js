import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomGreeting } from '../redux/slices/greetingSlice';

function Greeting() {
  const greeting = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <section>
      <h2>Random Greeting 1</h2>
      <h3>{greeting}</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;
