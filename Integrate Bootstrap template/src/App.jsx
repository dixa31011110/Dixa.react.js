import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function BootstrapLayout() {
  return (

    <Container>
      <Row>

        <Row>
        <Col>
          <h1>Hello Fenty</h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta optio rerum fugit eligendi impedit laborum possimus culpa molestiae odio doloribus ut similique, inventore veniam ratione perspiciatis delectus laudantium atque!</p> */}
          </Col>

          <Col>
             <img src="https://static.vecteezy.com/system/resources/previews/036/459/987/original/ai-generated-asian-indian-woman-business-professional-portrait-png.png" alt="" height={"500px"} width={"auto"}/> 
            
          </Col>
        </Row>

      </Row>
    </Container>

  );
}

export default BootstrapLayout;
