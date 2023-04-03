const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-primary mr-20" onClick={updateTask}>
            Uptate
          </button>
          <button className="btn btn-lg btn-danger" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
