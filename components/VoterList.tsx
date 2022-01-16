import React, { ReactElement } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc, getFirestore } from 'firebase/firestore';
import { app } from '../firebase/clientApp';

interface Props {
  // id is the id of the vote document
  // (which is also the uid of the user, and the name of the user document for that user)
  id: string;
  vote: string;
}

export default function VoterList({ id, vote }: Props): ReactElement {
  const db = getFirestore(app);

  const [value, loading, error] = useDocument(doc(db, 'users', id));
  return (
    <div
      style={{
        maxWidth: '320px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <img
        style={{
          borderRadius: '50%',
          maxHeight: '48px',
          marginTop: '8px',
          marginRight: '8px',
        }}
        src={value?.data()?.photoURL}
      />
      <div>
        <h4 style={{ marginBottom: 0 }}>{value?.data()?.displayName}</h4>
        <h4 style={{ marginTop: 0 }}>
          Voted: {vote === 'yes' ? '✔️🍍' : '❌🍍'}
        </h4>
      </div>
    </div>
  );
}
