// import background from "../Images/contact-background.jpeg";
import Navbar from "../Components/Navbar";

const ClientInfo = () => {
  return (
    <>
      <Navbar />
      <form>
        <h1>Client Information</h1>
        <div className="txtb">
          <label>Full Name</label>
          <input type="text" name="" required />
        </div>

        <div className="txtb">
          <label>Gender</label>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>

        <div className="txtb">
          <label>D.O.B.</label>
          <input type="text" name="" required />
        </div>

        <div className="txtb">
          <label>Contact Number</label>
          <input type="text" name="" required />
        </div>

        <div className="txtb">
          <label>Email Address</label>
          <input type="text" name="" required />
        </div>

        <div className="txtb">
          <label>Emergency Contact</label>
          <input type="text" name="" required />
        </div>

        <div className="txtb">
          <label>Emergency Contact Number</label>
          <input type="text" name="" required />
        </div>

        <div className="single-button-div">
          <a className="button" href="/goals">
            <div className="btn-text">Next</div>
            <div className="btn-subtext">Client Goals</div>
          </a>
        </div>
      </form>
    </>
  );
};

export default ClientInfo;