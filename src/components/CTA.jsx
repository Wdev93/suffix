import React, { useState } from 'react';
import './cta.css';

const CTA = () => {
    const [email, setEmail] = useState([]);
    console.log(email)

    const updatedNews = () => {
        alert("You have subscribed for latest and Updated News");
    }

    return (
        <>
            <div className="container">
                <div className='suffix__cta'>
                    <div className="suffix__cta__col-left">
                        <h2>Get your updated news</h2>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                    </div>
                    <div className="suffix__cta__col-right">
                        <label htmlFor="">
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email address"
                                type="email"
                                name="email"
                                autoComplete='off'
                            />
                            <button className='col-right__btn' onClick={updatedNews} type='submit'>Send</button>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CTA;