import React, { useState } from 'react'

const AddJob = ({addJob}) => {

   const [formData,setFormData] = useState({
    company_name : "",
    category: "",
    job_title: "",
    job_description: "",
    responsibilities: ""


   });

   function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => addJob(data))

    }

  return (
    <div>
       <form onSubmit={handleSubmit} className="form">
                <div className='form-item'>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.company_name}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Category:
                        <input
                            type="text"
                            name="author"
                            value={formData.category}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Job Tittle:
                        <input
                            type="url"
                            name="image"
                            value={formData.job_title}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Job Description:
                        <input
                            type="number"
                            name="year"
                            value={formData.job_description}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <div className='form-item'>
                    <label>
                        Responsibilities:
                        <input
                            type="text"
                            name="category"
                            value={formData.responsibilities}
                            onChange={handleChange}

                        />
                    </label>
                </div>
                <button type="submit" >Add Job</button>
            </form> 
    </div>
  )
}

export default AddJob