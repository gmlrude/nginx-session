import Form from '../components/Form';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center">
      <Navbar />
      <Form />
    </div>
  );
};

export default Main;
