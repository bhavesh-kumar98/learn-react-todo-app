export default function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row cRow">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success cBtn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
