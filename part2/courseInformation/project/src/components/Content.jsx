import Part from './Part';

const Content = ({parts}) => {
    return (
        <>
            <ul>
                {parts.map(part => 
                    <li key={part.id}>
                        <Part name={part.name} exercises={part.exercises} />
                    </li>
                )}
            </ul>
            
            <p><b>total of {parts.reduce((acum, part) => acum + part.exercises, 0)} exercises</b></p>
        </>
    );
}

export default Content;