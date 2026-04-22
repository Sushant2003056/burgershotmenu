import React, { useState } from 'react';

const MENU_DATA = {
  MAINS: [
    { name: "Hamburger", price: 75, assembled: { "Hamburger": 1 }, ingredients: { Bun: 1, Lettuce: 1, Patty: 1 } },
    { name: "Cheese Burger", price: 80, assembled: { "Cheese Burger": 1 }, ingredients: { Bun: 1, Lettuce: 1, Patty: 1, "Cheese Slice": 1 } },
    { name: "Bacon Cheese Burger", price: 85, assembled: { "Bacon Cheese Burger": 1 }, ingredients: { Bun: 1, Lettuce: 1, Patty: 1, "Cheese Slice": 1, Bacon: 1 } },
    { name: "Bacon Egg Burger", price: 90, assembled: { "Bacon Egg Burger": 1 }, ingredients: { Bun: 1, Lettuce: 1, Patty: 1, "Cheese Slice": 1, Bacon: 1, Eggs: 1 } },
    { name: "Veggie Burger", price: 140, assembled: { "Veggie Burger": 1 }, ingredients: { Bun: 1, Lettuce: 4 } },
  ],
  MEALS: [
    { name: "Hunger King", price: 449, assembled: { "Hamburger": 2, "Chicken Nuggets": 2, "Belgian Fries": 2, "Beverages": 4, "Chocolate Ice-Cream": 1 }, ingredients: { Bun: 2, Lettuce: 2, Patty: 2, Breadcrumbs: 2, "Chicken Breast": 2, Potato: 6, Cone: 1, Milk: 1, "Coco Powder": 1, Coke: 4 } },
    { name: "Bacon Monster", price: 539, assembled: { "Bacon Egg Burger": 2, "Bacon Cheese Burger": 2, "Belgian Fries": 2, "Beverages": 4, "Vanilla Ice-Cream": 1 }, ingredients: { Bun: 4, Lettuce: 4, Patty: 4, "Cheese Slice": 4, Bacon: 4, Eggs: 2, Potato: 6, Cone: 1, Milk: 1, Coke: 4 } },
    { name: "Cheese Hunter", price: 249, assembled: { "Cheese Burger": 2, "Belgian Fries": 2, "Avocado Smoothi": 2 }, ingredients: { Bun: 2, Lettuce: 2, Patty: 2, "Cheese Slice": 2, Potato: 6, Avocado: 4 } },
    { name: "Stress Attack", price: 250, assembled: { "Veggie Burger": 2, "Belgian Fries": 2, "Avocado Smoothi": 2, "Apple Ice-Cream": 1 }, ingredients: { Bun: 2, Lettuce: 8, Potato: 6, Avocado: 4, Cone: 1, Milk: 1, Apple: 1 } },
    { name: "Fry Fun", price: 389, assembled: { "Belgian Fries": 4, "Chicken Nuggets": 4 , "Beverages": 2, "Vanilla Ice-Cream": 1, "Chocolate Ice-Cream": 1 }, ingredients: { Potato: 12, Breadcrumbs: 4, "Chicken Breast": 4, Cone: 2, Milk: 2, "Coco Powder": 1, Coke: 2 } },
    { name: "Snacky Packy", price: 239, assembled: { "Chicken Nuggets": 2, "Belgian Fries": 2, "Beverages": 2, "Banana Ice-Cream": 1 }, ingredients: { Breadcrumbs: 2, "Chicken Breast": 2, Potato: 6, Cone: 1, Milk: 1, Banana: 1, Coke: 2 } },
    { name: "Code Hunger (EMS/PD)", price: 499, assembled: { "Hamburger": 4, "Belgian Fries": 2, "Green cow": 4, "Beverages": 2 }, ingredients: { Bun: 4, Lettuce: 4, Patty: 4, Potato: 6, "Green cow": 4, Coke: 2 } },
    { name: "DOJ Meal", price: 400, assembled: { "Bacon Cheese Burger": 2, "Belgian Fries": 2, "Beverages": 6, "Lemon Ice-Cream": 2 }, ingredients: { Bun: 2, Lettuce: 2, Patty: 2, "Cheese Slice": 2, Bacon: 2, Potato: 6, Cone: 2, Milk: 2, Lemon: 2, coke: 6 } },
    { name: "Mechanic Special", price: 280, assembled: { "Hamburger": 2, "Chicken Nuggets": 2, "Avocado Smoothi": 2, "beverages": 2 }, ingredients: { Bun: 2, Lettuce: 2,patty:2 ,Breadcrumbs: 2, "Chicken Breast": 2, Avocado: 4, Coke: 2} },
    { name: "Joe & Jay Special", price: 650, assembled: { "Bacon Egg Burger": 2, "Bacon Cheese Burger": 2, "Cheese Burger": 2, "Beverages": 5, "Vanilla Ice-Cream": 2, "Strawberry Ice-Cream": 2 }, ingredients: { Bun: 6, Lettuce: 6, Patty: 6, "Cheese Slice": 6, Bacon: 4, Egg: 2, Cone: 4, Milk: 4, Strawberry: 4, Coke: 4 } },
    { name: "Burgershot Supreme", price: 1200, assembled: { "Veggie Burger": 2, "Hamburger": 2, "Cheese Burger": 2, "Bacon Cheese burger": 2, "Bacon Egg Burger": 2, "Chicken Nuggets": 2, "Belgain Fries": 2,"Avocado Smoothi":2,"Green Cow":2, "Beverages": 8, "total Ice-Cream(Each Type 1)": 9,Straw:4 }, ingredients: { Bun: 10, Lettuce: 16, Patty: 8, "Cheese Slice": 6, Bacon: 4, Eggs: 2, Breadcrumbs: 2, "Chicken Breast": 2, Potato: 6, Cone: 9, Milk: 9,"Coco powder":1, Strawberry: 2,Apple:1,Banana:1,Pomegranate:1,Mango:1,Watermelon:1,Lemon:1,"Green Cow":2, Pepsi: 2, Sprite: 2, Fanta: 2, Coke: 2 ,straw:4} },
    { name: "Happy Meal", price: 350, assembled: { "Hamburger": 2, "Cheese Burger": 2, "Fruit Smoothie": 4, "Strawberry Ice-Cream": 1,straw:3 }, ingredients: { Bun: 4, Lettuce: 4, Patty: 4, "Cheese Slice": 2, Fruits: 20, Cone: 1, Milk: 1, Strawberry: 2,straw:3 } }
  ],
  SIDES: [
    { name: "Belgian Fries", price: 50, assembled: { "Belgian Fries": 1 }, ingredients: { Potato: 3 } },
    { name: "Chicken Nuggets", price: 55, assembled: { "Chicken Nuggets": 1 }, ingredients: { Breadcrumbs: 1, "Chicken Breast": 1 } },
    { name: "Fried Egg", price: 20, assembled: { "fried egg": 1 }, ingredients: { Eggs: 1 } },
    { name: "Fried Bacon", price: 10, assembled: { "fried Bacon": 1 }, ingredients: { Bacon: 1 } },
    { name: "Vanilla Ice-Cream", price: 40, assembled: { "Vanilla Ice-Cream": 1 }, ingredients: { cone: 1,milk:1 } },
    { name: "Chocolate Ice-Cream", price: 40, assembled: { "Chocolate Ice-Cream": 1 }, ingredients: { cone: 1,milk:1," coco Powder":1 } },
    { name: "Banana Ice-Cream", price: 40, assembled: { "Banana Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Banana:1 } },
    { name: "Apple Ice-Cream", price: 40, assembled: { "Apple Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Apple:1 } },
    { name: "Mango Ice-Cream", price: 40, assembled: { "Mango Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Mango:1 } },
    { name: "Pomegranate Ice-Cream", price: 40, assembled: { "pomegranate Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Pomegranate:1 } },
    { name: "Strawberry Ice-Cream", price: 40, assembled: { "Strawberry Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Strawberry:2 } },
    { name: "Watermelon Ice-Cream", price: 40, assembled: { "Watermelon Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Watermelon:1 } },
    { name: "Lemon Ice-Cream", price: 40, assembled: { "Lemon Ice-Cream": 1 }, ingredients: { cone: 1,milk:1,Lemon:1 } },

  ],
  DRINKS: [
    { name: "Avocado Smoothi", price: 30, assembled: { "Avocado Smoothi": 1 }, ingredients: { Avocado: 2 } },
    { name: "Banana Smoothi", price: 40, assembled: { "Banana Smoothi": 1 }, ingredients: { Banana:5 } },
    { name: "Apple Smoothi", price: 40, assembled: { "Apple Smoothi": 1 }, ingredients: { Apple:5 } },
    { name: "Mango Smoothi", price: 40, assembled: { "Mango Smoothi": 1 }, ingredients: { Mango:5 } },
    { name: "Pomegranate Smoothi", price: 40, assembled: { "pomegranate Smoothi": 1 }, ingredients: { Pomegranate:5 } },
    { name: "Strawberry Smoothi", price: 40, assembled: { "Strawberry Smoothi": 1 }, ingredients: { Strawberry:5 } },
    { name: "Watermelon Smoothi", price: 40, assembled: { "Watermelon Smoothi": 1 }, ingredients: { Watermelon:5 } },
    { name: "Lemon Smoothi", price: 40, assembled: { "Lemon Smoothi": 1 }, ingredients: { Lemon:5 } },
 ]
};

function App() {
  const [selectedItem, setSelectedItem] = useState(MENU_DATA.MEALS[0]);
  const [qty, setQty] = useState(1);

  const handleSelect = (category, index) => {
    setSelectedItem(MENU_DATA[category][index]);
    setQty(1); // Reset qty for new selection
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🍔 BurgerShot | Meal Description Dashboard</h1>

        {/* FOUR SEPARATE DROPDOWNS */}
        <div style={styles.selectionGrid}>
          <div style={styles.selectWrapper}>
            <label style={styles.label}>MAIN (BURGERS)</label>
            <select style={styles.select} onChange={(e) => handleSelect('MAINS', e.target.value)}>
              <option disabled selected>-- Select Burger --</option>
              {MENU_DATA.MAINS.map((item, i) => <option key={i} value={i}>{item.name}</option>)}
            </select>
          </div>

          <div style={styles.selectWrapper}>
            <label style={styles.label}>MEALS (COMBOS)</label>
            <select style={styles.select} onChange={(e) => handleSelect('MEALS', e.target.value)}>
              <option disabled selected>-- Select Meal --</option>
              {MENU_DATA.MEALS.map((item, i) => <option key={i} value={i}>{item.name}</option>)}
            </select>
          </div>

          <div style={styles.selectWrapper}>
            <label style={styles.label}>SIDES</label>
            <select style={styles.select} onChange={(e) => handleSelect('SIDES', e.target.value)}>
              <option disabled selected>-- Select Side --</option>
              {MENU_DATA.SIDES.map((item, i) => <option key={i} value={i}>{item.name}</option>)}
            </select>
          </div>

          <div style={styles.selectWrapper}>
            <label style={styles.label}>DRINKS</label>
            <select style={styles.select} onChange={(e) => handleSelect('DRINKS', e.target.value)}>
              <option disabled selected>-- Select Drink --</option>
              {MENU_DATA.DRINKS.map((item, i) => <option key={i} value={i}>{item.name}</option>)}
            </select>
          </div>
        </div>

        {/* QUANTITY AND BILL */}
        <div style={styles.billBar}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>ORDER QUANTITY</label>
            <input type="number" style={styles.qtyInput} value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} />
          </div>
          <div style={{ flex: 2, textAlign: 'right' }}>
            <div style={styles.itemShowcase}>{selectedItem.name}</div>
            <div style={styles.priceShowcase}>TOTAL: ${selectedItem.price * qty}</div>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <div style={styles.contentGrid}>
          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>👨‍🍳 ASSEMBLY LIST</h3>
            {Object.entries(selectedItem.assembled).map(([name, q], i) => (
              <div key={i} style={styles.listCard}>
                <span style={styles.qtyBig}>{q * qty}x</span>
                <span style={styles.nameBig}>{name}</span>
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <h3 style={styles.sectionHeader}>📦 FRIDGE LIST</h3>
            <div style={styles.fridgeGrid}>
              {Object.entries(selectedItem.ingredients).map(([name, q], i) => (
                <div key={i} style={styles.fridgeItem}>
                  <span style={styles.qtySmall}>{q * qty}</span>
                  <span style={styles.nameSmall}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { background: '#000', minHeight: '100vh', padding: '20px', fontFamily: 'monospace', color: '#fff' },
  card: { background: '#111', padding: '25px', borderRadius: '12px', maxWidth: '1000px', margin: '0 auto', border: '1px solid #333' },
  title: { color: '#ffcc00', textAlign: 'center', marginBottom: '25px', borderBottom: '2px solid #ffcc00', paddingBottom: '10px' },
  selectionGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px' },
  selectWrapper: { display: 'flex', flexDirection: 'column' },
  label: { fontSize: '0.7rem', color: '#888', marginBottom: '5px', fontWeight: 'bold' },
  select: { padding: '10px', background: '#222', color: '#fff', border: '1px solid #444', borderRadius: '4px', cursor: 'pointer' },
  billBar: { display: 'flex', background: '#1a1a1a', padding: '20px', borderRadius: '8px', marginBottom: '25px', alignItems: 'center', border: '1px solid #333' },
  qtyInput: { width: '80px', padding: '10px', background: '#333', color: '#ffcc00', border: 'none', borderRadius: '4px', fontSize: '1.2rem', fontWeight: 'bold' },
  itemShowcase: { color: '#ffcc00', fontSize: '1.2rem', fontWeight: 'bold' },
  priceShowcase: { color: '#4caf50', fontSize: '1.8rem', fontWeight: 'bold' },
  contentGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' },
  sectionHeader: { fontSize: '0.8rem', color: '#666', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '15px' },
  listCard: { background: '#222', padding: '15px', borderRadius: '8px', borderLeft: '5px solid #ffcc00', display: 'flex', alignItems: 'center', marginBottom: '10px' },
  qtyBig: { fontSize: '2rem', fontWeight: 'bold', color: '#ffcc00', marginRight: '15px' },
  nameBig: { fontSize: '1.1rem', color: '#ddd', textTransform: 'uppercase' },
  fridgeGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  fridgeItem: { background: '#161616', padding: '10px', borderRadius: '4px', display: 'flex', alignItems: 'center' },
  qtySmall: { color: '#ffcc00', fontWeight: 'bold', marginRight: '10px', fontSize: '1.1rem' },
  nameSmall: { color: '#888', fontSize: '0.8rem' }
};

export default App;