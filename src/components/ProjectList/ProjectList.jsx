export default function ProjectList(projects) {
  const height = projects.projects.length > 10 ? '1750px' : projects.projects.length > 6 ? '1100px' : '650px'
  const flexDirection = projects.projects.length < 3 ? 'row' : 'column'

  return (
      <div style={{ height: height, flexDirection: flexDirection }} className="project-list">
          {projects.projects.map((item, index) => 
              <div className={"image-container " + item.category} key={index}>
                  <img className="image" src={item.img} alt="ok"></img>
              </div>
          )}
      </div>
  )
}
