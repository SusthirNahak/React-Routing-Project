import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function MenFashion(){
    const[menfashion,setMenFashion] = useState([{id:0,title:'',price:'',image:'',description:'',category:'',rating:{rate:0,count:0}}])

    useEffect(()=>{},[
      //at the time of mounting what action should perform 
      axios.get('https://fakestoreapi.com/products/category/men\'s clothing')
      .then(response =>{
        setMenFashion(response.data);
      })
     
    ]);

    return(
        <div className="d-flex flex-wrap">
             {
                menfashion.map(product=>
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={product.image} height="130" className="card-img-top" />
                        <div className="card-header" style={{height:'120px'}}>{product.title}

                        </div>
                        <div className="card-footer">
                            <Link to={`/details/${product.id}`} className="btn btn-dark w-100">Details</Link>
                        </div>
                    </div>
                )
             }
        </div>
    )
}