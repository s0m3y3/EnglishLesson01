import getProjectData from "../../utils/projects.js"

export default function Projects() {
const projectList = getProjectData()
    console.log(projectList);

    return (
      <div>
        <h1 className="text-center m-4">Project</h1>
        <p className="mb-5 text-center font-weight-bold"> 
            Please Explore my collection of projects throughout my journey - click Link for live demos. Discover the magic behind each creation.
        </p>

        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-col-lg-3">

                {projectList.map((project, index) => (
                    <div className="col mb-4" id={index}>
                        <div className="card shadow-sm bg-white rounded h-100">
                            <h3 className="text-center">{project.name}</h3>
                            <img className="card-img-top img-fluid" src={project.photoLink} alt={project.name}></img>
                            <div className="p-2">{project.description}</div>
                            <div className="d-flex justify-content-center p-2">
                                <a href={project.githubRepo} target="_blank" className="btn btn-primary mr-5">Github</a>
                                {project.liveLink !== "n/a" ? (
                                    <a href={project.liveLink} target="_blank" className="btn btn-primary">Link</a>
                                    ) : (
                                    <button className="btn btn-primary" style={{ backgroundColor: 'red' }}>No-Link</button>
                                    )}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      </div>
    );
  }
  