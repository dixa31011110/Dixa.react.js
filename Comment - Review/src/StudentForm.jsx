import React, { useState } from 'react';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        grade: 'Coach',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
            <div><br />
                <label style={{ fontFamily: "monospace" }}>Full Name:</label><br />
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div>
                <label style={{ fontFamily: "monospace" }}>Email:</label><br />
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label style={{ fontFamily: "monospace" }}>Password:</label><br />
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div><br />
                <label style={{ fontFamily: "monospace" }}>select-Brand:</label>
                <select name="grade" value={formData.grade} onChange={handleChange}>
                    <option value="Coach">Coach</option>
                    <option value="Gucci">Gucci</option>
                    <option value="Prada">Prada</option>
                    <option value="Dior">Dior</option>
                </select><br /><br />
            </div>
            <div>
                <label style={{ fontFamily: "monospace" }}>Gender:</label>
                <div>
                    <input type="radio" id="male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
                    <label style={{ fontFamily: "monospace" }}>Male</label>
                </div>
                <div>
                    <input type="radio" id="female" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
                    <label style={{ fontFamily: "monospace" }}>Female</label>
                </div>
                <div>
                    <input type="radio" id="other" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} />
                    <label style={{ fontFamily: "monospace" }}>Other</label>
                </div>
            </div><br />
            <button style={{ padding: "8px", border: "0px", borderRadius: "5px", backgroundColor: "grey", color: "ButtonShadow" }} type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
