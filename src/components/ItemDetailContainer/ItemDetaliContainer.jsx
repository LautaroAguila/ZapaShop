import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetaliContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, 'products', productId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setItem({ ...docSnap.data(), id: docSnap.id });
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    return loading ? <Spinner /> : item && <ItemDetail item={item} />;
};

export default ItemDetaliContainer;
