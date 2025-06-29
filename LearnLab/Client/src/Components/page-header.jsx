export function PageHeader({ title, description }) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
