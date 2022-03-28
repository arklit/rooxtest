interface TitleProps {
  title: string;
}
function Title({title}: TitleProps) {
  return(
    <h2 className="title">{title}</h2>
  )
}
export default Title