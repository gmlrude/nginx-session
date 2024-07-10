import Navbar from '../components/Navbar';
import ShowList from '../components/ShowList';

const Mypage = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center">
      <Navbar />
      <div className="flex flex-col justify-center gap-[30px] w-[500px] h-[700px] shadow-sm">
        <ShowList />
      </div>
    </div>
  );
};

export default Mypage;
