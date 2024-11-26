interface CardProps {
    metadata: {
      title: string,
      description?: string,
    }
}

const Card = ({metadata}: CardProps) => {
  return (
    <div className='w-52 aspect-square bg-blue-300 rounded-xl'>
        <h2 className="text-2xl font-bold">{metadata.title}</h2>
        <p>
            {metadata.description}
        </p>
    </div>
  )
}

export default Card