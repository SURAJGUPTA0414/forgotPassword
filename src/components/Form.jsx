import React from "react";

function Form(){
    return(
        <div className="container-fluid " style={{display:"inline"}} >
            <div class="col-md-6 login-form">,
                <div class="login_form_in">
                    <div class="auth_branding">
                        <a class="auth_branding_in" href="https://mdbootstrap.com/">
                          <i class="fab fa-mdb fa-2x auth_welcome"></i>
                      </a>
                    </div>
                  <h1 class="auth_title text-left">Password Reset</h1>
                  <form>
                    <div class="alert alert-success bg-soft-primary border-0" role="alert">
                        Enter your email address and we'll send you an email with instructions to reset your password.
                    </div>                    
                    <div class="form-group">
                      <input type="email" class="form-control" name="email" placeholder="Email Address" />
                    </div>
                    <div class="form-group">
                      <button type="button" class="btn btn-primary btn-lg btn-block">Reset Password</button>
                    </div>
                    <div class="form-group other_auth_links">
                        <a class="" href="#">Login</a>
                        <a class="" href="#">Register</a>
                    </div>
                  </form>
                </div>
            </div>       
        </div>
    )
}

export default Form;