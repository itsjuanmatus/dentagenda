import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MobileNavbar from '../components/Layout/MobileNavbar';
import TodoList from '../components/TodoList';
import { useAuth } from '../services/hooks/auth';

const Home: NextPage = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <>
        <h1>Not logged in</h1>
      </>
    );
  } else return (
      <div className="min-h-screen w-full bg-gray-200">
        <Head>
          <title>Medagenda</title>
          <meta name="description" content="A tool for Health Professionals" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          {/** Desktop Navbar */}
          <nav className="bg-blue-500 w-full top-0 h-16 lg:flex items-center px-10 justify-between hidden">
            <h3 className="text-white font-bold text-2xl">MedAgenda</h3>
            <ul className="flex items-center space-x-5">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  MedFiles
                </a>
              </li>
            </ul>
          </nav>
          <TodoList />
          {/** Mobile Navbar */}
          <MobileNavbar />
        </main>
      </div>
    );
};

export default Home;
