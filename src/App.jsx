import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Star, Gift, Download, Clock, Users, Palette, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: BookOpen,
      title: "35 Livrinhos Únicos",
      description: "Cada livrinho com temas bíblicos diferentes para horas de diversão"
    },
    {
      icon: Palette,
      title: "Estímulo à Criatividade",
      description: "Desenvolve habilidades artísticas e imaginação das crianças"
    },
    {
      icon: Heart,
      title: "Valores Cristãos",
      description: "Conteúdo alinhado com os princípios da fé cristã"
    },
    {
      icon: Download,
      title: "Entrega Digital",
      description: "Receba instantaneamente e imprima quantas vezes quiser"
    },
    {
      icon: Users,
      title: "Tempo em Família",
      description: "Atividade perfeita para pais e filhos compartilharem"
    },
    {
      icon: Gift,
      title: "Economia Incrível",
      description: "Mais de 50% de desconto por tempo limitado"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Meus filhos adoraram! É uma forma maravilhosa de ensinar sobre a fé enquanto eles se divertem colorindo.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Excelente qualidade e variedade. Recomendo para todas as famílias cristãs!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Perfeito para o culto doméstico. As crianças ficam entretidas e aprendem ao mesmo tempo.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clubinho da Fé
              </h1>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-4 py-2">
              🎨 OFERTA ESPECIAL 🎨
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Combo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fé Divertida</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforme a fé em cores e alegria! 35 livrinhos digitais para colorir com temas cristãos
            </p>

            {/* Price Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto mb-8">
              <div className="text-center">
                <p className="text-gray-500 line-through text-xl mb-2">De R$ 49,90</p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-green-600">R$ 22,90</span>
                  <Badge className="bg-red-500 text-white">-54%</Badge>
                </div>
                <p className="text-gray-600">Pagamento único • Acesso imediato</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl p-6 max-w-md mx-auto mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Oferta por tempo limitado!</span>
              </div>
              <div className="flex justify-center gap-4 text-2xl font-bold">
                <div className="text-center">
                  <div>{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs font-normal">HORAS</div>
                </div>
                <div>:</div>
                <div className="text-center">
                  <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs font-normal">MIN</div>
                </div>
                <div>:</div>
                <div className="text-center">
                  <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs font-normal">SEG</div>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition-all duration-200"
              >
                🎨 QUERO MEU COMBO FÉ DIVERTIDA AGORA! 🎨
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que escolher o Combo Fé Divertida?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma experiência completa que une diversão, aprendizado e valores cristãos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conteúdo Exclusivo
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              35 livrinhos únicos com temas bíblicos variados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "A Arca de Noé",
              "Davi e Golias",
              "O Nascimento de Jesus",
              "Parábolas de Jesus",
              "Moisés e o Mar Vermelho",
              "A Criação do Mundo",
              "Daniel na Cova dos Leões",
              "Jonas e a Baleia"
            ].map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-full h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg mb-3 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800">{theme}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que os pais estão dizendo
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Não perca esta oportunidade única!
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Garante já o seu Combo Fé Divertida e proporcione momentos especiais de aprendizado e diversão para seus filhos
            </p>
            
            <div className="bg-white bg-opacity-20 rounded-xl p-6 max-w-md mx-auto mb-8">
              <div className="text-center">
                <p className="text-lg mb-2">Apenas hoje:</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold">R$ 22,90</span>
                  <Badge className="bg-red-500 text-white">-54%</Badge>
                </div>
                <p className="text-sm opacity-90">35 livrinhos • Entrega imediata • Garantia total</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition-all duration-200"
              >
                🎨 SIM, EU QUERO AGORA! 🎨
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h4 className="text-xl font-bold">Clubinho da Fé</h4>
          </div>
          <p className="text-gray-400 mb-4">Cultivando a fé e a alegria em cada criança</p>
          <p className="text-sm text-gray-500">© 2025 Clubinho da Fé. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
