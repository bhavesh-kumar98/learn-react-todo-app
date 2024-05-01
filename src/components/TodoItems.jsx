function TodoItems() {
  let todoName = "Milk";
  let todoDate = "27/4/24";
  return (
    <div className="container">
      <div className="row cRow">
        <div className="col-6 text-uppercase cBold">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger cBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;
