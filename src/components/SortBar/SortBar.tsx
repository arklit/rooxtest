function SortBar() {
  return(
  <div className="sortBar">
    <div className="sortBar__container">
      <p className="sortBar__title">Сортировка</p>
      <button type="button" className="sortBar__button"> по городу</button>
      <button type="button" className="sortBar__button"> по компании</button>
    </div>
  </div>
  )
}
export default SortBar