import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <div className="container mt-5" id="projects">
      <div>
        <h2 className="text-center">Projects</h2>
      </div>
      <section className="p-2">
        <div className="container">
          <ProjectCards />
        </div>
      </section>
    </div>
  );
}
