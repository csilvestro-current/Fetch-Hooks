import React, { useEffect } from 'react';

function Store() {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items = await data.json();
    console.log(items)
  }

  return(
    <div style={styles.container}>
      <h1>Fortnite</h1>
      <p>mm</p>
    </div>
  )
}

export default Store


const styles = {
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // background: 'gray'
  }
}