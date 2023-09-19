import React from 'react';

const Home = () => {
    return (
        <>
            <div>
                <div><img src="" alt="" /></div>
                <div>
                    <div>
                        Join the millions learning to code
                        with Codecademy for free
                    </div>
                    <form action="">
                        <p>Email</p>
                        <input type="text" />
                        <p>Password</p>
                        <input type="text" />
                        <button type='submit'>Sign up</button>
                    </form>
                    <p>
                        By signing up for Codecademy, you agree to Codecademy's
                        Terms of Service & Privacy Policy.
                    </p>
                    <h5>Or sign up using:</h5>
                    <div>
                        <div>google</div>
                        <div>facebook</div>
                        <div>linkedin</div>
                        <div>github</div>
                        <div>apple</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;