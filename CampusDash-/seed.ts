import { db } from './firebase';
import { collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { PRODUCTS } from './constants';

export const seedDatabase = async () => {
    console.log("Seeding database...");
    try {
        // 1. Delete existing products to prevent duplicates
        const productsRef = collection(db, 'products');
        const snapshot = await getDocs(productsRef);

        console.log(`Found ${snapshot.size} existing products. Deleting...`);
        const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
        await Promise.all(deletePromises);
        console.log("Existing products deleted.");

        // 2. Add new products
        for (const product of PRODUCTS) {
            // Use a deterministic ID based on the name to ensure consistency
            const docId = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            // Update the product object with this ID so the frontend uses it too
            const productWithId = { ...product, id: docId };

            await setDoc(doc(db, 'products', docId), productWithId);
            console.log(`Added ${product.name}`);
        }
        console.log("Database seeded successfully!");
        alert("Database seeded successfully! Refresh the page to see new products.");
    } catch (error) {
        console.error("Error seeding database:", error);
        alert("Error seeding database. Check console.");
    }
};
