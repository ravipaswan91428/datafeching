import QuotesCard from './QuotesCard'

const QuotesList = ({quotes}) => {
  return (
    <div>
        {quotes.map((quotes)=(
            <QuotesCard key={quotes.id} quotes={quotes}/>
        ))}
    </div>
  )
}

export default QuotesList
