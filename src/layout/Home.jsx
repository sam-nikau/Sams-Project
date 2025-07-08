import Card from '../components/Card'

const services = [
  {
    title: 'Solar',
    text: 'We offer a wide range of solar solutions to meet your energy needs.',
    buttonLabel: 'Learn More',
  },
  {
    title: 'Electrical',
    text: 'We provide a range of electrical services to meet your needs.',
    buttonLabel: 'Learn More',
  },
  {
    title: 'Air conditioning',
    text: 'We offer a wide range of air conditioning services to meet your needs.',
    buttonLabel: 'Learn More',
  },
]
export default function Home() {
  return (
    <div className="flex flex-wrap gap-4 my-8 mx-4 justify-center">
      {services.map((service) => (
        <div key={service.title} className="basis-1 md:basis-1/2 lg:basis-1/3">
          <Card
            title={service.title}
            text={service.text}
            buttonLabel={service.buttonLabel}
          />
        </div>
      ))}
    </div>
  )
}
