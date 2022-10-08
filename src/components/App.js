import React from 'react';
import './App.css';
import Form from './Form';

function App() {
  return (
    
        <div class="container login-container">
            <img class="triangleA" src="https://res.cloudinary.com/procraftstudio/image/upload/v1613965232/triangleA_lwqhnl.png" alt='Onestop triangle' />
          <div class="row">
            <div class="col-md-6 welcome_auth">
                <div class="auth_welcome">
                   <div className='container'>
                   <img src='https://cdn4.vectorstock.com/i/1000x1000/49/83/forgot-password-concept-flat-vector-33384983.jpg' style={{height:230}}/>
                   </div>
              
                </div>
            </div>         
            
            <Form />
          </div>
        </div>


   
    
   
  );
}

export default App;
