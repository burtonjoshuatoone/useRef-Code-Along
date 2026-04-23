import { useRef } from "react";

function DebouncedButton({ onClick, children }) {
  const timeoutRef = useRef(null);
  return (
    <button
      onClick={() => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
    >
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <div>
        <DebouncedButton onClick={() => alert("Spaceship launched!")}>
          Launch the spaceship
        </DebouncedButton>
      </div>
      <div>
        <DebouncedButton onClick={() => alert("Soup boiled!")}>
          Boil the soup
        </DebouncedButton>
      </div>
      <div>
        <DebouncedButton onClick={() => alert("Lullaby sung!")}>
          Sing a lullaby
        </DebouncedButton>
      </div>
    </>
  );
}
