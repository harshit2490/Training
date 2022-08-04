import React, { useState } from "react";

function Button() {
  const [showAnotherButton, setShowAnotherButton] = useState(false);

  return (
    <div>
      <button data-testid="button" onClick={() => setShowAnotherButton(true)}>
        Click
      </button>

      {showAnotherButton && (
        <button data-testid="button">Another Button</button>
      )}
    </div>
  );
}

export default Button;
