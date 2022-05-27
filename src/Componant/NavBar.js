import React, { useState } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap'


const NavBar = ({filterbysearch}) => {
  const [SerarchValue, setSearchValue] = useState("")
  const onSearch=()=>{
    
    filterbysearch(SerarchValue)
    setSearchValue("")
  }
  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand  href="#">
          <div className='brand-color'>
          مطعم جديد
          </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text "
                placeholder="بحث..."
                className="mx-2" 
                onChange={(e)=>setSearchValue(e.target.value)}
                value={SerarchValue}
              />
              <Button onClick={()=>onSearch()} className='btn-search' >بحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar