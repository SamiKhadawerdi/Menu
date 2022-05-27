import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Category = ({ filterbycategory,allcategory }) => {
  const onFilter = (cat) => {
    filterbycategory(cat)
  }
  return (
    <Row className='my-2 mb-5'>
      <Col sm="12" className='d-flex justify-content-center' >
      {
        allcategory.length>=1 ? (allcategory.map((cat)=>{
          return(
            <div >
            <button onClick={() => onFilter(cat)} className='btn mx-1 '>{cat}</button>
          </div>
          )
        })) : <h4>لا يوجد تصنيفات</h4>
      }

      </Col>
    </Row>
  )
}

export default Category 