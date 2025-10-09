import { FormData } from "@/dto/form";
import React, { useState } from "react";
import styles from "../styles/form.module.css";
import { h1 } from "framer-motion/client";

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    SurName: "",
    age: 0,
    contactNumber: 0,
    email: "",
    address: {
      street: "",
      postalCode: "",
      city: "",
      country: "",
    },
  });

  // State to handle errors
  const [errors, setErrors] = useState<string[]>([]);

  //2 Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form data array[string]
  const validateForm = (): string[] => {
    const errors: string[] = [];
    if (!formData.name) errors.push("Name is required");
    if (!formData.SurName) errors.push("Surname is required");
    if (formData.age <= 0) errors.push("Age must be a positive number");
    if (!formData.email.includes("@")) errors.push("Invalid email address");
    if (!formData.address.street) errors.push("Street is required");
    if (!formData.address.postalCode) errors.push("Postal code is required");
    if (!formData.address.city) errors.push("City is required");
    if (!formData.address.country) errors.push("Country is required");

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully");
    }
    console.log("DATA SUBMITTED");
    console.log(`Name: ${formData.name} \nSurName: ${formData.SurName} \nAge: ${formData.age} \nEmail: ${formData.email}\nContact Number: ${formData.contactNumber}\nAddress: ${formData.address}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
     <h1 className={styles.h1} >FORM</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div>
        <label>Surname: </label>
        <input
          type="text"
          name="SurName"
          value={formData.SurName}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div>
        <label>Contact Number: </label>
        <input
          type="number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div>
        <label>Street: </label>
        <input
          className={styles.input}
          type="text"
          name="street"
          value={formData.address.street}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                street: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Postal Code: </label>
        <input
          className={styles.input}
          type="text"
          name="postalCode"
          value={formData.address.postalCode}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                postalCode: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>City: </label>
        <input
          className={styles.input}
          type="text"
          name="city"
          value={formData.address.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                city: e.target.value,
              },
            })
          }
        />
      </div>
      <div>
        <label>Country: </label>
        <input
          className={styles.input}
          type="text"
          name="country"
          value={formData.address.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: {
                ...formData.address,
                country: e.target.value,
              },
            })
          }
        />
      </div>
      <button type="submit" className={styles.button} >Submit</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default UserForm;
