import type { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '../firebase/clientApp';
import { getAuth, signOut } from 'firebase/auth';
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  addDoc,
} from 'firebase/firestore';
import Auth from '../components/Auth';
import VoterList from '../components/VoterList';

const Home: NextPage = () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  console.log('Loading:', loading, 'User:', user);

  const db = getFirestore(app);

  const [votes, votesLoading, votesError] = useCollection(
    collection(db, 'votes'),
    {},
  );

  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }

  // Create document function
  const addVoteDocument = async (vote: string) => {
    await setDoc(doc(db, 'votes', `${user?.uid}`), {
      vote,
    });
  };

  return (
    <div className="w-full  min-h-screen grid place-items-center">
      {loading && <h4>Loading</h4>}
      {!user && <Auth />}

      <div>
        <h1>Pineapple on Pizza?</h1>

        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <button
            style={{ fontSize: 32, marginRight: 8 }}
            onClick={() => addVoteDocument('yes')}
          >
            ✔️🍍🍕
          </button>
          <h3>
            Pineapple Lovers:{' '}
            {votes?.docs?.filter((doc) => doc.data().vote === 'yes').length}
          </h3>
        </div>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <button
            style={{ fontSize: 32, marginRight: 8 }}
            onClick={() => addVoteDocument('no')}
          >
            ❌🍍🍕
          </button>
          <h3>
            Pineapple Haters:{' '}
            {votes?.docs?.filter((doc) => doc.data().vote === 'no').length}
          </h3>
        </div>

        <div style={{ marginTop: '64px' }}>
          <h3>Voters:</h3>
          <div
            style={{
              maxHeight: '320px',
              overflowY: 'auto',
              width: '240px',
            }}
          >
            {votes?.docs?.map((doc) => (
              <>
                <VoterList id={doc.id} vote={doc.data().vote} key={doc.id} />
              </>
            ))}
          </div>
        </div>
        <button onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;
