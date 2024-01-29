import React from "react";
import Button from "./Button";

const options = [5, 10, 15, 25, 50];

function SelectTips({
  onSetPercent,
  customTipPercent,
  setCustomTipPercent,
  toggle,
  handleCustomTipPercent,
  setToggle,
}) {

  return (
    <>
      <p className="label" style={{ marginBottom: "1.2rem" }}>
        Select Tip %
      </p>
      <section className="tip-options">
        {options.map((option, idx) => (
          <Button
            type="button"
            value={option}
            idx={idx}
            toggle={toggle}
            key={idx}
            onCustomPercent={setCustomTipPercent}
            onToggle={setToggle}
            onSetPercent={onSetPercent}
          >
            <span
              style={{ fontSize: "2.1rem", fontWeight: 700 }}
              className="percent"
            >
              {option}
            </span>
          </Button>
        ))}

        <input
          type="number"
          min="0"
          value={customTipPercent}
          placeholder="Custom"
          onFocus={() => setToggle(null)}
          onChange={handleCustomTipPercent}
        />
      </section>
    </>
  );
}

export default SelectTips;
