import React from 'react'
import { Table, Image } from 'react-bootstrap';
import { trash } from '../../assets/icons/admin';
import {Pagination} from '../../components/admin';
import { Link } from 'react-router-dom';
import '../../styles/admin/categories.scss';
function Payment() {
  return (
    <div className='categories_section payment_section'>
     <div className='tob_bar'>
     <h3 className='title pt-2 mb-0 pb-0'>Payments</h3>
     <div className='right_search_bar'>
      <div className='search_block'>
         <input type='text' placeholder='Search'/>
         <button type='' className='search_btn'>Search</button>
      </div>
      <div className='date_block'>
        <div className='input_wraper'>
         <label>From Date</label>
         <input type='date'/>
        </div>
        <div className='input_wraper'>
         <label>To date</label>
         <input type='date'/>
        </div>
      </div>
     </div>
    </div>
      <div className='categories_logs_section'>
      <div className='categories_logs_table comn_table'>
        <Table striped>
            <thead>
                <tr>
                <th>Payment Id</th>
                <th>Payment Mode</th>
                <th>Date</th>
                <th className='text-center'>Price</th>
                <th>Status</th>
                <th className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
               
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                <tr>
                <td>Id:123456</td>
                <td>Credit Crad</td>
                <td>14 Nov,22</td>
                <td>$1</td>
                <td>Completed</td>
                <td>
                <div className="delete_action">
                    <Link to="#" className="delete_btn">
                        <Image src={trash} className=""/>
                        </Link>
                </div>
                </td>
                </tr>
                
                
            </tbody>
        </Table>
      </div>
      <Pagination/>
      </div>
    </div>
  )
}

export default Payment;