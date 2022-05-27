import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Header = () => {
    return (
        <Row>
            <Col sm="12" className="justify-content-center text-center">
                <div className='title '>    قائمة طعام</div>
                <div className='justify-content-center d-flex'>
                    <span className='underline'></span>
                </div>
            </Col>
        </Row>
    )
}

export default Header