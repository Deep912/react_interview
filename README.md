# 🛒 eShop - React eCommerce App  

## 📌 **Overview**  
This is a simple **eCommerce web application** built using **React.js, Tailwind CSS, and Context API**, designed as part of an **interview task**. The application integrates with a **mock API (`dummyjson.com`)** to fetch products, manage cart functionality, handle authentication, and support basic order processing.  

---

## 🚀 **Features**  

### ✅ **1. Authentication**  
- Users can **sign in** using a mock API.  
- User authentication is **simulated** using `dummyjson.com/users`.  
- Navbar updates based on login state.  
- Users can view their **previous orders**.  

### ✅ **2. Product Listing**  
- Fetches **product data** from `dummyjson.com/products`.  
- Displays **name, description, price, stock availability, and images**.  
- Responsive **grid layout** for listing products.  

### ✅ **3. Product Details**  
- Clicking a product **opens a detailed view**.  
- Displays **full description, price, stock, multiple images**.  
- Users can **add products to the cart**.  
- Option to navigate **back to the product list**.  

### ✅ **4. Shopping Cart**  
- **Add/remove products** from the cart.  
- Update product **quantity**.  
- Displays **total price** of cart items.  
- **Persists cart data** during page navigation.  

### ✅ **5. Checkout Process**  
- Users can **proceed to checkout** after adding items.  
- Simple form for **name, address, and payment method**.  
- Displays **success message with order ID and total price**.  

### ✅ **6. State Management**  
- **React Context API** for cart and product state.  
- Handles **add, remove, and quantity update**.  

### ✅ **7. Search & Filtering**  
- **Search bar** to find products by name.  
- **Filter by category** using a dropdown.  
- **Price range filter** (set min/max price).  
- Instant filtering with **real-time updates**.  

### ✅ **8. Responsive Design**  
- Fully **mobile-friendly** using **Tailwind CSS**.  
- Grid layout adapts to **different screen sizes**.  

### ✅ **9. UI/UX Improvements**  
- **Clean design** with Tailwind CSS.  
- **Loading indicators** for API calls.  
- **Easy navigation** with React Router.  

---

## ⚙️ **Tech Stack**  
- **Frontend:** React.js (Vite)  
- **State Management:** Context API  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **API Requests:** Axios  
- **Mock API:** `dummyjson.com`  

---


## 🚀 **Setup & Installation**  
1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/your-username/eshop.git
cd eshop
```

2️⃣ **Install Dependencies**  
```bash
npm install
```

3️⃣ **Start the Development Server**  
```bash
npm run dev
```

4️⃣ **Open in Browser**  
The app runs at **`http://localhost:5173/`** by default.  

---
