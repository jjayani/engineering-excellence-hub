import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "M.S. Industrial Engineering",
    school: "Arizona State University",
    icon: GraduationCap,
  },
  {
    degree: "B.Tech. Mechanical Engineering",
    school: "Indus University",
    icon: GraduationCap,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <edu.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
