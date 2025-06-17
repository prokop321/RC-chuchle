import {
  addDoc as aD,
  setDoc,
  collection,
  Timestamp,
  doc,
  getDoc as gTF,
  updateDoc as uD,
  getDocs as gDs,
  deleteDoc as dD,
  orderBy,
  query,
  where,
  limit,
  onSnapshot,
} from "firebase/firestore";

import type {
  WhereFilterOp,
  QueryFieldFilterConstraint,
  QueryOrderByConstraint,
  QueryLimitConstraint,
  DocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";

import { db } from "./config";

export const addDoc = async (
  collectionNames: string[],
  data: object,
  docID?: string,
) => {
  if (!docID) {
    const docInfo = await aD(
      collection(db, collectionNames[0], ...collectionNames.slice(1)),
      {
        ...data,
      },
    );

    return docInfo.id;
  } else {
    await setDoc(
      doc(db, collectionNames[0], ...collectionNames.slice(1), docID),
      {
        ...data,
      },
    );

    return docID;
  }
};

export const getDoc = async (
  collectionNames: string[],
  docID: string,
  update?: (
    docSnap:
      | {
          data: DocumentData;
          collection: string[];
          docID: string;
          exists: true;
        }
      | { collection: string[]; docID: string; exists: false },
  ) => void,
): Promise<
  | { data: DocumentData; collection: string[]; docID: string; exists: true }
  | { collection: string[]; docID: string; exists: false }
> => {
  const docR = doc(db, collectionNames[0], ...collectionNames.slice(1), docID);
  if (update) {
    return new Promise(async (resolve) => {
      onSnapshot(
        docR,
        (docSnap) => {
          if (docSnap.exists()) {
            update({
              data: docSnap.data(),
              collection: collectionNames,
              docID,
              exists: true,
            });
            resolve({
              data: docSnap.data(),
              collection: collectionNames,
              docID,
              exists: true,
            });
          } else {
            update({
              collection: collectionNames,
              docID,
              exists: false,
            });

            resolve({
              collection: collectionNames,
              docID,
              exists: false,
            });
          }
        },
        (error) => {
          resolve({
            collection: collectionNames,
            docID,
            exists: false,
          });
          update &&
            update({
              collection: collectionNames,
              docID,
              exists: false,
            });
        },
      );
    });
  } else {
    const docSnap = await gTF(docR);

    if (docSnap.exists()) {
      return {
        data: docSnap.data(),
        collection: collectionNames,
        docID,
        exists: true,
      };
    } else {
      return {
        collection: collectionNames,
        docID,
        exists: false,
      };
    }
  }
};

export const getDocs = async (
  collectionNames: string[],
  querySearch?: {
    orderBy?: { field: string; direction?: "asc" | "desc" };
    where?: { field: string; operator: WhereFilterOp; value: string };
    limit?: number;
  },
): Promise<{ docID: string; data: DocumentData }[]> => {
  if (querySearch) {
    const arr: (
      | QueryFieldFilterConstraint
      | QueryOrderByConstraint
      | QueryLimitConstraint
    )[] = [];

    if (querySearch.orderBy) {
      arr.push(
        orderBy(querySearch.orderBy.field, querySearch.orderBy.direction),
      );
    }

    if (querySearch.where) {
      arr.push(
        where(
          querySearch.where.field,
          querySearch.where.operator,
          querySearch.where.value,
        ),
      );
    }
    if (querySearch.limit) {
      arr.push(limit(querySearch.limit));
    }

    const q = query(
      collection(db, collectionNames[0], ...collectionNames.slice(1)),
      ...arr,
    );
    const querySnapshot = await gDs(q);
    const dcs: { docID: string; data: DocumentData }[] = [];
    querySnapshot.forEach((doc) => {
      dcs.push({ data: doc.data(), docID: doc.id });
    });
    return dcs;
  }

  const querySnapshot = await gDs(
    collection(db, collectionNames[0], ...collectionNames.slice(1)),
  );
  const dcs: any[] = [];
  querySnapshot.forEach((doc) => {
    dcs.push({ ...doc.data(), _id: doc.id });
  });
  return dcs;
};

export const updateDoc = async (
  collectionNames: string[],
  data: object,
  docID: string,
) => {
  await uD(doc(db, collectionNames[0], ...collectionNames.slice(1), docID), {
    ...data,
  });
};

export const deleteDoc = async (collectionNames: string[], docID: string) => {
  await dD(doc(db, collectionNames[0], ...collectionNames.slice(1), docID));
};
