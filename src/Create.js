import React from "react";

const Create = () => {
  return (
    <div className="form-container">
      <form >
        <h2 className="addnewblog">Add new blog</h2>
        <div>
        <br></br>
        <input type="text" name="title " placeholder="Title" />
        <br></br>
        <input type="text" name="desc" placeholder="write-description" />
        <br></br>
        <input type="file" name="desc" placeholder="write-description" />
        <br></br>
        <button className="newblog-btn">Submit</button>
        </div>
        
        

      </form>
    </div>
  );
};

export default Create;
