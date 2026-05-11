function ModuleForm({ type }) {
  const isWithdraw = type === "withdraw";

  return (
    <form className="bank-form">
      {/* Dummy form for frontend UI demonstration only. */}
      <div className="form-grid">
        <label className="form-label">
          Account Number
          <input
            className="form-input"
            placeholder="BK-2048-5591"
          />
        </label>
        <label className="form-label">
          Amount
          <input
            type="number"
            className="form-input"
            placeholder="5000"
          />
        </label>
      </div>

      <label className="form-label spaced">
        Notes
        <textarea
          rows="4"
          className="form-input"
          placeholder="Add a short transaction note"
        />
      </label>

      <button className="form-button">
        {isWithdraw ? "Withdraw Money" : "Deposit Money"}
      </button>
    </form>
  );
}

export default ModuleForm;
