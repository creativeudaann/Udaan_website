import React, { useState } from 'react';

// --- ICONS & MOCK UI COMPONENTS ---
const createIcon = (svg) => ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {svg}
  </svg>
);
const Menu = createIcon(<><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></>);
const X = createIcon(<><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></>);
const ArrowRight = createIcon(<><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></>);
const Phone = createIcon(<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></>);
const Mail = createIcon(<><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>);
const MapPin = createIcon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
const Clock = createIcon(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>);
const Calendar = createIcon(<><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>);
const Send = createIcon(<><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></>);
const WhatsApp = createIcon(<><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></>);
const TrendingUp = createIcon(<><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>);
const Film = createIcon(<><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M17 3v18" /><path d="M17 7.5h4" /><path d="M17 16.5h4" /></>);
const Brush = createIcon(<><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" /><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.02a3.1 3.1 0 0 0-3-3.02z" /></>);
const Lightbulb = createIcon(<><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7.5a6 6 0 0 0-12 0c0 1.5.3 2.7 1.5 3.9.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></>);
const Check = createIcon(<><polyline points="20 6 9 17 4 12" /></>);
const Star = createIcon(<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></>);
const SlidersHorizontal = createIcon(<><line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="16" y1="18" x2="16" y2="22"/></>);


const Button = ({ children, variant, size, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = { default: "bg-primary text-primary-foreground hover:bg-primary/90", cta: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "underline-offset-4 hover:underline text-primary", };
  const sizes = { default: "h-10 py-2 px-4", sm: "h-9 px-3 rounded-md", lg: "h-11 px-8 rounded-md", };
  return <button className={`${baseClasses} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`} {...props}>{children}</button>;
};
const Card = ({ children, className }) => <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>{children}</div>;
const CardHeader = ({ children, className }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
const CardTitle = ({ children, className }) => <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
const CardDescription = ({ children, className }) => <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
const CardContent = ({ children, className }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const CardFooter = ({ children, className }) => <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;
const Input = ({ className, ...props }) => <input className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;
const Textarea = ({ className, ...props }) => <textarea className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;
const Label = ({ children, ...props }) => <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" {...props}>{children}</label>;
const useToast = () => ({ toast: ({ title, description, variant }) => { console.log(`Toast (${variant || 'default'}): ${title} - ${description}`); alert(`Toast: ${title}\n\n${description}`); } });

// --- SECTIONS ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [ { name: 'Services', href: '#services' }, { name: 'Portfolio', href: '#portfolio' }, { name: 'Pricing', href: '#pricing' }, { name: 'About', href: '#about' }, { name: 'Contact', href: '#contact' }];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <a href="#" className="flex items-center space-x-2"><span className="font-bold text-lg">Udaan Creatives</span></a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">{navLinks.map(link => (<a key={link.name} href={link.href} className="transition-colors hover:text-primary">{link.name}</a>))}</nav>
        <div className="hidden md:flex items-center space-x-4"><a href="https://calendly.com/creative-udaann/book-appoinment" target="_blank" rel="noopener noreferrer"><Button variant="cta" size="sm">Book a Call</Button></a></div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {isOpen && (<div className="md:hidden"><nav className="flex flex-col items-center space-y-4 py-4 border-t">{navLinks.map(link => (<a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="transition-colors hover:text-primary">{link.name}</a>))}<a href="https://calendly.com/creative-udaann/book-appoinment" target="_blank" rel="noopener noreferrer"><Button variant="cta" size="sm">Book a Call</Button></a></nav></div>)}
    </header>
  );
};

const Hero = () => (
    <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Helping brands, Take Flight
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                We are a creative and advisory partner in Nepal, building digital strategies that deliver results in local and international markets.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <a href="https://calendly.com/creative-udaann/book-appoinment" target="_blank" rel="noopener noreferrer">
                    <Button variant="cta" size="lg" className="group"> Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /> </Button>
                </a>
                <a href="#portfolio">
                    <Button variant="outline" size="lg">Explore Our Work</Button>
                </a>
            </div>
        </div>
    </section>
);

const Clients = () => {
    const clientLogos = [ { name: 'Gymshala', src: 'https://placehold.co/150x60/f0f0f0/333?text=Gymshala' }, { name: 'Divine Production', src: 'https://placehold.co/150x60/f0f0f0/333?text=Divine' }, { name: 'Award Ocean International', src: 'https://placehold.co/150x60/f0f0f0/333?text=Award+Ocean' }, { name: 'Udaan Creatives', src: 'https://placehold.co/150x60/f0f0f0/333?text=Udaan' } ];
    return (
        <div className="py-12 bg-muted/40">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider"> Trusted By Leading Brands in Nepal & UAE </h3>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {clientLogos.map(logo => (
                        <div key={logo.name} className="flex justify-center">
                            <img src={logo.src} alt={logo.name} className="h-10 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const servicesList = [ { icon: TrendingUp, title: 'Social Media & Consulting', desc: 'We manage your social presence and provide expert business guidance.' }, { icon: Film, title: 'Video Production', desc: 'Compelling video content that tells your story and captures attention.' }, { icon: Brush, title: 'Strategic Branding & Design', desc: 'Crafting a memorable brand identity that stands out from the crowd.' }, { icon: Lightbulb, title: 'Business Advisory', desc: 'Expert guidance to navigate your growth and marketing challenges.' }, ];
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Core Services</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">Solutions designed to make your brand soar.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesList.map(service => (
                        <Card key={service.title} className="text-center hover:shadow-lg hover:-translate-y-2 transition-all">
                            <CardHeader>
                                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl flex items-center justify-center">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">{service.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const projects = [ { name: 'Gymshala', desc: 'Building a vibrant, modern lifestyle brand and an engaged community.', link: 'https://www.instagram.com/gymshalaofficial/', image: 'https://placehold.co/600x400/fb923c/1e293b?text=Gymshala' }, { name: 'Divine Production NP', desc: 'High-quality media production for compelling brand storytelling.', link: 'https://www.instagram.com/divine_production_np/', image: 'https://placehold.co/600x400/60a5fa/1e293b?text=Divine' }, { name: 'Award Ocean International', desc: 'Elevating a global brand with professional and engaging content.', link: 'https://www.instagram.com/awardoceanintl2007/', image: 'https://placehold.co/600x400/f472b6/1e293b?text=Award+Ocean' }, ];
    return (
        <section id="portfolio" className="py-20 bg-muted/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">See Our Impact</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">We don't just talk about results; we deliver them.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.name}>
                            <Card className="overflow-hidden group h-full flex flex-col">
                                <div className="overflow-hidden">
                                    <img src={project.image} alt={project.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{project.desc}</p>
                                </CardContent>
                                <CardFooter>
                                    <p className="text-sm font-semibold text-primary group-hover:underline">View on Instagram <ArrowRight className="inline-block h-4 w-4" /></p>
                                </CardFooter>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonial = () => (
    <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <img src="https://placehold.co/100x100/f0f0f0/333?text=Udaan" alt="Udaan Creatives" className="mx-auto rounded-full mb-6" />
            <blockquote className="text-2xl font-medium text-foreground italic">
                "Udaan Creatives transformed our digital presence. Their strategic approach was a game-changer for our business and recruitment efforts."
            </blockquote>
            <p className="mt-6 font-semibold text-lg">Udaan Creatives and Advisory</p>
        </div>
    </section>
);

const About = () => ( <section id="about" className="py-20"> <div className="container mx-auto px-4"> <div className="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Mission</h2> <p className="text-xl text-muted-foreground mb-6"> Our mission is to be more than just a creative agency. We aim to be a true growth partner for our clients, combining creative storytelling with data-driven strategy to help brands in Nepal and beyond achieve their most ambitious goals. </p> <div className="space-y-4"> <div className="flex items-start"> <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" /> <div> <h4 className="font-semibold">Partnership Over Projects</h4> <p className="text-muted-foreground">We invest in your success for the long term.</p> </div> </div> <div className="flex items-start"> <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" /> <div> <h4 className="font-semibold">Transparency & Trust</h4> <p className="text-muted-foreground">Clear communication and honest reporting are at our core.</p> </div> </div> <div className="flex items-start"> <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" /> <div> <h4 className="font-semibold">Creativity That Converts</h4> <p className="text-muted-foreground">We create beautiful work that also drives business results.</p> </div> </div> </div> </div> <div className="grid grid-cols-2 gap-4"> <img src="https://placehold.co/400x500/a78bfa/1e293b?text=Team+1" alt="Team Member 1" className="rounded-lg shadow-lg" /> <img src="https://placehold.co/400x500/facc15/1e293b?text=Team+2" alt="Team Member 2" className="rounded-lg shadow-lg mt-8" /> </div> </div> </div> </section> );

const Pricing = () => {
    const packages = [
        { name: "Foundation", price: "39,000", desc: "For establishing a professional digital presence.", features: [ "12 High-Quality Graphics & Copy", "4 Short-form Reels/TikToks", "Social Media Management", "Basic Website Maintenance", "Monthly Performance Report", "Basic Ad Campaign Support", ], calendlyLink: "https://calendly.com/creative-udaann/seo-audit-action-plan", isRecommended: false, },
        { name: "Growth", price: "49,000", desc: "For active growth and consistent lead generation.", features: [ "16 High-Quality Graphics & Copy", "6 Short-form Reels/TikToks", "All features from Foundation", "Full Ad Campaign Setup & Monitoring", "Monthly Strategy Call", ], calendlyLink: "https://calendly.com/creative-udaann/seo-audit-action-plan", isRecommended: true, },
        { name: "Scale", price: "64,000", desc: "For aiming for market leadership and brand dominance.", features: [ "20 High-Quality Graphics & Copy", "8 Short-form Reels/TikToks", "All features from Growth", "Priority Ad Campaign Management", "1 Major Deliverable Quarterly", ], calendlyLink: "https://calendly.com/creative-udaann/seo-audit-action-plan", isRecommended: false, },
    ];

    const [customPackage, setCustomPackage] = useState({
        graphics: 0,
        videos: 0,
        promoVideos: 0,
        testimonials: 0,
        voiceovers: 0,
    });
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCustomChange = (e) => {
        const { name, value } = e.target;
        setCustomPackage(prev => ({ ...prev, [name]: parseInt(value) >= 0 ? parseInt(value) : 0 }));
    };

    const handleCustomQuoteSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const message = `
            Custom Package Quote Request:
            --------------------------------
            Graphic Designs / month: ${customPackage.graphics}
            Short Videos (Reels) / month: ${customPackage.videos}
            Promotional Videos / month: ${customPackage.promoVideos}
            Client Testimonial Videos / month: ${customPackage.testimonials}
            CEO/Founder Voiceovers / month: ${customPackage.voiceovers}
        `;

        try {
            const response = await fetch('https://formspree.io/f/mnnzzynv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _subject: "New Custom Package Quote Request!",
                    message: message,
                }),
            });

            if (response.ok) {
                toast({ title: "Quote Request Sent!", description: "Thank you! We've received your custom package request and will get back to you with a quote shortly." });
            } else {
                toast({ title: "Error", description: "Could not send request. Please try again.", variant: "destructive" });
            }
        } catch (error) {
            toast({ title: "Error", description: "Could not send request. Please check your connection.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="pricing" className="py-20 bg-muted/40">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Transparent Pricing</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">Choose the perfect plan to fuel your growth, or build your own.</p>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
                    {packages.map(pkg => (
                        <Card key={pkg.name} className={`flex flex-col h-full ${pkg.isRecommended ? 'border-primary border-2 shadow-2xl relative' : ''}`}>
                            {pkg.isRecommended && ( <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"> <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1"> <Star className="h-4 w-4" /> Most Popular </div> </div> )}
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                                <CardDescription className="text-base">{pkg.desc}</CardDescription>
                                <div className="py-4"> <span className="text-4xl font-bold">NPR {pkg.price}</span> <span className="text-muted-foreground">/month</span> </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-4"> {pkg.features.map(feature => ( <li key={feature} className="flex items-start"> <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" /> <span className="text-muted-foreground">{feature}</span> </li> ))} </ul>
                            </CardContent>
                            <CardFooter>
                                <a href={pkg.calendlyLink} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button size="lg" variant={pkg.isRecommended ? 'cta' : 'outline'} className="w-full"> Book a {pkg.name} Call </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    ))}

                    <Card className="flex flex-col h-full border-dashed border-2 xl:col-span-1">
                         <CardHeader className="text-center">
                            <div className="mx-auto w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                                <SlidersHorizontal className="h-8 w-8 text-foreground" />
                            </div>
                            <CardTitle className="text-2xl">Build Your Own Package</CardTitle>
                            <CardDescription className="text-base">Need something different? Get a custom quote.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <form onSubmit={handleCustomQuoteSubmit} className="space-y-4">
                                <div>
                                    <Label htmlFor="graphics" className="font-semibold">Graphic Designs / month</Label>
                                    <Input type="number" id="graphics" name="graphics" value={customPackage.graphics} onChange={handleCustomChange} className="mt-1" min="0" />
                                </div>
                                <div>
                                    <Label htmlFor="videos" className="font-semibold">Short Videos (Reels) / month</Label>
                                    <Input type="number" id="videos" name="videos" value={customPackage.videos} onChange={handleCustomChange} className="mt-1" min="0" />
                                </div>
                                <div>
                                    <Label htmlFor="promoVideos" className="font-semibold">Promotional Videos / month</Label>
                                    <Input type="number" id="promoVideos" name="promoVideos" value={customPackage.promoVideos} onChange={handleCustomChange} className="mt-1" min="0" />
                                </div>
                                <div>
                                    <Label htmlFor="testimonials" className="font-semibold">Client Testimonial Videos / month</Label>
                                    <Input type="number" id="testimonials" name="testimonials" value={customPackage.testimonials} onChange={handleCustomChange} className="mt-1" min="0" />
                                </div>
                                <div>
                                    <Label htmlFor="voiceovers" className="font-semibold">CEO/Founder Voiceovers / month</Label>
                                    <Input type="number" id="voiceovers" name="voiceovers" value={customPackage.voiceovers} onChange={handleCustomChange} className="mt-1" min="0" />
                                </div>
                                <Button type="submit" size="lg" variant="default" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? 'Requesting Quote...' : 'Get a Custom Quote'}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/mnnzzynv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
            }
        } catch (error) {
            toast({ title: "Error", description: "Could not send message. Please check your connection.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [ 
        { icon: Phone, title: "Call Us", details: ["+977-9851300114"], action: "tel:+9779851300114" }, 
        { icon: WhatsApp, title: "WhatsApp", details: ["+977-9851300114", "+977-9807891061"], action: "https://wa.me/9779851300114" },
        { icon: Mail, title: "Email Us", details: ["creative.udaann@gmail.com"], action: "mailto:creative.udaann@gmail.com" }, 
        { icon: MapPin, title: "Visit Us", details: ["Kathmandu, Nepal"], action: "https://www.google.com/maps/search/?api=1&query=Kathmandu" } 
    ];
    const services = [ { value: "social-media", label: "Social Media Management" }, { value: "video-production", label: "Video Production" }, { value: "graphic-design", label: "Graphic Design" }, { value: "business-advisory", label: "Business Advisory" }, { value: "website", label: "Website Management" }, { value: "paid-ads", label: "Paid Promotions" }, { value: "multiple", label: "Multiple Services" }, ];

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Start Your Growth Journey</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to transform your business? Get in touch with us today.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    <Card>
                        <CardHeader><CardTitle>Send Us a Message</CardTitle></CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div> <Label htmlFor="name">Full Name *</Label> <Input id="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1" /> </div>
                                    <div> <Label htmlFor="email">Email Address *</Label> <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1" /> </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div> <Label htmlFor="phone">Phone Number</Label> <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1" /> </div>
                                    <div>
                                        <Label htmlFor="service">Service Interested In</Label>
                                        <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="mt-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                            <option value="">Select a service</option>
                                            {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div> <Label htmlFor="message">Message *</Label> <Textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." className="mt-1" /> </div>
                                <Button type="submit" variant="cta" size="lg" className="w-full group" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : <> <Send className="h-5 w-5 mr-2" /> Send Message <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" /> </>}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return ( <a href={info.action} target="_blank" rel="noopener noreferrer" key={index} className="h-full"> <Card className="hover:shadow-lg transition-all duration-300 h-full"> <CardContent className="p-6"> <div className="flex items-start space-x-4"> <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0"> <IconComponent className="h-6 w-6 text-primary" /> </div> <div className="flex-1"> <h3 className="font-semibold text-foreground mb-1">{info.title}</h3> {info.details.map((detail, detailIndex) => ( <p key={detailIndex} className="text-sm text-muted-foreground">{detail}</p> ))} </div> </div> </CardContent> </Card> </a> );
                            })}
                        </div>
                        <Card className="border-primary bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                            <CardContent className="p-8 text-center">
                                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-4">Book Your Free Consultation</h3>
                                <p className="text-muted-foreground mb-6">Schedule a 15-minute strategy call to discuss your goals.</p>
                                <a href="https://calendly.com/creative-udaann/book-appoinment" target="_blank" rel="noopener noreferrer">
                                    <Button variant="cta" size="lg" className="w-full group"> <Calendar className="h-5 w-5 mr-2" /> Schedule Now <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" /> </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const socialLinks = [ { name: 'Instagram', link: 'https://www.instagram.com/udaan_creative_advisory/' }, { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61577544958783' }, { name: 'LinkedIn', link: '#' }, ];
    return (
        <footer className="bg-muted/40">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-1"> <h3 className="font-bold text-lg">Udaan Creatives</h3> <p className="text-muted-foreground mt-2">Helping brands, Take Flight.</p> </div>
                    <div className="md:col-span-1"> <h4 className="font-semibold">Quick Links</h4> <ul className="mt-4 space-y-2"> <li><a href="#services" className="text-muted-foreground hover:text-primary">Services</a></li> <li><a href="#portfolio" className="text-muted-foreground hover:text-primary">Portfolio</a></li> <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li> </ul> </div>
                    <div className="md:col-span-1"> <h4 className="font-semibold">Contact</h4> <ul className="mt-4 space-y-2"> <li><a href="mailto:creative.udaann@gmail.com" className="text-muted-foreground hover:text-primary">creative.udaann@gmail.com</a></li> <li><a href="https://wa.me/9779851300114" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">WhatsApp: +977-9851300114</a></li> <li><a href="https://wa.me/9779807891061" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">WhatsApp: +977-9807891061</a></li> </ul> </div>
                    <div className="md:col-span-1"> <h4 className="font-semibold">Follow Us</h4> <div className="flex space-x-4 mt-4"> {socialLinks.map(social => ( <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"> {social.name} </a> ))} </div> </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground"> <p>&copy; {new Date().getFullYear()} Udaan Creatives and Advisory. All Rights Reserved.</p> </div>
            </div>
        </footer>
    );
};

// Main App Component
export default function App() {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
        <style>{`
            :root { --background: 0 0% 100%; --foreground: 222.2 84% 4.9%; --card: 0 0% 100%; --card-foreground: 222.2 84% 4.9%; --popover: 0 0% 100%; --popover-foreground: 222.2 84% 4.9%; --primary: 221.2 83.2% 53.3%; --primary-foreground: 210 40% 98%; --secondary: 210 40% 96.1%; --secondary-foreground: 222.2 47.4% 11.2%; --muted: 210 40% 96.1%; --muted-foreground: 215.4 16.3% 46.9%; --accent: 210 40% 96.1%; --accent-foreground: 222.2 47.4% 11.2%; --destructive: 0 84.2% 60.2%; --destructive-foreground: 210 40% 98%; --border: 214.3 31.8% 91.4%; --input: 214.3 31.8% 91.4%; --ring: 222.2 84% 4.9%; }
            .dark { --background: 222.2 84% 4.9%; --foreground: 210 40% 98%; --card: 222.2 84% 4.9%; --card-foreground: 210 40% 98%; --popover: 222.2 84% 4.9%; --popover-foreground: 210 40% 98%; --primary: 217.2 91.2% 59.8%; --primary-foreground: 222.2 47.4% 11.2%; --secondary: 217.2 32.6% 17.5%; --secondary-foreground: 210 40% 98%; --muted: 217.2 32.6% 17.5%; --muted-foreground: 215 20.2% 65.1%; --accent: 217.2 32.6% 17.5%; --accent-foreground: 210 40% 98%; --destructive: 0 62.8% 30.6%; --destructive-foreground: 210 40% 98%; --border: 217.2 32.6% 17.5%; --input: 217.2 32.6% 17.5%; --ring: 212.7 26.8% 83.9%; }
            html { scroll-behavior: smooth; }
            body { background-color: hsl(var(--background)); color: hsl(var(--foreground)); }
        `}</style>
        <Header />
        <main>
            <Hero />
            <Clients />
            <Services />
            <Portfolio />
            <Testimonial />
            <Pricing />
            <About />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}
