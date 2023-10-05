const Book = (props) => {
  const { img, title, author, displayValue, id, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => displayValue(id)}>display title</button>
      <span className="number">{`# ${number + 1}`}</span>

      <h4>{author} </h4>
    </article>
  );
};
export default Book;
