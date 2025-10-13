import Content from "./Content";
import Header from "./Header";

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