const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //create object from input values from form
    const form = new FormData(e.target);
    const user = Object.fromEntries(form.entries());
    //add user to list
    addUser(user);
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="form-control"
          placeholder="Enter the name"
          id="name"
          type="text"
        />
      </div>
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="form-control"
          placeholder="Enter the email"
          id="email"
          type="text"
        />
      </div>
      <div className="my-4">
        <label htmlFor="age">Age</label>
        <input
          name="age"
          className="form-control"
          placeholder="Enter the age"
          id="age"
          type="number"
        />
      </div>

      <button className="btn btn-primary">Add User</button>
    </form>
  );
};

export default Form;
