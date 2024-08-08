import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ name: '', quantity: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, [sortBy]);

  const fetchItems = async () => {
    const response = await axios.get(`http://localhost:5000/items?sortBy=${sortBy}`);
    setItems(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`http://localhost:5000/items/${editingId}`, modalData);
    } else {
      await axios.post('http://localhost:5000/items', modalData);
    }
    setModalOpen(false);
    setModalData({ name: '', quantity: '', price: '' });
    setIsEditing(false);
    fetchItems();
  };

  const handleEdit = (item) => {
    setModalData(item);
    setIsEditing(true);
    setEditingId(item._id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchItems();
  };

  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <button onClick={() => setModalOpen(true)}>Add Item</button>
      <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="name">Name</option>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.quantity} - ${item.price}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {modalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={modalData.name}
              onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={modalData.quantity}
              onChange={(e) => setModalData({ ...modalData, quantity: parseInt(e.target.value) })}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={modalData.price}
              onChange={(e) => setModalData({ ...modalData, price: parseFloat(e.target.value) })}
              required
            />
            <button type="submit">Submit</button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
