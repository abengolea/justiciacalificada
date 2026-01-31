'use client';

import { useState, useEffect } from 'react';
import { useUser, useFirebase } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

export function useAdminStatus() {
  const { user, isUserLoading: isAuthLoading } = useUser();
  const { firestore } = useFirebase();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Don't start checking until Firebase Auth has resolved.
    if (isAuthLoading) {
      return;
    }

    if (!user) {
      setIsAdmin(false);
      setIsLoading(false);
      return;
    }

    const checkAdmin = async () => {
      setIsLoading(true); // Set loading true while we fetch the doc
      try {
        const lawyerRef = doc(firestore, 'lawyers', user.uid);
        const lawyerDoc = await getDoc(lawyerRef);
        if (lawyerDoc.exists() && lawyerDoc.data().role === 'admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (e) {
        console.error("Error checking admin status:", e);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAdmin();
  }, [user, firestore, isAuthLoading]);

  return { isAdmin, isLoading: isLoading || isAuthLoading };
}
