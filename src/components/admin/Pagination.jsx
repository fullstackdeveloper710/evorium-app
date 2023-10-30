import React from 'react';
import '../../styles/admin/pagination.scss';

function Pagination() {
  return (
    <div className='pagination_section'>
       <div className='pagination_link'>
          <button className='pre_btn'>Previous</button>
          <button className='pagination_btn active'>1</button>
          <button className='pagination_btn'>2</button>
          <button className='pagination_btn'>3</button>
          <button className='pagination_btn'>4</button>
          <button className='next_btn'>Next</button>
       </div>
    </div>
  )
}

export default Pagination

