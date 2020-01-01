import React, { useEffect, useState } from 'react';

function Store() {

  useEffect(() => {
    fetchItems();
  }, []);

  //To display items on page create a state.
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const items = await data.json();
    console.log(items.data);
    //Display the items.
    setItems(items.data);
  }

  return(
    <div style={styles.container}>
      <h1>Fortnite</h1>
      <ul>
      {items.map(item => (
        <li key={item.itemId}>{item.item.name}</li>
      ))}
      </ul>
    </div>
  );
}

export default Store;


const styles = {
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    // background: 'gray'
  }
}