import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';



const Descriptionpage = () => {
    const [Productdata, setproductdata] = useState({})
    const [loading, setloading] = useState(false)

    const {id}=useParams()
   
    useEffect(() => {
        setloading(true)
        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
          .then((data) => {
            console.log(data)
            setproductdata(data)
            setloading(false);
          })
          .catch((err) => console.log(err))
      }, [])


  return (
    <div style={{ margin: "50px",textAlign: "center"  }}>
        <h1 style={{ fontFamily: "fantasy", color: "teal", margin: "25px",textAlign: "center"  }}>Choosen-Product</h1>
      <div className='d-flex justify-content-center'>
      <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src={Productdata.image} style={{height:"250px",width:"100%"}}/>
      <Card.Body>
        <Card.Title>{Productdata.title}</Card.Title>
        <Card.Text>
          {Productdata.description}
        </Card.Text>
        <Card.Text>
          {Productdata.category}
        </Card.Text>
        <Card.Text>
          {Productdata.price}
        </Card.Text>
        <Card.Text>
          {Productdata?.rating?.rate}
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
}

export default Descriptionpage;
