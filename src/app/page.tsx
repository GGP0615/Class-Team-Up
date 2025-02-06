import Link from 'next/link';
import { GraduationCap, Users, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
              Class Team Up
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" className="font-medium">Sign in</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="font-medium bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">            
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
              Transform Your{' '}
              <span className="inline-flex flex-col">
                <span className="relative">
                  <span className="relative bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                    Classroom
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-600 to-violet-600 transform translate-y-2" />
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              Create balanced teams effortlessly, foster collaboration, and watch your students thrive in a perfectly organized learning environment.
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg hover:shadow-xl transition-all duration-200">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-4 top-1/2 w-24 h-24 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -right-4 top-1/3 w-32 h-32 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage classroom teams
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Powerful features designed specifically for educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Smart Team Formation",
                description: "Automatically create balanced teams based on skills, preferences, and past performance.",
                color: "from-blue-600 to-indigo-600"
              },
              {
                icon: BookOpen,
                title: "Course Management",
                description: "Easily organize multiple courses and keep track of all team activities in one place.",
                color: "from-indigo-600 to-violet-600"
              },
              {
                icon: Sparkles,
                title: "Progress Tracking",
                description: "Monitor team progress, set milestones, and ensure everyone stays on track.",
                color: "from-violet-600 to-purple-600"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r opacity-25 group-hover:opacity-100 transition-opacity duration-200 blur-sm" />
                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-5`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform your classroom?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Start using Class Team Up to create better learning experiences.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-indigo-600 hover:bg-gray-50">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">Class Team Up</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-300">© 2025 Class Team Up. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}