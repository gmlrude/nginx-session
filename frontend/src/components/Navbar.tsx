import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="flex w-[100vw] h-[50px] items-center gap-[20px] bg-blue-400 text-white pl-[30px] text-[1.5rem]">
        <Link to="/">Home</Link>
        <Link to="/my">Mypage</Link>
      </div>
    </div>
  );
};

export default Navbar;
