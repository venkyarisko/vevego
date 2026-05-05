import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, ExternalLink, User, Briefcase, Home as HomeIcon, Video, Globe, Download, Volume2, VolumeX } from 'lucide-react'
import { FaGithub, FaInstagram, FaYoutube, FaTiktok, FaDiscord } from 'react-icons/fa'

// --- Components ---

const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'about', label: 'About', icon: User },
  ]

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <a
          key={item.id}
          className={`nav-link ${activePage === item.id ? 'active' : ''}`}
          onClick={() => setActivePage(item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="text-center"
  >
    <div className="badge">
      <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', marginRight: '8px', display: 'inline-block' }}></span>
      Available for Work
    </div>
    <h1>Venky Arisko<br />All in You.</h1>
    <p>Creator, Developer & Digital Enthusiast</p>
    <div className="social-links" style={{ justifyContent: 'center' }}>
      <a href="https://www.instagram.com/venkyarisko/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram"><FaInstagram size={20} /></a>
      <a href="https://www.tiktok.com/@truevevego" target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok"><FaTiktok size={20} /></a>
      <a href="https://www.youtube.com/@vevego" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube"><FaYoutube size={20} /></a>
      <a href="https://discord.com/users/vevego" target="_blank" rel="noopener noreferrer" className="social-icon" title="Discord: vevego"><FaDiscord size={20} /></a>
    </div>
  </motion.div>
)

const Work = ({ setActivePage, theme }) => {
  const projects = [
    {
      title: 'YouTube Profile',
      desc: 'Fan funding for support and interactive overlays.',
      link: 'https://venky-arisko.vercel.app/',
      icon: <FaYoutube size={24} />,
      isExternal: true
    },
    {
      title: 'Joki/Veve Service',
      desc: 'Professional gaming services and account boosting.',
      link: 'https://venkyarisko.github.io/joki-veve/',
      icon: <Briefcase />,
      isExternal: true
    },
    {
      title: 'PaySplitQR',
      desc: 'Android App (APK) for smart bill splitting.',
      link: 'paysplit',
      icon: <ExternalLink />,
      isExternal: false
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="cards-grid"
    >
      {projects.map((p, i) => (
        p.isExternal ? (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card">
              <div className="card-icon" style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{p.icon}</div>
              <div className="card-content">
                <motion.h3
                  animate={{ color: theme === 'light' ? '#1a1a1a' : '#f0f0f0' }}
                  transition={{ duration: 0.3 }}
                  style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}
                >
                  {p.title}
                </motion.h3>
                <p>{p.desc}</p>
                <div className="card-action" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                  View Project <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                </div>
              </div>
            </div>
          </a>
        ) : (
          <div key={i} className="card" onClick={() => setActivePage(p.link)}>
            <div className="card-icon" style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{p.icon}</div>
            <div className="card-content">
              <motion.h3
                animate={{ color: theme === 'light' ? '#1a1a1a' : '#f0f0f0' }}
                transition={{ duration: 0.3 }}
                style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}
              >
                {p.title}
              </motion.h3>
              <p>{p.desc}</p>
              <div className="card-action" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                Learn More <ExternalLink size={12} style={{ marginLeft: '4px' }} />
              </div>
            </div>
          </div>
        )
      ))}
    </motion.div>
  )
}

const PaySplit = ({ setActivePage }) => {
  const features = [
    { title: 'Dynamic QRIS', desc: 'Scan QRIS otomatis terisi nominal pas.' },
    { title: 'Split by Item', desc: 'Bagi tagihan akurat sampai pajak & servis.' },
    { title: 'Hutang/Piutang', desc: 'Catat siapa yang ditalangin, gak bakal lupa!' },
    { title: 'Share to WA', desc: 'Kirim rincian rapi langsung ke grup.' },
    { title: 'Database Resto', desc: 'Simpan menu favorit, input makin cepat.' },
    { title: 'Multi-Payment', desc: 'Simpan semua rekening & e-wallet kamu.' },
    { title: 'Draft & Riwayat', desc: 'Simpan progres atau lihat riwayat makan.' },
    { title: 'Tampilan Premium', desc: 'Desain modern dengan Dark Mode.' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Pusatkan secara vertikal
        position: 'relative',
        padding: '0 1rem',
        overflow: 'hidden' // Benar-benar tidak ada scroll
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => setActivePage('work')}
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: '1.5rem',
          background: 'none',
          border: 'none',
          color: 'var(--text-color)',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          zIndex: 110,
          padding: '0.5rem'
        }}
      >
        ← Back
      </button>

      {/* Konten Utama - Responsive scale untuk Desktop vs Mobile */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',
        maxWidth: '800px', // Lebih lebar di desktop
        gap: 'clamp(0.75rem, 2vh, 1.5rem)',
        padding: '1rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="badge" 
            style={{ 
              background: 'var(--accent-color)', 
              color: 'white', 
              marginBottom: '0.5rem',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)',
              padding: '0.25rem 0.75rem'
            }}
          >
            Featured Project
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2.8rem)', marginBottom: '0.25rem' }}
          >
            PaySplit QR
          </motion.h2>

          <p style={{ fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', color: 'var(--text-color)', fontWeight: 500, margin: 0 }}>
            Capek hitung manual? <span style={{ color: 'var(--accent-color)' }}>Pakai PaySplit QR!</span>
          </p>
        </div>

        {/* Grid Fitur - Tetap 2 kolom tapi ukuran adaptif */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(0.5rem, 1.5vw, 1rem)',
            width: '100%',
            padding: '0.25rem'
          }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              style={{
                padding: 'clamp(0.6rem, 2vw, 1.2rem)',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.15rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1rem)' }}>✅</span>
                <strong style={{ fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)', whiteSpace: 'nowrap' }}>{f.title}</strong>
              </div>
              <p style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)', margin: 0, color: 'var(--text-muted)', lineHeight: '1.4' }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.75rem, 2vh, 1.2rem)' }}>
          <p style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', fontStyle: 'italic', margin: 0, opacity: 0.8 }}>
            Hitung, Bagi, Bayar! 🚀
          </p>

          <a
            href="https://github.com/venkyarisko/PaySplit/releases/download/v1.2.4/PaySplit.apk"
            style={{ textDecoration: 'none' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: 'clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2.5rem)',
                borderRadius: '9999px',
                background: 'var(--accent-color)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              <Download size={20} /> Download
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const About = () => {
  const [lang, setLang] = useState('id')
  const [activeSubTab, setActiveSubTab] = useState('profile')

  const calculateDuration = (startDate) => {
    const start = new Date(startDate)
    const now = new Date()
    let years = now.getFullYear() - start.getFullYear()
    let months = now.getMonth() - start.getMonth()
    if (months < 0 || (months === 0 && now.getDate() < start.getDate())) {
      years--
      months += 12
    }
    return { years, months }
  }

  const age = calculateDuration('1999-04-21').years
  const youtubeExp = calculateDuration('2024-11-22')

  const content = {
    id: {
      profile: {
        title: "Profil",
        text: `Halo, saya Venky Arisko. Sebagai seorang Streamer YouTube yang kini menginjak usia ${age} tahun, saya mendedikasikan waktu saya untuk mengeksplorasi luasnya dunia digital dengan semangat belajar yang tak pernah padam.`
      },
      journey: {
        title: "Perjalanan",
        text: `Memulai langkah di YouTube sejak 22 November 2024 (sudah berjalan ${youtubeExp.years > 0 ? youtubeExp.years + ' tahun ' : ''}${youtubeExp.months} bulan), saya telah membangun ekosistem digital yang mencakup platform fan funding, layanan joki game, hingga aplikasi utilitas cerdas seperti PaySplitQR.`
      },
      vision: {
        title: "Visi",
        text: "Saya bercita-cita untuk menjadi influencer yang menginspirasi di YouTube serta menciptakan lebih banyak aplikasi solutif di masa depan. Dengan kerendahan hati, saya terus berjuang demi keluarga, dan dukungan kalian adalah energi utama bagi saya untuk terus berkembang."
      }
    },
    eng: {
      profile: {
        title: "Profile",
        text: `Hello, I'm Venky Arisko. As a YouTube streamer now ${age} years old, I am deeply committed to exploring the digital landscape with an ever-growing passion for learning and technology.`
      },
      journey: {
        title: "Journey",
        text: `Since starting my YouTube journey on November 22, 2024 (marking ${youtubeExp.years > 0 ? youtubeExp.years + ' years ' : ''}${youtubeExp.months} months), I have successfully launched a fan funding platform, professional gaming services, and utility apps like PaySplitQR.`
      },
      vision: {
        title: "Vision",
        text: "I aspire to become an influential creator on YouTube and develop more meaningful applications in the future. Driven by the goal of supporting my family, I remain humble and grateful for your support."
      }
    }
  }

  const t = content[lang]
  const tabs = ['profile', 'journey', 'vision']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        maxWidth: '700px',
        width: '100%',
        height: '500px', // Mengunci tinggi total agar posisi tidak bergeser
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Mulai dari atas
        padding: '0 1rem'
      }}
    >
      {/* Lang Switcher */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {['id', 'eng'].map(l => (
          <button key={l} onClick={() => setLang(l)} style={{
            padding: '0.25rem 0.75rem', borderRadius: '6px', border: '1px solid var(--border-color)',
            background: lang === l ? 'var(--text-color)' : 'transparent',
            color: lang === l ? 'var(--bg-color)' : 'var(--text-color)',
            fontSize: '0.7rem', cursor: 'pointer', fontWeight: 700, textTransform: 'uppercase'
          }}>{l}</button>
        ))}
      </div>

      <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>{lang === 'id' ? 'Tentang Saya' : 'About Me'}</h2>

      {/* Sub-Tabs Navigation */}
      <div style={{
        display: 'flex',
        background: 'var(--card-bg)',
        padding: '0.4rem',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        marginBottom: '2rem',
        gap: '0.25rem'
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              border: 'none',
              background: activeSubTab === tab ? 'var(--accent-color)' : 'transparent',
              color: activeSubTab === tab ? 'white' : 'var(--text-color)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem',
              transition: 'all 0.2s'
            }}
          >
            {t[tab].title}
          </button>
        ))}
      </div>

      {/* Content Display - Fixed Height to prevent jumping */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubTab + lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            textAlign: 'center',
            minHeight: '180px', // Menjaga posisi tab tetap stabil
            display: 'flex',
            alignItems: 'flex-start', // Mulai dari atas agar konsisten
            justifyContent: 'center',
            padding: '0 1rem',
            width: '100%'
          }}
        >
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>
            {t[activeSubTab].text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div style={{
        marginTop: '3rem',
        fontSize: '0.8rem',
        fontStyle: 'italic',
        color: 'var(--text-muted)',
        opacity: 0.8
      }}>
        {lang === 'id' ? 'Terima kasih atas dukungannya! 🙏' : 'Thank you for your support! 🙏'}
      </div>
    </motion.div>
  )
}

const Visualizer = ({ audioRef, isPlaying }) => {
  const canvasRef = useRef(null)
  const analyserRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) return

    const initAudio = () => {
      // Prevent multiple initializations
      if (analyserRef.current && window.audioCtx && window.audioCtx.state === 'running') return

      try {
        if (!window.audioCtx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext
          window.audioCtx = new AudioContext()
        }

        if (window.audioCtx.state === 'suspended') {
          window.audioCtx.resume()
        }

        if (!window.audioSource) {
          window.audioSource = window.audioCtx.createMediaElementSource(audioRef.current)
        }

        if (!analyserRef.current) {
          const analyser = window.audioCtx.createAnalyser()
          window.audioSource.connect(analyser)
          analyser.connect(window.audioCtx.destination)
          analyser.fftSize = 128
          analyserRef.current = analyser
        }
      } catch (err) {
        console.error("Visualizer error:", err)
      }
    }

    if (isPlaying && window.audioCtx && window.audioCtx.state === 'running') {
      initAudio()
    }

    window.addEventListener('click', initAudio)
    window.addEventListener('touchstart', initAudio)
    return () => {
      window.removeEventListener('click', initAudio)
      window.removeEventListener('touchstart', initAudio)
    }
  }, [audioRef, isPlaying])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw)

      if (!analyserRef.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      const bufferLength = analyserRef.current.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      analyserRef.current.getByteFrequencyData(dataArray)

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const barWidth = (canvas.width / bufferLength)
      let barHeight;

      // Mirror the bars to be tall in the middle
      for (let i = 0; i < bufferLength; i++) {
        // Calculate distance from center to pick the frequency bin
        // Higher frequencies at edges, lower (more active) frequencies in middle
        const center = bufferLength / 2
        const distFromCenter = Math.abs(i - center)
        const dataIndex = Math.floor(distFromCenter)

        barHeight = (dataArray[dataIndex] / 255) * canvas.height

        // Focus height in the middle by tapering edges
        const weight = Math.pow(1 - (distFromCenter / center), 1.5)
        barHeight *= weight

        const opacity = (dataArray[dataIndex] / 255) * 0.8 + 0.2
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`

        const radius = 2
        const x = i * barWidth
        ctx.beginPath()
        if (ctx.roundRect) {
          ctx.roundRect(x, canvas.height - barHeight, barWidth - 1, barHeight, [radius, radius, 0, 0])
        } else {
          ctx.rect(x, canvas.height - barHeight, barWidth - 1, barHeight)
        }
        ctx.fill()
      }
    }

    draw()
    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  return (
    <div className="visualizer-container">
      <canvas ref={canvasRef} width={300} height={60} className="visualizer-canvas" />
    </div>
  )
}



// --- Main App ---

function App() {
  const [activePage, setActivePage] = useState('home')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('venky-theme') || 'light'
  })

  // --- Music Shuffle Logic ---
  const songs = [
    { title: 'Lo-Fi : I Need a Girl', src: '/vevego/song/1.mp3' },
    { title: 'Lo-Fi : Ao no Sumika', src: '/vevego/song/2.mp3' },
    { title: 'Lo-Fi : More Than Words', src: '/vevego/song/3.mp3' },
    { title: 'Lo-Fi : Roaring Tides', src: '/vevego/song/4.mp3' },
    { title: 'Lo-Fi : Aoi Shiori', src: '/vevego/song/5.mp3' }
  ]

  const [playlist, setPlaylist] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(() => {
    const saved = localStorage.getItem('venky-music')
    return saved === null ? true : saved === 'true'
  })
  const [volume, setVolume] = useState(0.2)
  const audioRef = useRef(null)

  // Function to shuffle array
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    const newArray = [...array];
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
  }

  // Initialize playlist on mount
  useEffect(() => {
    const indices = songs.map((_, i) => i)
    setPlaylist(shuffle(indices))
  }, [])

  const handleSongEnd = () => {
    if (currentIndex + 1 >= playlist.length) {
      // Re-shuffle when all songs played
      const indices = songs.map((_, i) => i)
      setPlaylist(shuffle(indices))
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prev => prev + 1)
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('venky-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('venky-music', isPlaying)
    if (audioRef.current) {
      audioRef.current.volume = volume
      if (isPlaying) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay was prevented, wait for interaction
            const startAudio = () => {
              if (isPlaying && audioRef.current) {
                audioRef.current.play().catch(e => console.error("Final play attempt failed:", e))
              }
              window.removeEventListener('click', startAudio)
              window.removeEventListener('touchstart', startAudio)
            }
            window.addEventListener('click', startAudio)
            window.addEventListener('touchstart', startAudio)
          })
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [volume, isPlaying, currentIndex, playlist])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  // Helper to format time
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const currentSong = playlist.length > 0 ? songs[playlist[currentIndex]] : songs[0]
  const [showTitle, setShowTitle] = useState(false)

  // Auto-hide title logic
  useEffect(() => {
    if (currentSong && currentSong.title) {
      setShowTitle(true)
      const timer = setTimeout(() => {
        setShowTitle(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [currentSong.title])

  return (
    <div className="app-container">
      {/* Hidden Audio Element - Chill LoFi Shuffle */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onEnded={handleSongEnd}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        autoPlay
      />

      <div style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 101 }}>
        {/* Music Control Pill */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'var(--card-bg)',
          padding: '0.4rem 1rem',
          borderRadius: '999px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
        }}>
          {/* Info Overlay (Title or Timestamp) */}
          <AnimatePresence mode="wait">
            {showTitle ? (
              <motion.div
                key="title"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent-color)',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  borderRight: '1px solid var(--border-color)',
                  paddingRight: '0.75rem',
                  marginRight: '0.25rem'
                }}
              >
                {currentSong.title}
              </motion.div>
            ) : (
              <motion.div
                key="timestamp"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.5px',
                  whiteSpace: 'nowrap',
                  borderRight: '1px solid var(--border-color)',
                  paddingRight: '0.75rem',
                  marginRight: '0.25rem',
                  fontFamily: 'monospace'
                }}
              >
                {formatTime(currentTime)} / {formatTime(duration)}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={toggleMusic}
            style={{ background: 'none', border: 'none', color: 'var(--text-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}
          >
            {isPlaying && volume > 0 ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            style={{
              width: '50px',
              cursor: 'pointer',
              accentColor: 'var(--accent-color)',
              height: '4px'
            }}
          />
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          style={{ position: 'static', padding: '0.5rem' }}
        >
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>

      <main className="content-area">
        <AnimatePresence mode="wait">
          {activePage === 'home' && <Home key="home" />}
          {activePage === 'work' && <Work key="work" setActivePage={setActivePage} theme={theme} />}
          {activePage === 'paysplit' && <PaySplit key="paysplit" setActivePage={setActivePage} />}
          {activePage === 'about' && <About key="about" />}
        </AnimatePresence>
      </main>

      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Visualizer audioRef={audioRef} isPlaying={isPlaying} />
    </div>
  )
}


export default App
