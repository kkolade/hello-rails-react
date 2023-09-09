import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomGreeting } from '../redux/slices/greetingSlice';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <section>
      <h3>Here is your greeting:</h3>
      <p>{greeting}</p>
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;
