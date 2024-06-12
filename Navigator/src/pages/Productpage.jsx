import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';


const Productpage = () => {
  const [Productdata, setproductdata] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
      .then((data) => {
        setproductdata(data)
        setloading(false)
      })
      .catch((err) => console.log(err))
  }, [])
  return loading ? <Spinner animation="grow" size='xl' />
    : (
      <div style={{ margin: "50px",textAlign: "center"  }}>
        <h1 style={{ fontFamily: "fantasy", color: "teal", margin: "25px",textAlign: "center"  }}> Our-Product</h1>

        <div style={{ display: "flex", justifyContent: "space-evenly",flexWrap:"wrap"}}>
        
          {Productdata.map((el) =>( 
            <Link to={`/Descriptionpage/${el.id}`} key={el.id}>
            <Card style={{ width: '18rem',marginTop:"30px" }}>
            <Card.Img style={{height:"300px"}} variant="top" src={el.image} />
            <Card.Body style={{height:"180px"}}>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>
                {el.price}
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
          ))}
        </div>
      </div>
    );
}

export default Productpage;
