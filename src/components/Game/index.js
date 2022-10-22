import './Game.css'

const Cell = ({ table, onClickCell, indexTable }) => {
    return (
        <div onClick={() => onClickCell(indexTable)} className="Game-cell">{table[indexTable]}</div>
    )
}

const Game = ({ table, onClickCell }) => {
    return (
        <section className="Game">
            <Cell table={table} onClickCell={onClickCell} indexTable={0}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={1}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={2}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={3}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={4}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={5}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={6}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={7}/>
            <Cell table={table} onClickCell={onClickCell} indexTable={8}/>
        </section>
    )
}

export { Game }