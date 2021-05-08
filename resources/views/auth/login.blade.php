<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Login Form</title>

    <style>
    
    
    @import url(https://fonts.googleapis.com/css?family=Roboto:300);

    .login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    }
    .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }
    .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    }
    .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    }
    .form button:hover,.form button:active,.form button:focus {
    background: #43A047;
    }
    .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
    }
    .form .message a {
    color: #4CAF50;
    text-decoration: none;
    }
    .form .register-form {
    display: none;
    }
    .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
    }
    .container:before, .container:after {
    content: "";
    display: block;
    clear: both;
    }
    .container .info {
    margin: 50px auto;
    text-align: center;
    }
    .container .info h1 {
    margin: 0 0 15px;
    padding: 0;
    font-size: 36px;
    font-weight: 300;
    color: #1a1a1a;
    }
    .container .info span {
    color: #4d4d4d;
    font-size: 12px;
    }
    .container .info span a {
    color: #000000;
    text-decoration: none;
    }
    .container .info span .fa {
    color: #EF3B3A;
    }
    body {
    background: #76b852; /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #76b852, #8DC26F);
    background: -moz-linear-gradient(right, #76b852, #8DC26F);
    background: -o-linear-gradient(right, #76b852, #8DC26F);
    background: linear-gradient(to left, #76b852, #8DC26F);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;      
    }
    </style>

</head>
<body>
    
        <div class="login-page">
        <h1>  Creative Login Form</h1>

        <div class="form">
        <form class="login-form" method="POST" action="{{ route('login') }}">
        @csrf            
            <div>
                
                <input id="email" type="email" placeholder="Enter Your Email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus/>
            
            
                @if ($errors->has('email'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif

            </div>
            <div class="">
                <input id="password" type="password" placeholder="Enter Your Password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                @if ($errors->has('password'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                @endif
            </div>

            <button>login</button>
        </form>

            <p class="message">Not registered? <a href="{{route('register')}}">Create an account</a></p>
        </div>
        </div>

    <script>
    
    $('.message a').click(function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        });

    </script>

</body>
</html>