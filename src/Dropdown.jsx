import useOuterClick from './useOuterClick'

const Dropdown = () => {
  const { ref, isActive, setIsActive } = useOuterClick(false)

  const onDropdownClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="dropdown" ref={ref}>
      <button className="dropdown__button" onClick={onDropdownClick}>
        Click me to open
      </button>
      {isActive && (
        <div className="dropdown__menu">
          <ul className="dropdown__menu-list">
            <li className="dropdown__menu-item" onClick={onDropdownClick}>
              Option 1
            </li>
            <li className="dropdown__menu-item" onClick={onDropdownClick}>
              Option 2
            </li>
            <li className="dropdown__menu-item" onClick={onDropdownClick}>
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
