import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import userService from '../services/userService';


export const userView = () => {
  const [user, setUser] = useState({
    nom: ""
  });

  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    userService.get(id)
      .then((res)=>{ 
        setUser(res.data);
      })
      .catch(e => { console.log(e); });
  }
  
  return (
    <div className="section produit-info text-left">
        <div className="container">
        	<div className="row">
						<div className="col-md-6" >
              <Link className="primary-btn mb-2" to="/vetements"> back to Home</Link>
						</div>
						<div className="col-md-5">
							<div className="User-details">
								<h2 className="User-name mt-5">{user.nomUser}</h2>
					
							</div>
						</div>

				
					</div>
 				</div>
		</div>
  )
}
