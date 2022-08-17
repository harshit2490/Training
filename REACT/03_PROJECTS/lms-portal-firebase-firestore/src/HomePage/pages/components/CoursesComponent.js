import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CoursesComponent = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  // Calling API Data...
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(data);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = (id) => {
    return (
      <>
        <div>
          <div className='product-button'>
            <div className="buttons d-flex justify-content-center mb-5 mt-3">
              <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
              <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Coding</button>
              <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Web</button>
              <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Designing</button>
              <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>ML Iot's</button>
            </div>
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4">
                  <img className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 15)}...</h5>
                    <p className="card-text lead fw-bold">
                      $ {product.price}
                    </p>
                    <Link to={`/products/${product.id}`}>
                      <Button variant="outline-dark">Buy Now</Button>
                    </Link>

                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-12">
          <div className='text-center py-3'>
            <h1>Latest <span className='text-primary'>Courses</span></h1>
            <hr className="w-50 m-auto" />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default CoursesComponent