import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-center mt-4">
      <nav className='bg-bgDark py-4 px-8 shadow-xl rounded-xl border border-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-200'>
        <h1 className='text-center text-3xl font-bold text-white text-outline-black'>
          SkillSummit
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;
