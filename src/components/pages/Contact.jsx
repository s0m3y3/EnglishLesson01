export default function Contact() {
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4"></h3>

            <div className="d-flex justify-content-between">
                {/* First Column */}
                <div className="contact-info">
                    <h4>Contact Information:</h4>
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

                {/* Second Column */}
                <div className="office-info">
                    <h4>Office Location:</h4>
                    <p>123 Main St,</p>
                    <p>Cityville, ST 12345</p>
                    <h4>Phone Number:</h4>
                    <p>(123) 456-7890</p>
                </div>
            </div>
        </div>
    );
}
