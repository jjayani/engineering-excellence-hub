import { Cog, Factory, Truck, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Factory,
    title: "Manufacturing Operations",
    description: "Optimizing production workflows and assembly processes",
  },
  {
    icon: Cog,
    title: "Mechanical Design",
    description: "SolidWorks, GD&T, and DFM/DFA expertise",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Procurement, planning, and logistics management",
  },
  {
    icon: Lightbulb,
    title: "NPI Support",
    description: "New Product Introduction and prototyping",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Industrial Engineer with a strong foundation in manufacturing
              operations and mechanical engineering. I bring experience in
              optimizing production workflows, improving assembly processes, and
              supporting new product introduction initiatives across diverse
              industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
