import './styles.css'

export const TextInput = ({handleChange,searchValue}) => {
  return (
    <input
      className='text-input'
      onChange={handleChange}
      values={searchValue}
      type='search'
      placeholder="Type you search"
    />
  )
}