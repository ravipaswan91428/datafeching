const QuotesCard = ({quotes}) => {
    

    if(!quotes) return <p>Loading</p>;

  return (
    <div>
        <h2>{quotes.content}</h2>
        <h3>{quotes.author}</h3>
        <span>{quotes.dateAdded}</span>
    </div>
  )
}

export default QuotesCard
