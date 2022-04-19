function SortBar(props: any) {
  const {handlerCitySort, handlerCompanySort} = props;
  return(
  <div className="sortBar">
    <div className="sortBar__container">
      <p className="sortBar__title">Сортировка</p>
      <button type="button" className="sortBar__button" onClick={handlerCitySort}> по городу</button>
      <button type="button" className="sortBar__button" onClick={handlerCompanySort}> по имени</button>
    </div>
  </div>
  )
}
export default SortBar