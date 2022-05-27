import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const ItemList = ({itemsData }) => {
    return (
        <Row>
        <Zoom>
            {
                itemsData.length >= 1 ? (itemsData.map((item) => {
                    return (
                        <Col key={item.id} sm="12" className="mb-3 " >
                        <Card className='d-flex flex-row card' xs="12" style={{backgroundColor:"#f8f8f8"}} >
                            <Card.Img className='img-item' variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title className='d-flex flex-row justify-content-between'>
                                    <div className='item-title'>{item.title}</div>
                                    <div className='item-price'>{item.price}</div>
                                </Card.Title>
                                <Card.Text className='py-2 item-descr'>
                                    {item.descraption}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
        )
                })) : <h3 className='taxt-center'>لا يوجد اصناف</h3>
            }
            </Zoom>
        </Row>

    )
}

export default ItemList