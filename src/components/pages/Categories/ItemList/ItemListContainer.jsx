import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { db } from "../../../../../firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "Products");

    getDocs(itemCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);
  return <ItemList products={products} />;
};

export default ItemListContainer;
