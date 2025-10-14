const Header = ({ name }) => <h2>{name}</h2>

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
)

const Content = ({ parts }) => {
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

const Course = ({course}) => {
    return (
        <>
            {course.map(c => (
                <div key={c.id}>
                    <Header name={c.name} />
                    <Content parts={c.parts} />
                </div>
            ))}
        </>
    );
}

export default Course;