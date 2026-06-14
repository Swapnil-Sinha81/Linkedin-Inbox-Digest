
import React from 'react';
import bgImg from '../assets/Space Img.jpg';
import { useState } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js'; // Import CryptoJS library

function Form() {
  // form states
    const [name, setName] = useState('');
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  // submit event
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, profile, email, password);
    alert('Your response has been recorded. Stay tuned :))');

    // Encrypt the password
    const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        'your-encryption-key'
    ).toString();

    // data state
    const data = {
        Name: name,
        Profile: profile,
        Email: email,
        Password: encryptedPassword,
    };

    axios.post(
        'https://sheet.best/api/sheets/226fa57b-272b-4255-8dfb-2459538883b6',data)
    .then((response) => {
        console.log(response);

        // clearing form fields
        setName('');
        setProfile('');
        setEmail('');
        setPassword('');
    });
};

    return (
        <section>
        <div className="register">
            <div className="col-1">
            <h2>LinkedIn Data</h2>
            <span>Submit your data in order to receive the notifications</span>

            <form
                id="form"
                autoComplete="off"
                className="flex flex-col"
                onSubmit={handleSubmit}
            >
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                ></input>

                <input
                type="url"
                id="profile"
                name="profile"
                placeholder="LinkedIn Profile URL"
                required
                onChange={(e) => setProfile(e.target.value)}
                value={profile}
                ></input>

                <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ></input>

                <input
                type="password"
                name="Your password"
                id="password"
                placeholder="Your Password"
                resize="none"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                ></input>

                <button className="btn" name="submit" type="Submit">
                Submit
                </button>
            </form>
            </div>
            <div className="col-2">
            <img src={bgImg} alt="" />
            </div>
        </div>
        </section>
    );
}

export default Form;
