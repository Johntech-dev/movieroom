import React from 'react'

function Footer() {
  return (
    <div>
       <div className='flex gap-[140px] items-center justify-center mt-20'>
        <a href='https://web.facebook.com/profile.php?id=100089760934929'><img src='facebook.png' /></a>
        <a href='https://www.instagram.com/alinmolayanjohn/'><img src='instagram.png' /></a>
        <a href='https://twitter.com/Johntech273111'><img src='twitter.png' /></a>
       </div>
       <div className='flex gap-[120px] items-center justify-center font-bold text-center mt-10 text-[20px]' >
        <h4>Condition of use </h4>
        <h4>Privacy & Policy</h4>
        <h4>Press Room </h4>
       </div>
       <div className='flex text-center justify-center items-center font-bold mt-14 text-[20px] text-gray-500'>
        <h5>© 2023 MovieBox by Akinmolayan John  </h5>
       </div>
    </div>
  )
}

export default Footer
