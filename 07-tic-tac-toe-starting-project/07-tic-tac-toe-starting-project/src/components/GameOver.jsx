export default function GameOver({winner,onRestart})
{
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It' a Draw!</p>}
        <button onClick={onRestart}>ReMatch!!!</button>
    </div>
}