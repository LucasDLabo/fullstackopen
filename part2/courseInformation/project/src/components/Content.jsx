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
            
            <p>total of {parts.reduce((acum, part) => acum + part.exercises, 0)} exercises</p>
        </>
    );
}

export default Content;