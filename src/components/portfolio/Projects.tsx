import { Card, CardContent } from "@/components/ui/card";

const projectSections = [
  {
    id: "prototype-1",
    title: "Prototype 1 - System Upgrade and Testing",
    description:
      "This system is designed for small farmers to transport perishable products during the harvesting season, minimizing pre-cooling requirements and reducing transportation time to centralized warehouses.",
    images: ["/placeholder.svg"],
    layout: "single",
  },
  {
    id: "prototype-2",
    title: "Prototype 2 - Manufacturing and Testing",
    description:
      "This system is designed for the Air Force to meet military standards (MIL-STD) for storing pharmaceutical products while operating reliably in harsh environmental conditions. It features high corrosion resistance, impact-resistant construction, and an advanced insulation system using vacuum insulation panels to ensure thermal efficiency and durability.",
    images: ["/placeholder.svg", "/placeholder.svg"],
    layout: "double",
  },
  {
    id: "fea",
    title: "Finite Element Analysis (FEA)",
    description:
      "Different mechanical structural designs were evaluated to identify the most sustainable load condition that meets customer requirements and withstands heavy loads from perishable and pharmaceutical items. This image illustrates the von Mises stress distribution and the corresponding factor of safety.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    layout: "grid",
  },
  {
    id: "thermal",
    title: "Thermal Analysis of System",
    description:
      "Comprehensive thermal analysis was performed to evaluate insulation performance and temperature distribution throughout the refrigeration system under various operating conditions.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    layout: "grid",
  },
  {
    id: "corrosion",
    title: "Corrosion Testing (ASTM B117)",
    description:
      "Salt spray testing conducted according to ASTM B117 standards to evaluate the corrosion resistance of materials and coatings used in the refrigeration system.",
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    layout: "comparison",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Refrigeration System Design and Manufacturing
            </p>
          </div>

          <div className="space-y-16">
            {projectSections.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.layout === "single" && (
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {project.layout === "double" && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="aspect-[4/3] bg-muted rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {project.layout === "grid" && (
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="aspect-square bg-muted rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {project.layout === "comparison" && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                          <img
                            src={project.images[0]}
                            alt="Before Test 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground font-medium">
                          Before Test
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                          <img
                            src={project.images[1]}
                            alt="After Test 1"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground font-medium">
                          After Test
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                          <img
                            src={project.images[2]}
                            alt="Before Test 2"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground font-medium">
                          Before Test
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                          <img
                            src={project.images[3]}
                            alt="After Test 2"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground font-medium">
                          After Test
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
