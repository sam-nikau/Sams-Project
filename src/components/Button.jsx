export default function Button({ label, className, onClick }) {
  return (
    <>
      <button
        className={`${className} bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded hover:cursor-pointer`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  )
}
