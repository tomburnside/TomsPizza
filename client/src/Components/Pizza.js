import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../actions/cartActions'

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  function addtocart(){
    dispatch(addToCart(pizza, quantity, varient))
  }

  return (
    <div
     // style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          alt="Pizza"
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setvarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          >
            >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: ${pizza.prices[0][varient] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img alt="Pizza" src={pizza.image} className='img-fluid' style={{height: '400px'}}/>
            <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}
