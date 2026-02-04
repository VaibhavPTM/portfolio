import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Valentine() {
  const [saidYes, setSaidYes] = useState(false)
  const [noHover, setNoHover] = useState(false)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [noMoved, setNoMoved] = useState(false)

  const runAway = useCallback(() => {
    if (saidYes) return
    const padding = 80
    const maxX = window.innerWidth - 180
    const maxY = window.innerHeight - 56
    setNoPosition({
      x: Math.random() * (maxX - padding * 2) + padding,
      y: Math.random() * (maxY - padding * 2) + padding,
    })
    setNoMoved(true)
  }, [saidYes])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-300/40 text-2xl sm:text-4xl"
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              top: `${(i * 11 + 3) % 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            ♥
          </motion.span>
        ))}
      </div>

      {/* Back link */}
      <div className="relative z-10 pt-6 px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-pink-700/80 hover:text-pink-800 text-sm font-medium transition-colors"
        >
          <span>←</span> Back to portfolio
        </Link>
      </div>

      <div className="relative z-10 min-h-[calc(100vh-3rem)] flex flex-col items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          {!saidYes ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center max-w-lg mx-auto"
            >
              <motion.h1
                className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-rose-800 mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Will you be my forever?
              </motion.h1>
              <p className="text-rose-600/90 text-lg mb-12">♥</p>

              <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6 min-h-[140px]">
                <motion.button
                  type="button"
                  onClick={() => setSaidYes(true)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-lg shadow-lg shadow-pink-300/50 hover:shadow-xl hover:shadow-pink-400/50 transition-shadow"
                >
                  Yes
                </motion.button>

                {/* No button: runs away on hover - positioned fixed when escaped */}
                {noMoved ? (
                  <motion.button
                    type="button"
                    onMouseEnter={runAway}
                    onMouseMove={runAway}
                    onClick={runAway}
                    initial={{ opacity: 1 }}
                    animate={{
                      x: noPosition.x,
                      y: noPosition.y,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="fixed px-6 py-3 rounded-xl bg-white/95 text-rose-400 border-2 border-rose-200 font-medium text-lg shadow-lg hover:border-rose-300 whitespace-nowrap z-20 flex items-center gap-2"
                    style={{ left: 0, top: 0 }}
                  >
                    <span className="text-2xl" role="img" aria-label="sad">😢</span>
                    No...
                  </motion.button>
                ) : (
                  <motion.button
                    type="button"
                    onMouseEnter={() => {
                      setNoHover(true)
                      runAway()
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 rounded-xl bg-white/90 text-rose-400 border-2 border-rose-200 font-medium text-lg shadow-md hover:border-rose-300 whitespace-nowrap flex items-center gap-2"
                  >
                    {noHover ? (
                      <>
                        <span className="text-2xl" role="img" aria-label="sad">😢</span>
                        No...
                      </>
                    ) : (
                      'No'
                    )}
                  </motion.button>
                )}
              </div>

              <motion.p
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-rose-600/90 text-sm font-medium"
              >
                Try to click No... if you dare 😏
              </motion.p>

              {noHover && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-rose-500/80 text-sm"
                >
                  (Okay, maybe try the other button...)
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="text-center max-w-md mx-auto"
            >
              <motion.span
                className="text-6xl sm:text-7xl block mb-4"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6 }}
              >
                💕
              </motion.span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-rose-800 mb-2">
                Congratulations!
              </h2>
              <p className="text-xl text-rose-700">
                You're going to be so happy together.
              </p>
              <motion.p
                className="text-4xl mt-6"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ♥ ♥ ♥
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
