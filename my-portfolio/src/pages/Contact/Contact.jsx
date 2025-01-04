import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''   
        });

    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
        setErrors(prev => ({
            ...prev,
            [name]: '' 
        }));
      }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouchedFields(prev => ({
            ...prev,
            [name]: true
        }));

        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';
        if (!value.trim()) {
            error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else if (name === 'email' && !validateEmail(value)) {
            error = 'Please enter a valid email address';
        }

        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        Object.keys(formData).forEach(key => {
            validateField(key, formData[key]);
            if (!formData[key].trim()) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });

        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);

        setFormData({
                name: '',
                email: '',
                message: '',
            });
            setTouchedFields({});
        }
    };

    return (
    <div className="max-w-2x1 mx-auto">
        <h2 className="text-3x1 font-bold mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
    <div>
        <label
                htmlFor="name"
                className="block tex-sm font-medium tex-gray-7090 mb-1"
        >
            Name       
        </label>
        <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
                  ${errors.name && touchedFields.name
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-blue-200'}`}
        />
            {errors.name && touchedFields.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
    </div>

            {/* Email Field*/ }
    <div>
        <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Email
        </label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
                ${errors.email && touchedFields.email
                ? 'border-red-500 focus:red-200'
                : 'border-gray-300 focus:ring-blue-200'}`}
        />
        {errors.email && touchedFields.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
    </div>

            {/* Message Field */}
    <div>
        <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            Message
        </label>
        <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
              ${errors.message && touchedFields.message 
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:ring-blue-200'}`}
        />
        {errors.message && touchedFields.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
    </div>

        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600
                transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Send Message
            </button>
        </form>
    </div>
    );
};

export default Contact;
          
  