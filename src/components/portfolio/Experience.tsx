import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    title: "Operations Research Analyst",
    company: "Freshkube",
    skills: [
      "Prototyping",
      "Mechanical Design",
      "Supply Chain",
      "Procurement Planning",
      "Material Sourcing",
      "NPI",
      "DFM & DFA",
      "SOPs",
      "Root Cause Analysis",
    ],
  },
  {
    title: "Graduate Services Assistant",
    company: "Arizona State University",
    skills: [
      "Mathematical Models",
      "Convex Optimization",
      "MySQL",
      "VBA (Macro)",
      "Production Systems",
      "Lean Manufacturing",
      "JIT/Kanban",
    ],
  },
  {
    title: "CAD Engineer",
    company: "Cube CAD Center",
    skills: [
      "Software Training",
      "AutoCAD",
      "SolidWorks",
      "Fusion 360",
      "NX",
      "Creo",
      "Solid Edge",
      "Reverse Engineering",
      "Assembly",
      "Manufacturing",
    ],
  },
  {
    title: "Supply Chain Manager",
    company: "Win Industries",
    skills: [
      "Supply Chain",
      "Material Procurement",
      "Customer Support",
      "Inventory Control",
      "BI Tools",
      "KPIs",
      "Forecasting",
      "Logistics",
      "Production Schedule",
      "ERP System",
    ],
  },
  {
    title: "Trainee Engineer",
    company: "Plasma Induction",
    skills: [
      "Maintenance",
      "Workshop Operations",
      "Material Quality Testing",
      "Equipment Reliability",
      "Product Testing",
      "Tools Training",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-0 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block" />

                  <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
