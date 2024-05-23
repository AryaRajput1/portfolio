function ProjectCard({ imgLink, title, link, bannerTitle }) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="card text-light border-0 shadow-sm">
        <img src={imgLink} />
      </div>
      <div className="d-flex flex-column align-items-start justify-content-start g-0 mx-2">
        <h5 className="mt-1 mb-0">{title}</h5>
        <a href={link} className="btn text-primary p-0">
          Live
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
