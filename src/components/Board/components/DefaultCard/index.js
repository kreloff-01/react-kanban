export default function ({ children: card, dragging, allowRemoveCard, onCardRemove, commissionLink=null }) {
  if (commissionLink !== null){
    return (
      <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
        <span>
          <div className='react-kanban-card__title'>
            <span>{card.title}</span>
            {allowRemoveCard && (
              <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
                ×
              </span>
            )}
          </div>
        </span>
        <div className='react-kanban-card__description'>{card.description}</div>
        <a href={commissionLink}>View</a>
      </div>
    )
  }
  else{
    return (
      <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`}>
        <span>
          <div className='react-kanban-card__title'>
            <span>{card.title}</span>
            {allowRemoveCard && (
              <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
                ×
              </span>
            )}
          </div>
        </span>
        <div className='react-kanban-card__description'>{card.description}</div>
      </div>
    )
  }
}
