export default function Close({ onClick }) {
  return (
    <span
      className="absolute text-sm top-0 right-0 cursor-pointer hover:underline md:right-8 md:top-5 md:text-xs"
      onClick={onClick}
    >
      X Close
    </span>
  );
}
