export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props

  return (
      <div className="toolbar">
          {filters.map(item => {
                  let classActive = item === selected ? "toolbar-category active-category" : "toolbar-category"
                  return <div onClick={onSelectFilter} className={classActive} key={item}>{item}</div>
              }
          )}
      </div>
  )
}