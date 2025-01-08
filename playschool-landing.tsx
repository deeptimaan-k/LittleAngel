'use client'

import { Menu, Home, HandshakeIcon, UserCheck, MessageCircle, Trophy, MapPin, CircleDollarSign, ImageIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"

export default function PlayschoolLanding() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const navLinks = [
    { 
      name: 'Why Little Millennium', 
      href: '/why-little-millennium',
      icon: Home,
      bgColor: 'bg-[#97C93D]'
    },
    { 
      name: 'Franchisee Support', 
      href: '/franchisee-support',
      icon: HandshakeIcon,
      bgColor: 'bg-[#F37021]'
    },
    { 
      name: 'Franchise Requirements', 
      href: '/franchise-requirements',
      icon: UserCheck,
      bgColor: 'bg-[#E31E24]'
    },
    { 
      name: 'Preschool Location', 
      href: '/locations',
      icon: MapPin,
      bgColor: 'bg-[#97C93D]'
    },
    { 
      name: 'Gallery', 
      href: '/gallery',
      icon: ImageIcon,
      bgColor: 'bg-[#8E3F98]'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#0066b3] relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />
      <header className={`fixed top-0 left-0 right-0 z-10 transition-all duration-500 ease-in-out ${
  scrolled ? 'bg-[#001F3F]/70 backdrop-blur-md' : 'bg-transparent'
}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-jbW9J0mxmA5SDOjWVssWU4TFrYFug4.png"
                alt="Creative Corner Kindergarten Logo"
                width={400}
                height={400}
                className="w-auto h-32 md:h-40"
                priority
              />
              <div className="flex flex-col ml-4">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                  Little Angel
                </span>
                <span className="text-sm md:text-base text-white font-light">
                  Preparatory School
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="flex flex-col items-center group"
                >
                  <div className={`${link.bgColor} p-4 rounded-full mb-2 transition-transform duration-500 ease-in-out transform group-hover:rotate-[360deg]`}>
                    <link.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium text-center leading-tight">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white hover:bg-transparent"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="fixed top-32 left-0 right-0 md:hidden px-4 py-4 z-10 transition-all duration-300 ease-in-out">
          <div className={`rounded-lg transition-all duration-500 ease-in-out ${
  scrolled ? 'bg-[#001F3F]/70 backdrop-blur-md' : 'bg-transparent'
}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center space-x-4 py-3 text-white hover:text-white/80 transition-colors px-4"
              >
                <div className={`${link.bgColor} p-3 rounded-full`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg">{link.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}

      <main className="container mx-auto px-4 pt-40 md:pt-48 pb-16 relative z-1">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:text-center">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold text-white bg-[#f37021] inline-block px-4 py-2">
                OWN A REPUTED
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-white bg-[#f37021] inline-block px-4 py-2">
                PLAYSCHOOL FRANCHISE IN UP
              </div>
            </div>

            <div className="space-y-8 mt-12">
              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/10 p-4 rounded-lg">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18 9l-5-5-4 4-3-3" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">High Growth Opportunity</h2>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/10 p-4 rounded-lg">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">End-to-end support</h2>
              </div>

              <div className="flex items-center space-x-4 text-white">
                <div className="bg-white/10 p-4 rounded-lg">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">NEP 2020 Based Curriculum</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-[#f37021] hover:bg-[#f37021]/90 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Button>
        </div>
      </main>
    </div>
  )
}

