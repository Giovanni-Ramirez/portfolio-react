/* eslint-disable react/prop-types */
import '../assets/css/Portfolio.css'

const projectData =[
    {
        image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
        title: 'testTitle1',
        description: 'Description test 1',
        tech: ['Testing','html', 'css', 'javascript'],
        github: 'linkgoeshere',
        liveLink: 'livelinkgoeshere'
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
        title: 'testTitle2',
        description: 'Description test 2',
        tech: ['html', 'react', 'html', 'css'],
        github: 'linkgoeshere',
        liveLink: 'livelinkgoeshere'
    },
]

const Project = ({image, title, description, tech}) => (
    <div className="project row mb-4">
        <div className="col-sm-4 image-container">
            <img src={image} alt="" />
        </div>
        <div className="text-container col-sm-8 row">
            <div className="col">
                <h5>Technology</h5>
                <ul>
                    <li>{tech[0]}</li>
                    <li>{tech[1]}</li>
                    <li>{tech[2]}</li>
                    <li>{tech[3]}</li>
                </ul>
            </div>
            <div className="col-8">
                <h5>{title}</h5>
                <p>{description}</p>
                <div>
                    <a href=""><button>live link</button></a>
                    <a href=""><button>github</button></a>
                </div>
            </div>
        </div>
    </div>
)


function Portfolio () {
    return (
        <>
        <h1 className="title-page text-center">Portfolio</h1>
        <section className="container">
            <div>
                {projectData.map(project => (
                    <Project key={project.index} image={project.image} title={project.title} description={project.description} tech={project.tech}/>
                ))}
            </div>
        </section>
        </>
    )
}

export default Portfolio;