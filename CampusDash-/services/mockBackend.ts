import { User, Product, CartItem, Order } from '../types';
import { auth, db } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  query,
  where,
  Timestamp,
  doc,
  getDoc
} from 'firebase/firestore';

export const mockBackend = {
  // --- AUTHENTICATION ---

  async login(email: string, password: string): Promise<User> {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Update last login
    try {
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        lastLogin: Timestamp.now()
      }, { merge: true });
    } catch (e) {
      console.error("Error updating user login stats", e);
    }

    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName || email.split('@')[0],
      email: firebaseUser.email || '',
    };
  },

  async signup(name: string, email: string, password: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Update profile with name
    await updateProfile(firebaseUser, { displayName: name });

    // Create user document in Firestore
    try {
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        name,
        email,
        createdAt: Timestamp.now(),
        role: 'student' // Default role
      });
    } catch (e) {
      console.error("Error creating user document", e);
      alert("Error saving user to database: " + e);
    }

    return {
      id: firebaseUser.uid,
      name: name,
      email: firebaseUser.email || '',
    };
  },

  async logout(): Promise<void> {
    await signOut(auth);
  },

  getCurrentUser(): User | null {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) return null;

    return {
      id: firebaseUser.uid,
      name: firebaseUser.displayName || '',
      email: firebaseUser.email || '',
    };
  },

  async fetchCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        unsubscribe();
        if (firebaseUser) {
          resolve({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
          });
        } else {
          resolve(null);
        }
      });
    });
  },

  // --- PRODUCT & INVENTORY MANAGEMENT ---

  async getProducts(): Promise<Product[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Product));
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  // --- ORDER PROCESSING & PAYMENT ---

  async placeOrder(
    userId: string,
    items: CartItem[],
    deliveryDetails: { hostel: string; room: string },
    totalAmount: number
  ): Promise<Order> {
    const orderData = {
      userId,
      items,
      deliveryDetails,
      totalAmount,
      status: 'pending',
      createdAt: Timestamp.now()
    };

    const docRef = await addDoc(collection(db, 'orders'), orderData);

    return {
      id: docRef.id,
      ...orderData,
      createdAt: new Date().toISOString() // Convert for frontend
    } as unknown as Order;
  },

  async getUserOrders(userId: string): Promise<Order[]> {
    try {
      const q = query(collection(db, 'orders'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.().toISOString() || new Date().toISOString()
        };
      }) as unknown as Order[];
    } catch (error) {
      console.error("Error fetching orders:", error);
      return [];
    }
  },

  // --- ANALYTICS (For Admin) ---
  async getOrderStats() {
    // Placeholder for now
    return {
      totalOrders: 0,
      totalRevenue: 0,
      activeUsers: 0
    };
  }
};