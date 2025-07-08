import Button from './Button'

export default function Card({ title, text, buttonLabel }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl hover:shadow-orange-300">
      <figure>
        <img src="/example.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          {/* <button className="bg-orange-500">{buttonLabel}</button> */}
          <Button label={buttonLabel} />
        </div>
      </div>
    </div>
  )
}
