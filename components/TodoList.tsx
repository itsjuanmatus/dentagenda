import { db } from '../firebase';
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  addDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, 'todos');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot: any) => {
      setTodos(
        querySnapshot.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );
    });
    return unsubscribe;
  }, []);

  const [todo, setTodo] = useState({ title: '' });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const collectionRef = collection(db, 'todos');
    await addDoc(collectionRef, { ...todo });
    setTodo({ title: '' });
  };

  return (
    <div>
      {todos.map((todo: any) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
      <form onSubmit={onSubmit} id="todo-list">
        <input
          type="text"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <button type="submit" form="todo-list">
          Add
        </button>
      </form>
    </div>
  );
};
export default TodoList;
