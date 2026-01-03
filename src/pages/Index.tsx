import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  ArrowDown,
  Linkedin,
  Github,
  Mail,
  Cog,
  Factory,
  Truck,
  Lightbulb,
  GraduationCap,
  Briefcase,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  { icon: Factory, title: "Manufacturing Operations", description: "Optimizing production workflows and assembly processes" },
  { icon: Cog, title: "Mechanical Design", description: "SolidWorks, GD&T, and DFM/DFA expertise" },
  { icon: Truck, title: "Supply Chain", description: "Procurement, planning, and logistics management" },
  { icon: Lightbulb, title: "NPI Support", description: "New Product Introduction and prototyping" },
];

const skillCategories = [
  { title: "Prototyping & NPI", skills: ["Prototype Development", "NPI", "DFM/DFA", "Root Cause Analysis", "SOPs"] },
  { title: "Design & CAD", skills: ["SolidWorks", "AutoCAD", "Fusion 360", "NX", "Creo", "Solid Edge", "GD&T"] },
  { title: "Manufacturing", skills: ["Lean Manufacturing", "JIT/Kanban", "Assembly", "Production Systems", "Quality Testing"] },
  { title: "Supply Chain", skills: ["Procurement", "Inventory Control", "Forecasting", "Logistics", "ERP Systems"] },
  { title: "Analysis & Tools", skills: ["FEA", "Thermal Analysis", "MySQL", "VBA", "BI Tools", "KPIs"] },
  { title: "Other", skills: ["Machine Learning", "Convex Optimization", "Mathematical Models", "Reverse Engineering"] },
];

const educationData = [
  { degree: "M.S. Industrial Engineering", school: "Arizona State University" },
  { degree: "B.Tech. Mechanical Engineering", school: "Indus University" },
];

const experienceData = [
  { title: "Operations Research Analyst", company: "Freshkube", skills: ["Prototyping", "Mechanical Design", "Supply Chain", "Procurement Planning", "Material Sourcing", "NPI", "DFM & DFA", "SOPs", "Root Cause Analysis"] },
  { title: "Graduate Services Assistant", company: "Arizona State University", skills: ["Mathematical Models", "Convex Optimization", "MySQL", "VBA (Macro)", "Production Systems", "Lean Manufacturing", "JIT/Kanban"] },
  { title: "CAD Engineer", company: "Cube CAD Center", skills: ["Software Training", "AutoCAD", "SolidWorks", "Fusion 360", "NX", "Creo", "Solid Edge", "Reverse Engineering", "Assembly", "Manufacturing"] },
  { title: "Supply Chain Manager", company: "Win Industries", skills: ["Supply Chain", "Material Procurement", "Customer Support", "Inventory Control", "BI Tools", "KPIs", "Forecasting", "Logistics", "Production Schedule", "ERP System"] },
  { title: "Trainee Engineer", company: "Plasma Induction", skills: ["Maintenance", "Workshop Operations", "Material Quality Testing", "Equipment Reliability", "Product Testing", "Tools Training"] },
];

const projectSections = [
  { id: "prototype-1", title: "Prototype 1 - System Upgrade and Testing", description: "This system is designed for small farmers to transport perishable products during the harvesting season, minimizing pre-cooling requirements and reducing transportation time to centralized warehouses.", images: ["/placeholder.svg"], layout: "single" },
  { id: "prototype-2", title: "Prototype 2 - Manufacturing and Testing", description: "This system is designed for the Air Force to meet military standards (MIL-STD) for storing pharmaceutical products while operating reliably in harsh environmental conditions.", images: ["/placeholder.svg", "/placeholder.svg"], layout: "double" },
  { id: "fea", title: "Finite Element Analysis (FEA)", description: "Different mechanical structural designs were evaluated to identify the most sustainable load condition that meets customer requirements.", images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], layout: "grid" },
  { id: "thermal", title: "Thermal Analysis of System", description: "Comprehensive thermal analysis was performed to evaluate insulation performance and temperature distribution.", images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], layout: "grid" },
  { id: "corrosion", title: "Corrosion Testing (ASTM B117)", description: "Salt spray testing conducted according to ASTM B117 standards to evaluate the corrosion resistance of materials.", images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], layout: "comparison" },
];

const Index = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="text-xl md:text-2xl font-bold text-primary">Portfolio</a>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">{link.label}</a>
              ))}
              <Button size="sm" className="gap-2"><Download className="h-4 w-4" />Resume</Button>
            </div>
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
                ))}
                <Button size="sm" className="gap-2 w-fit"><Download className="h-4 w-4" />Resume</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-medium mb-4 tracking-wider uppercase">Industrial Engineer</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Manufacturing Operations &<br /><span className="text-primary">Mechanical Engineering</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Specializing in optimizing production workflows, improving assembly processes, and supporting NPI initiatives. Skilled in SolidWorks, GD&T, DFM/DFA, supply chain, and hands-on shop-floor support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="gap-2" asChild><a href="#projects">View Projects<ArrowDown className="h-4 w-4" /></a></Button>
              <Button size="lg" variant="outline" className="gap-2"><Download className="h-4 w-4" />Download Resume</Button>
            </div>
            <div className="flex items-center justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-6 w-6" /></a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><ArrowDown className="h-6 w-6 text-muted-foreground" /></div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Industrial Engineer with a strong foundation in manufacturing operations and mechanical engineering. I bring experience in optimizing production workflows, improving assembly processes, and supporting new product introduction initiatives across diverse industries.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A comprehensive skill set spanning design, manufacturing, and supply chain management.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((edu, index) => (
                <div key={index} className="bg-card p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {experienceData.map((exp, index) => (
                  <div key={index} className="relative pl-0 md:pl-16">
                    <div className="absolute left-4 top-6 w-5 h-5 bg-primary rounded-full border-4 border-background hidden md:block" />
                    <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">{skill}</Badge>
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

      {/* Projects */}
      <section id="projects" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Refrigeration System Design and Manufacturing</p>
            </div>
            <div className="space-y-16">
              {projectSections.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    {project.layout === "single" && (
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    {project.layout === "double" && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.images.map((img, idx) => (
                          <div key={idx} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                            <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                    {project.layout === "grid" && (
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.map((img, idx) => (
                          <div key={idx} className="aspect-square bg-muted rounded-lg overflow-hidden">
                            <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                    {project.layout === "comparison" && (
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.images.map((img, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                              <img src={img} alt={`Test ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center text-sm text-muted-foreground font-medium">{idx % 2 === 0 ? "Before Test" : "After Test"}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Interested in collaborating or have a question? Feel free to reach out!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4 mb-8">
                  <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"><Mail className="h-5 w-5 text-primary" /></div>
                    <span>your.email@example.com</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"><Linkedin className="h-5 w-5 text-primary" /></div>
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href="#" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"><Github className="h-5 w-5 text-primary" /></div>
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-card" />
                <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-card" />
                <Textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="bg-card resize-none" />
                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}<Send className="h-4 w-4" /></Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Industrial Engineer Portfolio. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
