import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Button } from 'bootstrap'


function Bootstrap() {
  return (
    <div>
      <div>
        <Row className='text-left m-5'>
            <Col xs={6} lg={6} md={6} sm={6} >
            <h1>Hi Hi Imma Dixa Patel</h1>
            <br />
            <h5 className='text-secondary'>
                A web designer from Surat. I convert custom
                <br />web designer to bootstrap templates.
            </h5>
            <br />
            <h5 className='text-secondary'>I make YOUTUBE videos and write Blog.</h5>
            <br />
            <Button type='button' className="btn btn-primary">I'm AVAILABLE</Button>
            <br />
            <br />
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Bootstrap
