import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function Details(){
    const[product,setProduct]=useState({id:0,title:'',price:'',image:'',description:'',category:'',rating:{rate:0,count:0}})
    let params=useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(Response=>{
            setProduct(Response.data)
        })
    },[])
    return(
        <div>
            <h2>Product Details</h2>
            <div className="row">
                <div className="col-3">
                    <img src={product.image} width="100%" height="200" />
                </div>
                <div className="col-9">
                    <dl>
                        <dt>Title</dt>
                        <dd>{product.title}</dd>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Description</dt>
                        <dd>{product.description}</dd>
                        <dt>Category</dt>
                        <dd>{product.category}</dd>
                        
                    </dl>
                </div>

            </div>
            <Link to={`/${product.category}`}>Back to {product.category}</Link>
        </div>
    )
}