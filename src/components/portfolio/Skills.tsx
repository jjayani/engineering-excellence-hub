import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Prototyping & NPI",
    skills: ["Prototype Development", "NPI", "DFM/DFA", "Root Cause Analysis", "SOPs"],
  },
  {
    title: "Design & CAD",
    skills: ["SolidWorks", "AutoCAD", "Fusion 360", "NX", "Creo", "Solid Edge", "GD&T"],
  },
  {
    title: "Manufacturing",
    skills: ["Lean Manufacturing", "JIT/Kanban", "Assembly", "Production Systems", "Quality Testing"],
  },
  {
    title: "Supply Chain",
    skills: ["Procurement", "Inventory Control", "Forecasting", "Logistics", "ERP Systems"],
  },
  {
    title: "Analysis & Tools",
    skills: ["FEA", "Thermal Analysis", "MySQL", "VBA", "BI Tools", "KPIs"],
  },
  {
    title: "Other",
    skills: ["Machine Learning", "Convex Optimization", "Mathematical Models", "Reverse Engineering"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning design, manufacturing, and
              supply chain management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
