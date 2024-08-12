import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Apps = () => {
  const [items, setItems] = useState([]);
  const [name,setName]= useState('');
  const [description, setDescription]= useState('');
  const [editingId, setEditingId]= useState(null);

  useEffect(()=>{
    fetchItems();
  },[]);
//Read
    const fetchItems =async () =>{
    try{ 
      const response = await axios.get('http://localhost:3008/items');
      setItems(response.data);

    }catch(err){
      console.error(err);
    }
};
//create
const createItem= async() =>{
  try{
    const response= await axios.post('http://localhost:3008/items',{name, description});
    setItems([...items,response.data]);
    setName('');
    setDescription('');

  }catch (err){
    console.error(err);
  }
  };

  const updateItem = async () => {
    try {
      await axios.put(`http://localhost:3008/items/${editingId}`, { name, description });
      setItems(items.map(item => (item.id === editingId ? { ...item, name, description } : item)));
      setEditingId(null);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  
    const deleteItem = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:3008/items/${id}`);
        setItems(items.filter(item => item.id !== id));
        console.log('Item deleted successfully:', response.data);
      } catch (err) {
        console.error('Error deleting item:', err);
      }
    };
/*
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3008/items/${id}`);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };*/
  const startEdit = (items) =>{
    setEditingId(items.id);
    setName(items.name);
    setDescription(items.description);

    };

    const cancelEdit = ()=>{
      setEditingId(null);
      setName('');
      setDescription('');

      };
      return (
        <div className="App">
          <h1>CRUD Application</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {editingId ? (
              <div>
                <button onClick={updateItem}>Update</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <button onClick={createItem}>Create</button>
            )}
          </div>
          <div className="items">
            {items.map((item) => (
              <div key={item.id} className="item">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button onClick={() => startEdit(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Apps;

   
//     //Validate

//     const createItem = async () => {
//       try {
//         if (!name || !description) {
//           alert('Please fill out all fields');
//           return;
//         }
    
//         const response = await axios.post('http://localhost:3008/items', { name, description });
//         setItems([...items, response.data]);
//         setName('');
//         setDescription('');
//       } catch (err) {
//         console.error(err);
//       }
//     };



//     const deleteItem = async (id) => {
//       try {
//         const response = await axios.delete(`http://localhost:3008/items/${id}`);
//         setItems(items.filter(item => item.id !== id));
//         alert('Item deleted successfully');
//       } catch (err) {
//         console.error('Error deleting item:', err);
//         alert('Failed to delete item');
//       }
//     };
    

    

//     const createItem = async () => {
//       try {
//         if (!name || !description) {
//           alert('Please fill out all fields');
//           return;
//         }
    
//         const response = await axios.post('http://localhost:3008/items', { name, description });
//         setItems([...items, response.data]);
//         setName('');
//         setDescription('');
//         alert('Item created successfully');
//       } catch (err) {
//         console.error(err);
//         alert('Failed to create item');
//       }
//     };


//     import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// const Apps = () => {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:3008/items');
//       setItems(response.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to fetch items');
//       setLoading(false);
//     }
//   };

//   const createItem = async () => {
//     if (!name || !description) {
//       alert('Please fill out all fields');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:3008/items', { name, description });
//       setItems([...items, response.data]);
//       setName('');
//       setDescription('');
//       alert('Item created successfully');
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to create item');
//       setLoading(false);
//     }
//   };

//   const updateItem = async () => {
//     if (!name || !description) {
//       alert('Please fill out all fields');
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.put(`http://localhost:3008/items/${editingId}`, { name, description });
//       setItems(items.map(item => (item.id === editingId ? { ...item, name, description } : item)));
//       setEditingId(null);
//       setName('');
//       setDescription('');
//       alert('Item updated successfully');
//       setLoading(false);
//     } catch (error) {
//       console.error('Error updating item:', error);
//       setError('Failed to update item');
//       setLoading(false);
//     }
//   };

//   const deleteItem = async (id) => {
//     setLoading(true);
//     try {
//       const response = await axios.delete(`http://localhost:3008/items/${id}`);
//       setItems(items.filter(item => item.id !== id));
//       alert('Item deleted successfully');
//       setLoading(false);
//     } catch (err) {
//       console.error('Error deleting item:', err);
//       setError('Failed to delete item');
//       setLoading(false);
//     }
//   };

//   const startEdit = (item) => {
//     setEditingId(item.id);
//     setName(item.name);
//     setDescription(item.description);
//   };

//   const cancelEdit = () => {
//     setEditingId(null);
//     setName('');
//     setDescription('');
//   };

//   return (
//     <div className="App">
//       <h1>CRUD Application</h1>
//       <div className="form">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         {editingId ? (
//           <div>
//             <button onClick={updateItem}>Update</button>
//             <button onClick={cancelEdit}>Cancel</button>
//           </div>
//         ) : (
//           <button onClick={createItem}>Create</button>
//         )}
//       </div>
//       {loading ? <p>Loading...</p> : null}
//       {error ? <p className="error">{error}</p> : null}
//       <div className="items">
//         {items.map((item) => (
//           <div key={item.id} className="item">
//             <h2>{item.name}</h2>
//             <p>{item.description}</p>
//             <button onClick={() => startEdit(item)}>Edit</button>
//             <button onClick={() => deleteItem(item.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Apps;

    
    
